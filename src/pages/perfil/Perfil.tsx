import { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import loginLogo from '../../assets/login.gif'
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
    <div className='container mx-auto mt-4 rounded-2xl overflow-hidden'>
      <img className='w-full h-72 object-cover border-b-8 border-white' src={loginLogo} alt="Capa do Perfil" />
      <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10' />
      <div className="relative mt-[-6rem] h-72 flex flex-col bg-[#3CB371] text-white text-2xl items-center justify-center">
        <p>Nome: {usuario.nome} </p>
        <p>Email: {usuario.email}</p>
      </div>
      <div className='flex gap-8'>
      <Link to="/cadastroProduto" className='hover:scale-125 rounded bg-[#3CB371] text-[#000000] py-2 px-4'>Cadastrar Produto</Link>
      <Link to='/cadastroCategoria' className='hover:scale-125 rounded bg-[#3CB371] text-[#000000] py-2 px-4'>Cadastrar Categorias</Link>
      <div className='hover:scale-125 rounded bg-[#3CB371] text-[#000000] py-2 px-4' >Produtos Cadastrados</div>
      </div>
    </div>
  )
}

export default Perfil