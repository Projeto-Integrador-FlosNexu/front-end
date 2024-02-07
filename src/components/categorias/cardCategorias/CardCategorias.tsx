import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriaProps) {
  return (
    <div className='border border-dark-30 shadow-md rounded-2xl flex flex-col  bg-transparent backdrop-blur-2xl  overflow-hidden justify-between'>
      <header className='py-2 px-6 border-b border-gray-300 bg-transparent text-black font-bold text-2xl text-center'>{categoria.nome}</header>
      
      
      
      
      
      <p className='p-8 text-lg bg-transparent h-full text-center'>{categoria.descricao}</p>
      <div className="flex">
        <Link to={`/editarCategoria/${categoria.id}`}
                  className='w-1/2 text-white flex items-center justify-center py-2'>
          <button className='w-[90%] cursor-pointer border-solid border-white border-2 outline-none text-center rounded-3xl text-black bg-white py-1.5 items-center justify-center text-[1em]'>Editar</button>
        </Link>
        <Link to={`/deletarCategoria/${categoria.id}`}
          className='w-1/2 text-white flex items-center justify-center py-2'>
          <button className='w-[90%] cursor-pointer border-solid border-white border-2 outline-none text-center rounded-3xl text-black bg-white py-1.5 items-center justify-center text-[1em]'>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardCategorias