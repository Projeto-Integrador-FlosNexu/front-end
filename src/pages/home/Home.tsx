import "./Home.css";
import painelsolar from "../../assets/placaPNG.png";
import painel from "../../assets/painel.png";
import baterialitio1 from "../../assets/baterialitio.png";
import telha from "../../assets/telha.png";
import caminhaofrete from "../../assets/caminhãofrete.png";
import iconesac from "../../assets/iconesac.png";
import iconegarantia from "../../assets/icongarantia.png";
import Carousel from "../../components/swiperCorousel/CarouselContainer";
import { Link } from "react-router-dom";
import telha1 from "../../assets/telhatermica.png";
import telha2 from "../../assets/telhavinho.png";
import bateriasolar from "../../assets/bateriaportatil.png";
import carregador1 from "../../assets/carregadorplaca.png";
import carregador2 from "../../assets/carregadorsolar.png";
import bateriasolar1 from "../../assets/bateriamouras.png";
import carregador3 from "../../assets/carregadorsolpor.png";
import turbininha from "../../assets/miniturbina.png";
import placa from "../../assets/placacomcoisa.jpeg";
import img2 from  "../../assets/fundo2e42.jpg"
import fundo2e4 from '../../assets/fundo2e42.jpg'
function Home() {
  return (
    <>
      <div className="mobilemax:hidden">
        <div>{Carousel()}</div>
        <div className="flex pt-10 pb-10">
          {/* Caminhao Frete*/}
        
          <div className="flex ">
            <img className="w-[20%]" src={caminhaofrete} />
            <div className="flex flex-col justify-center ">
              <h1 className=" font-bold text-2xl">
                Frete Grátis para todo o Brasil{" "}
              </h1>
              <h3 className=" text-2xl">
                Envio rápido e acompanhado com código de rastreio.
              </h3>
            </div>
          </div>
          {/*IconeSac*/}
          <div className="flex mobilemax:hidden">
            <img className="w-[20%] h-[80%] pl-[5rem] pt-[1rem]" src={iconesac} />
            <div className="flex flex-col justify-center pl-5">
              <h1 className="font-bold text-2xl">
                Frete Grátis para todo o Brasil{" "}
              </h1>
              <h3 className="text-2xl">
                Envio rápido e acompanhado com código de rastreio.
              </h3>
            </div>
          </div>
          <div className="flex">
          <img className='w-[20%] pl-[5rem] h-[90%] pt-[2rem]' src={iconegarantia} />
          <div className="flex flex-col justify-center pl-5">
          <h1 className='font-bold text-2xl '>Compra Garantida </h1>
          <h3 className='text-2xl'>Receba o produto que está esperando, ou devolvemos o seu dinheiro.</h3>
          </div>
          </div>
        </div>
      </div>
      
      <div className="mobilemax:hidden">
        <h1 className="text-center text-5xl font-bold">Produtos</h1>
      </div>
      <div className=" flex pb-10 pt-10 gap-3 mobilemax:hidden ">
      <div className="max-w-sm rounded overflow-hidden shadow-lg ">
      <img
        className="w-full"
        src={bateriasolar} 
        alt="Imagem do card"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">produto</div>
        <p className="text-gray-700 text-base ">
          Algum texto descritivo sobre o card vai aqui.
        </p>
        <h1 className='ml-4 precoproduto'>R$ 1.500,00</h1>
      </div>
      
    </div>
    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
      <img
        className="w-full"
        src={telha2}
        alt="Imagem do card"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">CARREGADOR SOLAR PORTÁTIL</div>
        <p className="text-gray-700 text-base">
          Algum texto descritivo sobre o card vai aqui.
        </p>
        <h1 className='ml-4 precoproduto'>R$ 1.500,00</h1>
      </div>
    </div>
    </div>

    {/*Mobile*/}

    <div className="mobilemin:hidden">
        <div className="mb-10">{Carousel()}</div>
        <div className="flex pt-10 pb-20 flex-wrap items-center pr-5">
          {/* Caminhao Frete*/}
          <div className="flex items-center pl-10 mb-10">
            <img className="w-[20%] " src={caminhaofrete} />
            <div className="flex flex-col justify-center">
              <h1 className=" font-bold text-2xl">
                Frete Grátis para todo o Brasil{" "}
              </h1>
              <h3 className=" text-2xl">
                Envio rápido e acompanhado com código de rastreio.
              </h3>
            </div>
          </div>
          {/*IconeSac*/}
          <div className="flex mb-10">
            <img className="w-[20%] h-[80%] pl-[5rem] pt-[1rem]" src={iconesac} />
            <div className="flex flex-col justify-center pl-5">
              <h1 className="font-bold text-2xl">
                Frete Grátis para todo o Brasil{" "}
              </h1>
              <h3 className="text-2xl">
                Envio rápido e acompanhado com código de rastreio.
              </h3>
            </div>
          </div>
          <div className="flex">
          <img className='w-[20%] pl-[5rem] h-[90%] pt-[2rem]' src={iconegarantia} />
          <div className="flex flex-col justify-center pl-5">
          <h1 className='font-bold text-2xl '>Compra Garantida </h1>
          <h3 className='text-2xl'>Receba o produto que está esperando, ou devolvemos o seu dinheiro.</h3>
          </div>
          </div>
        </div>
      </div>
      
      <div className="mobilemin:hidden">
        <h1 className="text-center text-5xl font-bold">Produtos</h1>
      </div>
      <div className="flex pb-10 pt-10 gap-3 mobilemin:hidden flex-wrap justify-center">
      <div className="max-w-sm rounded overflow-hidden shadow-lg text-center ">
      <img
        className="w-full"
        src={bateriasolar} 
        alt="Imagem do card"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">produto</div>
        <p className="text-gray-700 text-base">
          Algum texto descritivo sobre o card vai aqui.
        </p>
        <h1 className='ml-4 precoproduto'>R$ 1.500,00</h1>
      </div>
      
    </div>
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={telha2}
        alt="Imagem do card"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">CARREGADOR SOLAR PORTÁTIL</div>
        <p className="text-gray-700 text-base">
          Algum texto descritivo sobre o card vai aqui.
        </p>
        <h1 className='ml-4 precoproduto'>R$ 1.500,00</h1>
      </div>
    </div>
    </div>
    
    </>
  );
}

export default Home;
