import React from 'react'
import login from '../../assets/retro.png'
import { Link, useNavigate } from 'react-router-dom';

export default function Slide01() {
  return (
    <div>
      <div className="gradiente-container">
      <img src={login} alt="" className='w-full h-full' />
          <div className='container grid grid-cols-2 text-white'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Mude o mundo,<br />Comece atravez de nós:</h2>
                <p className='text-2xl'>Soluções energéticas para sua casa e sua empresa.</p>
              <Link to="/login" className='rounded border border-gray-100 bg-transparent text-white py-2 px-4'>Voltar</Link>
              <Link to="/cadastroProduto" className='rounded border border-gray-100 bg-transparent text-white py-2 px-4'>Cadastrar Produto</Link>
            </div>
            <div className="flex justify-center ">
              
      
            </div>
      
            </div>
          </div>

    </div>
  )
}
