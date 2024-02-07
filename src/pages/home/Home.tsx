import './Home.css';
import turbina from '../../assets/FlosNexu2.png';
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
         {/* CARD PARA DIRECIONAR PRA PAGINA DE LOGIN */}
        <div className='cardLogin '> 
          <h2 className=' mt-16 mb-8 font-bold '>Entre na sua conta</h2>
          <div>
            <img className='imagem-conta ' src={turbina} alt="Imagem Conta" />
          </div>
          <div className='flex justify-center text-center p-4 mt-9'>
            <p>Aproveite ofertas para comprar tudo que quiser</p>
          </div>
          <button className='buttonCadastro rounded-3xl text-black bg-white w-60 mb-20 mt-4 py-1.5 '>
            <Link to="/login" className="text-black font-bold rounded-md p-2">Entrar na sua conta</Link>
          </button>
        </div>

 {/* CARD PARA DIRECIONAR PRA PAGINA DE PRODUTOS*/}
        <div className='cardLogin '>
          <h2 className=' font-bold pb-11 mb-1 mt-2 '>Visto recentemente</h2>
          <div>
            <Link to="/produtos" className="text-black hover:underline rounded-md p-2">
              <img className='imagem-conta mt-2' src={painel} alt="Imagem Conta" /></Link>
          </div>
          <div className='flex justify-center text-center p-4 mb-3 h-16'>
            <p>Portátil 300W Painel Flexível Solar Kit 12/24V Interruptor...</p>
          </div>
          <div> 
          <h2 className='font-bold flex h-5 mb-1'> R$ 4.599,00</h2>
          </div>
          <div> 
          <h2 className='font-bold flex mt-0 text-green-800 mb-2'>Frete Grátis</h2>
          </div>
          
        </div>

 {/* CARD PARA DIRECIONAR PRA PAGINA DE CATEGORIAS */}
        <div className='cardLogin '>
          <h2 className='mt-10 mb-10 pb-20 font-bold'>Nossas categorias</h2>
          <div>
            <img className='imagem-conta' src={servico} alt="Imagem Conta" />
          </div>
          <div className='flex justify-center text-center p-4'>
            <p>Encontre placas solares, baterias solares, serviços de instalação e muito mais</p>
          </div>
          <button className='buttonCadastro rounded-3xl text-black bg-white w-60 mb-10 py-1.5'>
            <Link to="/login" className="text-black font-bold rounded-md p-2">Ir para categorias</Link>
          </button>
        </div>

 {/* CARD PARA DIRECIONAR DE OFERTAS DO DIA */}
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
