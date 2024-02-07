import { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import "./Perfil.css"
function Perfil() {
  let navigate = useNavigate()

  const { usuario } = useContext(AuthContext)

  useEffect(() => {
    if (usuario.token === "") {
      alert('Você precisa estar logado')
      navigate("/login")
    }
  }, [usuario.token])

  return (
    <div className='fundoPerfil'>
      <div className='backdrop-blur-sm bg-transparent border-white border-4
       rounded '>
      <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full mt-[-7rem] w-56 mx-auto border-4 border-white relative z-10' />
      <div className=" flex flex-col text-white text-2xl items-center justify-center">
       <div className='border-4 rounded mt-10 bg-black bg-opacity-60 p-5'>
        <p>Nome: {usuario.nome} </p>
        <p>Email: {usuario.email}</p>
        <p>{usuario.tipo}</p>
        </div>
      <div className='flex gap-8 mt-10 m-4'>
      <Link to="/cadastroProduto" className='border-4 rounded bg-[#bab7b7] text-center text-white py-2 px-4'>Cadastrar Produto</Link>
      <Link to='/cadastroCategoria' className='border-4 rounded bg-[#bab7b7] text-center text-white py-2 px-4'>Cadastrar Categorias</Link>
      <div className='border-4 rounded bg-[#bab7b7] text-white text-center py-2 px-4' >Produtos Cadastrados</div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Perfil