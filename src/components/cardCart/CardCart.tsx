import { useContext } from "react";
import Produto from "../../models/Produto";
import { CartContext } from "../../contexts/CartContext";
import { useEffect, useState } from 'react';

interface CardProdutosProps {
    item: Produto
}

function CardCart({ item }: CardProdutosProps) {

    const { adicionarProdutos, removerProduto, atualizarProduto } = useContext(CartContext)
    const [cart, setCart] = useState([]);
        
    // const getTotal = () => {
    //     let sum = 0;
    
    //     for (let item of cart) {
    //       sum += item.preco * item.quantidade;
    //     }
    
    //     return sum;
    //   };
    
    //   const cartTotal = getTotal();
    //ESSE CODIGO É O QUADRADINHO DO PRODUTO QUANDO É ADICIONADO NO CARRINHO
    return (

        <div className='flex flex-col rounded-lg overflow-hidden justify-between bg-white' >
            <div className='py-4'>

                <img src={item.foto} className='mt-1 h-40 max-w-75 mx-auto' alt={item.nome} />

                <div className='p-4'>
                    <p className='text-sm text-center uppercase'>{item.nome}</p>
                    <h3 className='text-xl text-center font-bold uppercase'>
                        {Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(item.preco)}
                    </h3>
                    
                </div>
            </div>
            <td>
        <div className='qty'>
          <button className=' w-10 text-slate-100 bg-red-500 hover:bg-red-700 
                                   flex items-center justify-center py-2'
            onClick={() => {
                atualizarProduto(item.id, 'decrease');
            }}
          >
            <i className='bx bx-minus'>-</i>
          </button>
          <span>{item.quantidade}</span>
          <button className=' w-10 text-slate-100 bg-red-500 hover:bg-red-700 
                                   flex items-center justify-center py-2'
            onClick={() => {
                atualizarProduto(item.id, 'increase');
            }}
          >
            <i className='bx bx-plus'>+</i>
          </button>
        </div>
      </td>
      <td>R$ {item.preco * item.quantidade}</td>
            <div className="flex flex-wrap">
                <button className='w-full text-slate-100 bg-red-500 hover:bg-red-700 
                                   flex items-center justify-center py-2'
                    onClick={() => removerProduto(item.id)}>
                    Remover 
                </button>
            </div>
        </div >
    )
}

export default CardCart;