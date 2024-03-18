import Produto from '../../../models/Produto'
import { Link, ShoppingCart } from '@phosphor-icons/react'

interface CardProdutoProps {
  post: Produto
}

function CardProduto({ post }: CardProdutoProps) {
  return (
    <div className="container">
      <div className="duration-500 -mt-24 bg-white shadow-md w-72 h- rounded-xl hover:scale-105 hover:shadow-xl">
        <img src={post.foto} alt="produto" className=" h-80 rounded-t-xl" />
        <div className="px-4 py-3 w-72">
          <span className="mr-3 text-xs text-gray-400 uppercase"></span>
          <p className="block text-lg font-bold text-center text-black capitalize truncate">{post.nome}</p>
          <div>

            {post.descricao}
          </div>
          <div className="flex items-center">
            <p className="my-3 text-lg font-semibold text-black cursor-auto">
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(post.preco)}
            </p>

          </div>
        </div>
        <div className='flex gap-8 mt-10 m-4'>
            <Link to="/cadastroProduto" className='border-2 border-[#82D338] rounded-2xl bg-transparent text-center text-[#82D338] py-2 px-4'>Cadastrar Produto</Link>
            <Link to="/cadastroCategoria" className='border-2 border-[#82D338] rounded-2xl bg-transparent text-center text-[#82D338] py-2 px-4'>Cadastrar Categorias</Link>
            <Link to="/produtos" className='border-2 border-[#82D338] rounded-2xl bg-transparent text-center text-[#82D338] py-2 px-4' >Produtos Cadastrados</Link>
          </div>
      </div>
    </div>
  )
}

export default CardProduto;
