import React from 'react';
import './Home.css';
import retro from '../../assets/retro.jpg';
import Carousel from '../../components/swiperCorousel/CarouselContainer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className='carrossel'>
        {Carousel()}
      </div>

      <div className="carrossel" style={{ /* Adicione os estilos inline aqui */ }}>
        <div className='card-login w-30 h-auto text-black justify-center flex flex-col p-4'>
          <h2 className='mt-10 mb-10 font-bold'>Entre na sua conta</h2>
          <div>
            <img className='imagem-conta' src={retro} alt="Imagem Conta" />
          </div>
          <div className='flex justify-center align-top'>
            <p>Aproveite ofertas para comprar tudo que quiser</p>
          </div>
          <br />
          <button className='buttonCadastro rounded-3xl text-black bg-white w-full py-1.5'>
            <Link to="/login" className="text-black hover:underline rounded-md p-2">Entrar na sua conta</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
