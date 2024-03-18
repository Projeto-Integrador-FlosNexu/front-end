import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import CardCart from "../cardCart/CardCart";
import Summary from "../sumary/Sumary";
import '../sumary/Sumary.css'
import './Cart.css'


function Cart() {

    const navigate = useNavigate();

    const { items, limparCart } = useContext(CartContext)

      
      const getTotal = () => {
        let sum = 0;
    
        for (let item of items) {
          sum += item.preco * item.quantidade;
        }
    
        return sum;
      };
    
      const cartTotal = getTotal();
    
    return (
      <div className="fundocartinho">
        <div className="
                bg-gray-200 
                flex 
                flex-col
                justify-center
                ">

            <h1 className="text-4xl text-center my-4">
                Carrinho de Compras
            </h1>
            <h2 className="text-2xl text-center my-4">
                {items.length === 0 ? 'O Carrinho está vazio!' : ''}
            </h2>
            <div className='container mx-auto my-4 grid grid-cols-1 
                            md:grid-cols-2 lg:grid-cols-5 gap-4'>
                {
                    items.map(produto => (
                        <CardCart key={produto.id} item={produto} />
                    ))
                }
            </div>

            
            <aside>
            <Summary total={cartTotal} />
          </aside>
        </div>
        </div>
        
    )
}
export default Cart;