import './Home.css';
import turbina from '../../assets/turbina.png';
import painel from '../../assets/painel.png';
import servico from '../../assets/servico.png';
import arvore from '../../assets/arvore.png';
import Carousel from '../../components/swiperCorousel/CarouselContainer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='fundoHome'>
      <div className='carrossel'>
        {Carousel()}
      </div>
      <div className='container mx-auto'> 
        <div className='cardLogin '>
          <h2 className='mt-10 mb-10 font-bold'>Entre na sua conta</h2>
          <div>
            <img className='imagem-conta' src={turbina} alt="Imagem Conta" />
          </div>
          <div className='flex justify-center text-center p-4'>
            <p>Aproveite ofertas para comprar tudo que quiser</p>
          </div>
          <button className='buttonCadastro rounded-3xl text-black bg-white w-60 mb-10 py-1.5 '>
            <Link to="/login" className="text-black hover:underline rounded-md p-2">Entrar na sua conta</Link>
          </button>
        </div>
        <div className='cardLogin '>
          <h2 className='mt-10 mb-10 font-bold pb-11'>Entre na sua conta</h2>
          <div>
            <img className='imagem-conta' src={painel} alt="Imagem Conta" />
          </div>
          <div className='flex justify-center text-center p-4'>
            <p>Aproveite ofertas para comprar tudo que quiser</p>
          </div>
          <button className='buttonCadastro rounded-3xl text-black bg-white w-60 mb-10 py-1.5'>
            <Link to="/produtos" className="text-black hover:underline rounded-md p-2">Entrar na sua conta</Link>
          </button>
        </div>
        <div className='cardLogin '>
          <h2 className='mt-10 mb-10 pb-20 font-bold'>Entre na sua conta</h2>
          <div>
            <img className='imagem-conta' src={servico} alt="Imagem Conta" />
          </div>
          <div className='flex justify-center text-center p-4'>
            <p>Aproveite ofertas para comprar tudo que quiser</p>
          </div>
          <button className='buttonCadastro rounded-3xl text-black bg-white w-60 mb-10 py-1.5'>
            <Link to="/login" className="text-black hover:underline rounded-md p-2">Entrar na sua conta</Link>
          </button>
        </div>
        <div className='cardLogin '>
          <h2 className='mt-10 mb-10 font-bold pb-2'>Entre na sua conta</h2>
          <div>
            <img className='imagem-conta' src={arvore} alt="Imagem Conta" />
          </div>
          <div className='flex justify-center text-center p-4'>
            <p>Aproveite ofertas para comprar tudo que quiser</p>
          </div>
          <button className='buttonCadastro rounded-3xl text-black bg-white w-60 mb-10 py-1.5'>
            <Link to="/login" className="text-black hover:underline rounded-md p-2">Entrar na sua conta</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
