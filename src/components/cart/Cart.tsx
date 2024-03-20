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
      <div className="bg-transparent flex-row-reverse w-4/6 mr-72 mobilemax:hidden">
      <h1 className="text-4xl mt-[-10px] text-center ">
            Carrinho de Compras
          </h1>

          <h2 className="text-2xl text-center my-4">
            {items.length === 0 ? 'O Carrinho está vazio!' : ''}
          </h2>
        <div className=" mt-[-100px] bg-gray-200 flex h-[800px] w-[1300px] flex-col justify-center">
          <div>
            <div className='container mt-[-30px] grid grid-cols-1 
                            md:grid-cols-2 lg:grid-cols-5 gap-4'>
              {
                items.map(produto => (
                  <CardCart key={produto.id} item={produto} />
                ))
              }
            </div>
          </div>
          <aside className="ml-[800px] mt-[-360px]">
            <Summary total={cartTotal} />
          </aside>
          



          

        </div>
        
      </div>
    </div>

  )
}
export default Cart;