import { Link, useNavigate } from 'react-router-dom'
import React from 'react'


function Navbar() {
  return (
    <>
     <div className='w-full bg-[#3CB371] text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <Link to='/home' className='text-2xl font-bold uppercase'>FlosNexu</Link>

            <div className='flex gap-4'>
              <Link to='/about' className='hover:underline'>About</Link>
              <div className='hover:underline'>Produtos</div>
              <div className='hover:underline'>Categorias</div>
              <div className='hover:underline'>Perfil</div>
              <Link to='/home' className='hover:underline'>Sair</Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar;