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
    <>
    <div className='fundoPerfil mobilemax:hidden'>
      <div className=' w-2/5 backdrop-blur-sm bg-white border-white border-4
       rounded-2xl '>
        <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='imagem rounded-full mt-[-7rem] mx-auto border-white relative z-10' />

        <div className=" flex flex-col rounded-2xl text-white text-2xl items-center justify-center">
          <div className='border-4 rounded-2xl mt-10 bg-transparent text-black  p-5'>
            <p>Nome: {usuario.nome} </p>
            <p>Email: {usuario.email}</p>
            <p>Classificação: {usuario.tipo}</p>
          </div>
          <div className='flex gap-8 mt-10 m-4'>
            <Link to="/produtos/novo" className='border-2 border-[#82D338] rounded-2xl bg-transparent text-center text-[#82D338] py-2 px-4'>Cadastrar Produto</Link>
            <Link to="/cadastroCategoria" className='border-2 border-[#82D338] rounded-2xl bg-transparent text-center text-[#82D338] py-2 px-4'>Cadastrar Categorias</Link>
            <Link to="/produtos" className='border-2 border-[#82D338] rounded-2xl bg-transparent text-center text-[#82D338] py-2 px-4' >Produtos Cadastrados</Link>
            <Link to="/categorias" className='border-2 border-[#82D338] rounded-2xl bg-transparent text-center text-[#82D338] py-2 px-4' >Categorias</Link>
          </div>
        </div>
      </div>
    </div>

    <div className='fundoPerfil mobilemin:hidden'>
      <div className=' w-[250px] h-[400px] backdrop-blur-sm bg-white border-white border-4
       rounded-2xl '>
        <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='imagem rounded-full mt-[-7rem] mx-auto border-white relative z-10' />

        <div className=" flex flex-wrap rounded-2xl text-white text-2xl items-center justify-center">
          <div className='border-4 rounded-2xl mt-10 bg-transparent text-black  p-5'>
            <p>Nome: {usuario.nome} </p>
            <p>Email: {usuario.email}</p>
            <p>Classificação: {usuario.tipo}</p>
          </div>
          <div className='flex flex-wrap justify-center gap-8 mt-10 m-4'>
          <Link to="/produtos" className='border-2 border-[#82D338] rounded-2xl bg-transparent text-center text-[#82D338] py-2 px-4' >Produtos</Link>
            <Link to="/categorias" className='border-2 border-[#82D338] rounded-2xl bg-transparent text-center text-[#82D338] py-2 px-4' >Categorias</Link>
            <Link to="/produtos/novo" className='border-2 border-[#82D338] rounded-2xl bg-transparent text-center text-[#82D338] py-2 px-4'>Cadastrar Produto</Link>
            <Link to="/cadastroCategoria" className='border-2 border-[#82D338] rounded-2xl bg-transparent text-center text-[#82D338] py-2 px-4'>Cadastrar Categorias</Link>
          
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Perfil