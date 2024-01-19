import React from 'react';
import './Home.css';
import homeLogo from '../../assets/react.svg'
import { Link, useNavigate } from 'react-router-dom';


function Home() {
    return (
        <>
        <div className="bg-[#228B22] flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem-vinde:</h2>
              <Link to="/login" className='rounded bg-[#F5DABF] text-[#FF8100] py-2 px-4'>Voltar</Link>
            </div>
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
      
            </div>
      
            </div>
          </div>
       
      
      </>
    );
}

export default Home;