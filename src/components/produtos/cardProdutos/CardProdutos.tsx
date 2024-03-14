import Produto from '../../../models/Produto'
import { ShoppingCart } from '@phosphor-icons/react'

interface CardProdutoProps {
  post: Produto
}

function CardProduto({ post }: CardProdutoProps) {
  return (
    <div className='w-80 mx-[20%] my-3 bg-white bg-opacity-10 backdrop-blur-2xl shadow-md rounded-2xl border justify-center'>
      <div>
        <div className="h-48 w-full bg-transparent border-solid  flex flex-col justify-between p-1 bg-center ">
          <img src={post.foto} className=' block m-auto h-48 w-60 border-2' alt="" />
        </div>

        <div className='pb-4 pt-3 px-4 h-32'>
          <p className='text-gray-600 font-light text-xs text-center'>{post.marca}</p> {/* <---- Marca: */}
          <p className='text-gray-800 text-center mt-1'>{post.nome}</p>
            <span className='text-green-600 font-bold flex justify-center '> R$ {post.preco} </span> 
         
        </div>
        
         {/* Trecho abaixo contem botões para adiconar ou remover quantidadee de itens: 
        <div className="flex justify-center my-1 ">
          <button
            className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 12H4"
              />
            </svg>
          </button>
          <div
            className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none"
          >
            2
          </div>
          <button
            className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
         fim botão */}
          {/* Inicio botão adicionar carrinho de  */}
          <div className='mx-4'>
          <button className='border-2 py-2 px-4 bg-green-800 text-white rounded-3xl hover:bg-green-600 active:bg-green-700 disabled:opacity-50 my-5 w-full flex items-center justify-center text-center'>
            <span className=''>Adicionar ao carrinho</span>
            <ShoppingCart size={26} className='ml-1'/>
        
            </button>
            </div>
        {/* Fim botão carrinho de compras */}
      </div>
      
      {/* <div className="flex">
        <Link to={`/editarProduto/${post.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarProduto/${post.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
        
      </div> */}
    </div>
  )
}

export default CardProduto;