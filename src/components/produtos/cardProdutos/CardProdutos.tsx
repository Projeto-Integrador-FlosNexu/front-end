import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'
// import { ShoppingCart } from '@phosphor-icons/react'

interface CardProdutoProps {
  post: Produto
}

function CardProduto({ post }: CardProdutoProps) {
  return (
    <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
      <div>
        <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
            <p>{post.nome}</p>
        </div>
        <div className='p-4 '>
          <img src={post.foto} className='w-12' alt="" />
          <p>Preço: {post.descricao} </p>
          <h4 className='text-lg font-semibold uppercase'>{post.nome}</h4>
          <p>{post.descricao}</p>
          <p>Categoria: {post.categoria?.descricao}</p>
          <p>Marca: {post.marca}</p>
        </div>
      </div>
      <div className="flex">
        <Link to={`/editarProduto/${post.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarProduto/${post.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
        {/* <button><ShoppingCart size={32} /></button> */}
      </div>
    </div>
  )
}

export default CardProduto