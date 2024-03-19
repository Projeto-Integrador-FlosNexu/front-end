import UserCard from "../../components/userCard/UserCard";
import UserInfo from "../../models/UserInfo";
import "./About.css"
import kaellen from '../../assets/about/Kaellen-heleni.jpeg'
import gabriel from '../../assets/about/gabriel-costa.jpeg'
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';


const members: UserInfo[] = [

  {
    name: "Gabriel Lima",
    github: "https://github.com/costalima10",
    linkedin: "https://www.linkedin.com/in/costalima10/",
    role: "Desenvolvedor",
    image: "src/assets/about/gabriel-costa.jpeg"
  },




  {
    name: "Kaellen Heleni",
    github: "https://github.com/Kaellen-heleni",
    linkedin: "https://www.linkedin.com/in/kaellen-heleni/",
    role: "Desenvolvedor",
    image: "src/assets/about/Kaellen-heleni.jpeg"
  },

];

const About: React.FC = () => {
  return (
    <div className="fundo">
      <div className=" section-header">
        <h2 className="fonte-h2  text-white text-5xl">Sobre nós</h2>
        <p className="p-about text-white">Conduzimos as mudanças para um futuro mais verde e resiliente, onde o hábito de cuidar do Planeta se estenda para todos. <br /> Na FlosNexu, estamos transformando a cultura global, promovendo a vitalidade da energia sustentável.</p>
      </div>
      <div className="flex-row grid items-center justify-center">
        <div className="w-1/2 pb-28 mt-8 px-28">
          <div className="mb-36">
            <h2 className="text-center text-5xl font-bold text-white">Flosnexu</h2>
            <p className="leading-8 text-md px-28 mt-3  text-white">
              A FlosNexu tem em sua essência a vontade e o compromisso de mudar a
              atual cultura do mundo que não valoriza, da forma que deveria ser
              valorizada, a questão da energia sustentável. Acreditamos que a
              promoção desse tipo de produto é muito importante para nossa visão de
              sociedade futura, já que essas ferramentas possibilitam a transição
              para fontes de energia mais limpas, que por sua vez não é apenas uma
              necessidade ambiental, mas também uma oportunidade para construir
              economias mais resilientes e sustentáveis. Alinhado com os objetivos
              de desenvolvimento sustentável, a mudança para energias renováveis,
              eficiência energética e tecnologias de combustíveis fósseis avançadas
              e mais limpas contribui significativamente para a mitigação das
              mudanças climáticas. Além da redução nas emissões de gases de efeito
              estufa provenientes da geração de energia é essencial para enfrentar
              os desafios ambientais e garantir a saúde a longo prazo do planeta.
            </p>
          </div>
        </div>

          <div className="w-1/2 mx-4">
            <div className="w-2/3 mx-auto">
              <h2 className="text-center text-5xl font-bold mt-5 text-white ">Motivação</h2>
              <p className="leading-8 text-md text-2xl mt-3 p-4 px-20 text-white">
                O intuito principal do projeto busca
                garantir o acesso universal, confiável, sustentável, moderno e
                acessível à energia limpa. Esse tema vem ganhando cada vez mais
                publicidade nos últimos tempos, influenciando as nações a cooperarem
                de maneira efetiva e estreitando as fronteiras entre elas. Nesse
                contexto, a promoção de fontes de energia limpa surge como uma
                peça-chave na construção de um futuro energético mais equitativo e
                sustentável.
              </p>
            </div>
          </div>

       
      </div>

      <div className="pb-10">
        <h2 className="text-center text-5xl font-bold mt-5 text-white mb-8">Integrantes do Projeto</h2>
        <div className="flex flex-wrap gap-8 items-center justify-center mt-5">
          <div className="card-container">
            <img src={gabriel} className="user-picture"></img>
            <div className="user-details">
              <div>
                <div className="user-name text-center">Gabriel Costa</div>
                <div className="user-role text-center">Desenvolvedor FullStack Jr.</div>
              </div>
              <div>
                <div className='text-center '>
                  <div className="description  ">
                    <span>Formação:</span>
                    <span className="description-value"> Sistemas de Informação</span>
                  </div>
                </div>
              </div>
              <div className="user-socials items-center">
                <a className="social-info" href="https://www.linkedin.com/in/costalima10/" target="_blank">
                  <LinkedinLogo size={30} />
                </a>
                <a className="social-info" href="https://github.com/costalima10" target="_blank">
                  <GithubLogo size={30} />
                </a>
              </div>
            </div>
          </div>
          <div className="card-container ">
            <img src={kaellen} className="user-picture"></img>
            <div className="user-details">
              <div>
                <div className="user-name text-center">Kaellen Oliveira</div>
                <div className="user-role text-center">Desenvolvedor FullStack Jr.</div>
              </div>
              <div>
                <div className='text-center '>
                  <div className="description  ">
                    <span>Formação:</span>
                    <span className="description-value"> Engenharia de Software(1/5)</span>
                  </div>
                </div>
              </div>
              <div className="user-socials items-center">
                <a className="social-info" href='https://www.linkedin.com/in/kaellen-heleni/' target="_blank">
                  <LinkedinLogo size={30} />
                </a>
                <a className="social-info" href='https://github.com/Kaellen-heleni' target="_blank">
                  <GithubLogo size={30} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div >
    </div>


  );
};

export default About;