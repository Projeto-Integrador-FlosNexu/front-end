import './Home.css';
import painelsolar from '../../assets/placaPNG.png';
import painel from '../../assets/painel.png';
import baterialitio1 from '../../assets/baterialitio.png'
import telha from '../../assets/telha.png'
import caminhaofrete from "../../assets/caminhãofrete.png"
import iconesac from '../../assets/iconesac.png'
import iconegarantia from '../../assets/icongarantia.png'
import Carousel from '../../components/swiperCorousel/CarouselContainer';
import { Link } from 'react-router-dom';
import telha1 from '../../assets/telhatermica.png'
import telha2 from '../../assets/telhavinho.png'
import bateriasolar from '../../assets/bateriaportatil.png'
import carregador1 from '../../assets/carregadorplaca.png'
import carregador2 from '../../assets/carregadorsolar.png'
import bateriasolar1 from '../../assets/bateriamouras.png'
import carregador3 from '../../assets/carregadorsolpor.png'
import turbininha from '../../assets/miniturbina.png'
import placa from '../../assets/placacomcoisa.jpeg'
function Home() {
  return (
    <div className='fundoHome'>
      <div className='carrossel'>
        {Carousel()}
      </div>
      <div className='container10 '>
        <div className='container1 mt-40 '>
          <div className='cardFrete'>
            <div>
              <img className='imagemfrete' src={caminhaofrete} />
            </div>
            <div>
              <h1 className=' ml-11  font-bold text-2xl'>Frete Grátis para todo o Brasil </h1>
              <h3 className=' ml-11 text-2xl'>Envio rápido e acompanhado com código de rastreio.</h3>
            </div>
          </div>

        </div>
        <div className='container1 mt-40 '>
          <div className='cardSac'>
            <div>
              <img className='imagemsac ' src={iconesac} />
            </div>
            <div>
              <h1 className=' ml-14  font-bold text-2xl'>Suporte ao Cliente 24hrs </h1>
              <h3 className=' ml-14 text-2xl'>Equipe de suporte sempre à disposição para te ajudar.</h3>
            </div>
          </div>
        </div>
        <div className='container1 mt-40 '>
          <div className='cardGarantia'>
            <div>
              <img className='imagemgarantia' src={iconegarantia} />
            </div>
            <div>
              <h1 className=' ml-14  font-bold text-2xl'>Compra Garantida</h1>
              <h3 className=' ml-14 text-2xl'>Receba o produto que está esperando, ou devolvemos o seu dinheiro.</h3>
            </div>
          </div>
        </div>
      </div>


      {/*TERCEIRO CONTAINER COM OS CARDS DE IMAGENS EM PNG*/}
      <div className='container'>
        <div className='container2'>
          {/* CARD PARA DIRECIONAR PRA PAGINA DE LOGIN */}
          <div className='cardImagem1 '>
          </div>

          {/* CARD PARA DIRECIONAR PRA PAGINA DE PRODUTOS*/}
          <div className='cardImagem2 '>
            <div>
              <Link to="/produtos" className="text-black hover:underline rounded-md p-2">
                <img className='imagem-conta2  mt-2' src={painelsolar} /></Link>

            </div>
            <div>
              <h1 className='text-white text-7xl -ml-80 '>30% OFF</h1>
              <h2 className='text-white text-4xl -ml-80 '>Em placas solares
              </h2>
              <h1 className='textovei mt-6 underline text-3xl -ml-80 '>Compre agora</h1>
            </div>


          </div>

          {/* CARD PARA DIRECIONAR PRA PAGINA DE CATEGORIAS */}
          <div className='cardImagem3 '>

            <div>
              <img className='imagem-conta3' src={baterialitio1} alt="Imagem Conta" />
            </div>
            <div>
              <h1 className='text-white text-5xl -mb-7 mt-6'>Bateria Solar</h1>
            </div>


          </div>
          {/* CARD PARA DIRECIONAR DE OFERTAS DO DIA */}
        </div>
        <div className='container3'>
          <div className='cardImagem4'>
          <div>
              <Link to="/produtos" className="text-black hover:underline rounded-md p-2">
                <img className='imagem-conta3 -ml-28 mt-2' src={carregador2} /></Link>

            </div>
            <div>
              <h1 className='text-white text-7xl -ml-80 '>10% OFF</h1>
              <h2 className='text-white text-4xl -ml-80 '>Carregador Solar Portátil
              </h2>
              <h1 className='textovei mt-6 underline text-3xl -ml-80 '>Compre agora</h1>
            </div>
          </div>
          {/* CARD PARA DIRECIONAR DE OFERTAS DO DIA */}
          <div className='cardImagem5'>

            <div>
              <img className='imagem-conta5' src={telha} alt="Imagem Conta" />
            </div>
            <div>
              <h1 className='text-white text-5xl mb-7 -mt-12'>Telha Ecológica</h1>
            </div>
          </div>
        </div>
      </div>
      {/* CONTAINER COM A PALAVRA PRODUTOS SUBLINHADO */}
      <div className='container10 '>
        <div className='container1'>
          <div className='cardFrete'></div>
        </div>
        <div className='container1'>
          <div className='cardSac ml-64'>
            <div>
              <h1 className="custom-heading">PRODUTOS</h1>
            </div>
          </div>
        </div>
        <div className='container1 '>
          <div className='cardGarantia'>
          </div>
        </div>
      </div>

      {/*QUARTO CONTAINER COM A EXIBIÇÃO DE PRODUTOS*/}
      <div className='containerprodutos'>
        <div className=''>
          <div className='containerprodutos'>

            {/* CARD PARA DIRECIONAR PRA PAGINA DE LOGIN */}
            <div className='cardLogin2'>
              <Link to="/produtos" className="text-black hover:underline rounded-md p-2">
                <img className='imagem-conta -mt-32' src={carregador2} alt="Imagem Conta" /></Link>
              <div className='-mb-28'>
                <h1 className='nomeproduto -ml-14'>CARREGADOR SOLAR PORTÁTIL</h1>
                <h2 className=' marcaproduto -ml-14'>QUALQUER COISA</h2>
                <h1 className=' precoproduto -ml-14'>R$ 1.500,00</h1>
              </div>
            </div>

            {/* CARD PARA DIRECIONAR PRA PAGINA DE PRODUTOS*/}
            <div className='cardLogin2 '>

              <div>
                <Link to="/produtos" className="text-black hover:underline rounded-md p-2">
                  <img className='imagem-conta mt-2' src={bateriasolar} alt="Imagem Conta" /></Link>
                <div className='mb-6'>
                  <h1 className='nomeproduto ml-4'>CARREGADOR SOLAR PORTÁTIL</h1>
                  <h2 className='ml-4 marcaproduto'>QUALQUER COISA</h2>
                  <h1 className='ml-4 precoproduto'>R$ 1.500,00</h1>
                </div>
              </div>
            </div>
            <div className='cardLogin2 '>

              <div>
                <Link to="/produtos" className="text-black hover:underline rounded-md p-2">
                  <img className='imagem-conta -mt-12 -mb-20' src={telha2} alt="Imagem Conta" /></Link>
                <div className='-mb-30 mt-28'>
                  <h1 className='ml-4 -mb-8 nomeproduto'>CARREGADOR SOLAR PORTÁTIL</h1>
                  <h2 className='ml-4 mt-8 marcaproduto'>QUALQUER COISA</h2>
                  <h1 className='ml-4 precoproduto'>R$ 1.500,00</h1>
                </div>
              </div>


            </div>
            <div className='cardLogin2 '>

              <div>
                <Link to="/produtos" className="text-black hover:underline rounded-md p-2">
                  <img className='imagem-conta1 ml-8 -mt-14' src={painel} alt="Imagem Conta" /></Link>
                <div className='-mb-28'>
                  <h1 className='nomeproduto'>CARREGADOR SOLAR PORTÁTIL</h1>
                  <h2 className='ml marcaproduto'>QUALQUER COISA</h2>
                  <h1 className='ml- precoproduto'>R$ 1.500,00</h1>
                </div>
              </div>
            </div>

            <div className='cardLogin2 '>

              <div>
                <Link to="/produtos" className="text-black hover:underline rounded-md p-2">
                  <img className='imagem-conta -mt-24' src={carregador1} alt="Imagem Conta" /></Link>
                <div className='-mb-28'>
                  <h1 className='nomeproduto -mt-8 ml-4'>CARREGADOR SOLAR PORTÁTIL</h1>
                  <h2 className='ml-4 marcaproduto'>QUALQUER COISA</h2>
                  <h1 className='ml-4 precoproduto'>R$ 1.500,00</h1>
                </div>
              </div>


            </div>
            <div className='cardLogin2 '>

              <div>
                <Link to="/produtos" className="text-black hover:underline rounded-md p-2">
                  <img className='imagem-conta9 -mt-14' src={bateriasolar1} alt="Imagem Conta" /></Link>
                <div className='-mb-28'>
                  <h1 className='nomeproduto'>CARREGADOR SOLAR PORTÁTIL</h1>
                  <h2 className=' marcaproduto'>QUALQUER COISA</h2>
                  <h1 className=' precoproduto'>R$ 1.500,00</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='containerprodutos'>
        <div className=''>
          <div className='containerprodutos -mt-4 mb-10'>
            {/* CARD PARA DIRECIONAR PRA PAGINA DE LOGIN */}
            <div className='cardLogin2 '>
              <div>
                <Link to="/produtos" className="text-black hover:underline rounded-md p-2">
                  <img className='imagem-conta -mt-24' src={carregador3} alt="Imagem Conta" /></Link>
                <div className='-mb-28'>
                  <h1 className='ml-4 nomeproduto'>CARREGADOR SOLAR PORTÁTIL</h1>
                  <h2 className='ml-4 marcaproduto'>QUALQUER COISA</h2>
                  <h1 className='ml-4 precoproduto'>R$ 1.500,00</h1>
                </div>
              </div>
            </div>
            {/* CARD PARA DIRECIONAR PRA PAGINA DE PRODUTOS*/}
            <div className='cardLogin2 '>

              <div>
                <Link to="/produtos" className="text-black hover:underline rounded-md p-2">
                  <img className='imagemconta10 -mt-8 ml-4' src={placa} alt="Imagem Conta" /></Link>
                <div className='-mb-28'>
                  <h1 className='nomeproduto'>CARREGADOR SOLAR PORTÁTIL</h1>
                  <h2 className='marcaproduto'>QUALQUER COISA</h2>
                  <h1 className=' precoproduto'>R$ 1.500,00</h1>
                </div>
              </div>


            </div>
            <div className='cardLogin2 '>

              <div>
                <Link to="/produtos" className="text-black hover:underline rounded-md p-2">
                  <img className='imagem-conta11 ml-8 -mt-28 ' src={turbininha} alt="Imagem Conta" /></Link>
                <div className='-mb-28'>
                  <h1 className=' -mt-8 nomeproduto'>CARREGADOR SOLAR PORTÁTIL</h1>
                  <h2 className=' marcaproduto'>QUALQUER COISA</h2>
                  <h1 className=' precoproduto'>R$ 1.500,00</h1>
                </div>
              </div>


            </div>
            <div className='cardLogin2 '>

              <div>
                <Link to="/produtos" className="text-black hover:underline rounded-md p-2">
                  <img className='imagem-conta12 ml-4 -mt-10' src={telha1} alt="Imagem Conta" /></Link>
                <div className='-mb-28'>
                  <h1 className='nomeproduto'>CARREGADOR SOLAR PORTÁTIL</h1>
                  <h2 className=' marcaproduto'>QUALQUER COISA</h2>
                  <h1 className=' precoproduto'>R$ 1.500,00</h1>
                </div>
              </div>
            </div>

            <div className='cardLogin2 '>

              <div>
                <Link to="/produtos" className="text-black hover:underline rounded-md p-2">
                  <img className='imagem-conta13 -mt-52' src={painelsolar} alt="Imagem Conta" /></Link>
                <div className='-mb-28'>
                  <h1 className='nomeproduto'>CARREGADOR SOLAR PORTÁTIL</h1>
                  <h2 className=' marcaproduto'>QUALQUER COISA</h2>
                  <h1 className=' precoproduto'>R$ 1.500,00</h1>
                </div>
              </div>


            </div>
            <div className='cardLogin2 '>

              <div>
                <Link to="/produtos" className="text-black hover:underline rounded-md p-2">
                  <img className='imagem-conta mt-2' src={baterialitio1} alt="Imagem Conta" /></Link>
                <div className='-mb-28'>
                  <h1 className='nomeproduto ml-4 mt-8'>CARREGADOR SOLAR PORTÁTIL</h1>
                  <h2 className='ml-4 marcaproduto'>QUALQUER COISA</h2>
                  <h1 className='ml-4 precoproduto'>R$ 1.500,00</h1>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Home;
