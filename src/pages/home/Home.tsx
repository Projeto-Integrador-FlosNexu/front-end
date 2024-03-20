import "./Home.css";
import painelsolar from "../../assets/placaPNG.png";
import painel from "../../assets/painel.png";
import baterialitio1 from "../../assets/baterialitio.png";
import telha from "../../assets/telha.png";
import caminhaofrete from "../../assets/caminhãofrete.png";
import iconesac from "../../assets/iconesac.png";
import iconegarantia from "../../assets/icongarantia.png";
import Carousel from "../../components/swiperCorousel/CarouselContainer";
import telha1 from "../../assets/telhatermica.png";
import telha2 from "../../assets/telhavinho.png";
import bateriasolar from "../../assets/bateriaportatil.png";
import carregador1 from "../../assets/carregadorplaca.png";
import carregador2 from "../../assets/carregadorsolar.png";
import bateriasolar1 from "../../assets/bateriamouras.png";
import carregador3 from "../../assets/carregadorsolpor.png";
import turbininha from "../../assets/miniturbina.png";
import placa from "../../assets/placacomcoisa.jpeg";

import gerador from '../../assets/gerador.jpg'
function Home() {
  return (
    <>
      <div className="mobilemax:hidden">
        <div>{Carousel()}</div>
        <div className="flex ">
          {/* Caminhao Frete*/}

          <div className="flex  ">
            <img className="w-[170px] ml-[100px] " src={caminhaofrete} />
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
            <img className="w-[120px] h-[45%] pl-[5rem] pt-[1rem] ml-[0px] mt-20 " src={iconesac} />
            <div className="flex flex-col justify-center pl-5">
              <h1 className="font-bold text-2xl mt-6">
                Suporte ao Cliente 24hrs{" "}
              </h1>
              <h3 className="text-2xl">
                Equipe de suporte sempre à disposição para te ajudar.
              </h3>
            </div>
          </div>
          <div className="flex">
            <img className='w-[120px] pl-[5rem] h-[47%] pt-[2rem] mt-20' src={iconegarantia} />
            <div className="flex flex-col justify-center pl-5">
              <h1 className='font-bold text-2xl mt-6 '>Compra Garantida </h1>
              <h3 className='text-2xl'>Receba o produto que está esperando, ou devolvemos o seu dinheiro.</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="mobilemax:hidden">
        <h1 className="text-center text-5xl font-bold">Produtos</h1>
      </div>
      <div className=" flex flex-wrap pb-10 pt-10 gap-3 ml-28 mobilemax:hidden ">
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
          <img
            className="w-full"
            src={bateriasolar}
            alt="Imagem do card"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ml-4">Carregador Solar Portátil</div>
            <p className="text-gray-700 text-base ml-4">
              Carregador solar portátil, CTECHI 2200w
            </p>
            <h1 className='ml-4 precoproduto'>R$ 2.589,00</h1>
          </div>

        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
          <img
            className="w-full"
            src={telha2}
            alt="Imagem do card"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ml-4">Telha Ecológica</div>
            <p className="text-gray-700 text-base">
              Telha Ecológica Onduline
            </p>
            <h1 className='ml-4 precoproduto'>R$ 76,00</h1>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
          <img
            className="w-full"
            src={carregador1}
            alt="Imagem do card"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ml-4">Carregador Solar Portátil</div>
            <p className="text-gray-700 text-base ml-4">
              Carregador Solar Portátil ALLPOWER R600 com Páinel Solar
            </p>
            <h1 className='ml-4 precoproduto'>R$ 3.480,00</h1>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
          <img
            className="w-full"
            src={carregador3}
            alt="Imagem do card"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ml-4">Portable Solar Generator</div>
            <p className="text-gray-700 text-base ml-4">
              Carregador Portátil CTECHI 2000W
            </p>
            <h1 className='ml-4 precoproduto'>R$ 2.589,00</h1>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
          <img
            className="w-[170px]"
            src={turbininha}
            alt="Imagem do card"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mt-[-30px] ml-4">Gerador de Turbina Eólica</div>
            <p className="text-gray-700 text-base ml-4">
              3000w Gerador de turbina eólica vertical
            </p>
            <h1 className='ml-4 precoproduto'>R$ 4.640,00</h1>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
          <img
            className="w-[198px] mt-[40px] ml-4"
            src={placa}
            alt="Imagem do card"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ml-4">Kit Energia Solar Fotovoltaica</div>
            <p className="text-gray-700 text-base ml-4">
              Kit energia solar fotovoltaica 1085wp até 3410wh/dia
            </p>
            <h1 className='ml-4 precoproduto'>R$ 3.984,00</h1>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
          <img
            className="w-full"
            src={telha1}
            alt="Imagem do card"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ml-4">Telha Ecológica Térmica</div>
            <p className="text-gray-700 text-base ml-4">
              Telha ecológica térmica AI 6mm 2,20mmX0,80m Ecopreserve
            </p>
            <h1 className='ml-4 precoproduto'>R$ 52,00</h1>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
          <img
            className="w-[900px] h-[300px]"
            src={telha}
            alt="Imagem do card"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ml-4">Telha Ecológica</div>
            <p className="text-gray-700 text-base ml-4">
              Telha Ecológica Preta ONDULINE
            </p>
            <h1 className='ml-4 precoproduto'>R$ 80,00</h1>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
          <img
            className="w-[200px] mt-36"
            src={bateriasolar1}
            alt="Imagem do card"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ml-4">Bateria Solar</div>
            <p className="text-gray-700 text-base ml-4 ">
              Bateria Estacionária 12v 105ah  Moura Solar 12MS111
            </p>
            <h1 className='ml-4 precoproduto'>R$ 1.458,00</h1>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
          <img
            className="w-full mt-20"
            src={carregador2}
            alt="Imagem do card"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ml-4">Carregador Portátil</div>
            <p className="text-gray-700 text-base ml-4">
              Carregador Solar Portátil
            </p>
            <h1 className='ml-4 precoproduto'>R$ 230,00</h1>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
          <img
            className="w-[170px] mt-[60px] ml-12"
            src={gerador}
            alt="Imagem do card"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ml-4" >Gerador Solar Portátil</div>
            <p className="text-gray-700 text-base ml-4">
              Gerador solar portátil sistema de iluminação de BT MP3 rádio painel solar
            </p>
            <h1 className='ml-4 precoproduto'>R$ 615,00</h1>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
          <img
            className="w-full mt-[-80px]"
            src={painelsolar}
            alt="Imagem do card"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ml-4">Módulo Fotovoltaico</div>
            <p className="text-gray-700 text-base ml-4">
              Placa Solar Preta com maior eficiência
            </p>
            <h1 className='ml-4 precoproduto'>R$ 1.730,00</h1>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
          <img
            className="w-[210px] mt-24"
            src={painel}
            alt="Imagem do card"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ml-4">Placa Solar</div>
            <p className="text-gray-700 text-base ml-4">
              Painel Solar de 100W com 10 unidades da marca Resun possui 36 células de silício
            </p>
            <h1 className='ml-4 precoproduto'>R$ 1.782,90</h1>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
          <img
            className="w-[290px] mt-40"
            src={baterialitio1}
            alt="Imagem do card"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ml-4">Bateria Lítio</div>
            <p className="text-gray-700 text-base ml-4">
              Bateria de lítio 48V 100A ferro fosfato 48MLS100IN Moura
            </p>
            <h1 className='ml-4 precoproduto'>R$ 14.632,00</h1>
          </div>
        </div>
      </div>

      {/*Mobile*/}

      <div className="mobilemin:hidden">
        <div className="mb-10">{Carousel()}</div>
        <div className="flex pt-10 pb-20 flex-wrap items-center pr-5">
          {/* Caminhao Frete*/}
          <div className="flex items-center pl-10 mb-10">
            <img className="w-[100px] " src={caminhaofrete} />
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
            <img className="w-[100px] pl-[5rem] pt-[1rem]" src={iconesac} />
            <div className="flex flex-col justify-center pl-5">
              <h1 className="font-bold text-2xl">
                Suporte ao Cliente 24hrs{" "}
              </h1>
              <h3 className="text-2xl">
                Equipe de suporte sempre à disposição para te ajudar.
              </h3>
            </div>
          </div>
          <div className="flex">
            <img className='w-[100px] pl-[5rem] h-[90%] pt-[2rem]' src={iconegarantia} />
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
      <div className="flex pb-10 pt-10 gap-3 mobilemin:hidden flex-col items-center justify-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg text-center ">
          <img
            className="w-full"
            src={bateriasolar}
            alt="Imagem do card"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ml-4">Carregador Solar Portátil</div>
            <p className="text-gray-700 text-base ml-4">
            Carregador solar portátil, CTECHI 2200w
            </p>
            <h1 className='ml-4 precoproduto'>R$ 2.589,00</h1>
          </div>

        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={telha2}
            alt="Imagem do card"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ml-4">Telha Ecológica</div>
            <p className="text-gray-700 text-base ml-4">
            Telha Ecológica Onduline
            </p>
            <h1 className='ml-4 precoproduto'>R$ 76,00</h1>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={carregador1}
            alt="Imagem do card"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ml-4">Carregador Solar Portátil</div>
            <p className="text-gray-700 text-base ml-4">
            Carregador Solar Portátil ALLPOWER R600 com Páinel Solar
            </p>
            <h1 className='ml-4 precoproduto'>R$ 3.480,00</h1>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={carregador3}
            alt="Imagem do card"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ml-4">Portable Solar Generator</div>
            <p className="text-gray-700 text-base ml-4">
            Carregador Portátil CTECHI 2000W
            </p>
            <h1 className='ml-4 precoproduto'>R$ 2.589,00</h1>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={turbininha}
            alt="Imagem do card"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ml-4">erador de Turbina Eólica</div>
            <p className="text-gray-700 text-base ml-4">
            3000w Gerador de turbina eólica vertical
            </p>
            <h1 className='ml-4 precoproduto'>R$ 4.640,00</h1>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={placa}
            alt="Imagem do card"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ml-4">Kit Energia Solar Fotovoltaica</div>
            <p className="text-gray-700 text-base ml-4">
            Kit energia solar fotovoltaica 1085wp até 3410wh/dia
            </p>
            <h1 className='ml-4 precoproduto'>R$ 3.984,00</h1>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={telha1}
            alt="Imagem do card"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ml-4">Telha Ecológica Térmica</div>
            <p className="text-gray-700 text-base ml-4">
            Telha ecológica térmica AI 6mm 2,20mmX0,80m Ecopreserve
            </p>
            <h1 className='ml-4 precoproduto'>R$ 52,00</h1>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={telha}
            alt="Imagem do card"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ml-4">Telha Ecológica</div>
            <p className="text-gray-700 text-base ml-4">
            Telha Ecológica Preta ONDULINE
            </p>
            <h1 className='ml-4 precoproduto'>R$ 80,00</h1>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={bateriasolar1}
            alt="Imagem do card"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ml-4">Bateria Solar</div>
            <p className="text-gray-700 text-base ml-4">
            Bateria Estacionária 12v 105ah  Moura Solar 12MS111
            </p>
            <h1 className='ml-4 precoproduto'>R$ 1.458,00</h1>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={carregador2}
            alt="Imagem do card"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ml-4">Carregador Portátil</div>
            <p className="text-gray-700 text-base ml-4">
            Carregador Solar Portátil
            </p>
            <h1 className='ml-4 precoproduto'>R$ 230,00</h1>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={gerador}
            alt="Imagem do card"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ml-4">Gerador Solar Portátil</div>
            <p className="text-gray-700 text-base ml-4">
            Gerador solar portátil sistema de iluminação de BT MP3 rádio painel solar
            </p>
            <h1 className='ml-4 precoproduto'>R$ 615,00</h1>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={painelsolar}
            alt="Imagem do card"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ml-4">Módulo Fotovoltaico</div>
            <p className="text-gray-700 text-base ml-4">
            Placa Solar Preta com maior eficiência
            </p>
            <h1 className='ml-4 precoproduto'>R$ 1.730,00</h1>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={painel}
            alt="Imagem do card"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ml-4">Placa Solar</div>
            <p className="text-gray-700 text-base ml-4">
            Painel Solar de 100W com 10 unidades da marca Resun possui 36 células de silício
            </p>
            <h1 className='ml-4 precoproduto'>R$ 1.782,90</h1>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={baterialitio1}
            alt="Imagem do card"
          />
          <div className="px-6 py-4">
            <div className="ml-4 font-bold text-xl mb-2">Bateria Lítio</div>
            <p className="text-gray-700 text-base ml-4">
            Bateria de lítio 48V 100A ferro fosfato 48MLS100IN Moura
            </p>
            <h1 className='ml-4 precoproduto'>R$ 14.632,00</h1>
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;
