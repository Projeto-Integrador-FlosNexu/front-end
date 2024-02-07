import UserCard from "../../components/userCard/UserCard";
import UserInfo from "../../models/UserInfo";
import "./About.css"


const members: UserInfo[] = [
  {
    name: "Felipe Souza",
    github: "https://github.com/FelipeAJdev",
    linkedin: "https://www.linkedin.com/in/felipemacedo1/",
    role:"Desenvolvedor",
    image:"/creators/Felipe.jpeg"
  },

  {
    name: "Gabriel Lima",
    github: "https://github.com/costalima10",
    linkedin: "https://www.linkedin.com/in/costalima10/",
    role:"Desenvolvedor",
    image:"/creators/gabriel-costa.jpeg"
  },

  {
    name: "Gabriel Castro",
    github: "https://github.com/GabrielCNavarro",
    linkedin: "https://www.linkedin.com/in/gabrielcastro-finan/",
    role:"Desenvolvedor",
    image:"/creators/gabriel-castro.jpeg"
  },

  {
    name: "Grazielle Ferreira",
    github: "https://github.com/GrazielleNascimento",
    linkedin:
      "https://www.linkedin.com/in/grazielle-nascimento-software-developer/",
    role:"Desenvolvedor",
    image:"/creators/grazielle.jpeg"
  },

  {
    name: "Kaellen Heleni",
    github: "https://github.com/Kaellen-heleni",
    linkedin: "https://www.linkedin.com/in/kaellen-heleni/",
    role:"Desenvolvedor",
    image:"/creators/Kaellen-heleni.jpeg"
  },

  {
    name: "Luiz Iury",
    github: "https://github.com/LuizIury",
    linkedin: "https://www.linkedin.com/in/luiziury/",
    role:"Desenvolvedor",
    image:"/creators/luiz-iury.jpeg"
  },

  {
    name: "Richardson Furlan",
    github: "https://github.com/richardson-furlan",
    linkedin: "https://www.linkedin.com/in/richardsonfurlan/",
    role:"Desenvolvedor",
    image:"/creators/richardson-furlan.jpeg"
  },

];

const About: React.FC = () => {
  return (
    <div >
      <div className="w-full fundo-about" >
        <h1 className="text-left text-4xl font-bold">Sobre o Projeto</h1>
      </div>
      
      <div className="mt-4 section-header">
          <h2 className="fonte-h2">About Us</h2>
          <p className="p-about">Conduzimos as mudanças para um futuro mais verde e resiliente, onde o hábito de cuidar do Planeta se estenda para todos. <br /> Na FlosNexu, estamos transformando a cultura global, promovendo a vitalidade da energia sustentável.</p>
      </div>

      <div className="flex items-center justify-center">
       <div className="ml-20 w-1/2 pr-8">
    <img src="https://cdn.discordapp.com/attachments/1204581001138020394/1204592226793955369/foto-de-grande-angular-de-uma-unica-arvore-crescendo-sob-um-ceu-nublado-durante-um-por-do-sol-cercado-por-grama.jpg?ex=65d54aef&is=65c2d5ef&hm=b3984e427055d19707ded46beac4a9483018f47d7499c4228083b45efa355273&"
 alt="Imagem" className="rounded-xl mb-4 w-full h-auto" />
  </div>

  <div className="w-1/2 items-">
      <div className="">
        <h2 className="text-center text-xl font-bold mt-5">Flosnexu</h2>
          <p className="text-justify text-right leading-8 mt-3">
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
</div>


<div className="flex items-center justify-center">

  <div className="w-1/2 mx-4">
    <div className="w-2/3 mx-auto">
      <h2 className="text-center text-xl font-bold mt-5">Motivação</h2>
      <p className="text-justify text-right leading-8 mt-3">
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

  <div className="w-1/2">
    <img
      src="https://cdn.discordapp.com/attachments/1204581001138020394/1204592226793955369/foto-de-grande-angular-de-uma-unica-arvore-crescendo-sob-um-ceu-nublado-durante-um-por-do-sol-cercado-por-grama.jpg?ex=65d54aef&is=65c2d5ef&hm=b3984e427055d19707ded46beac4a9483018f47d7499c4228083b45efa355273&"
      alt="Imagem"
      className="w-full h-auto"
    />
  </div>
</div>

  




      <div >
        <h2 className="text-center text-xl font-bold mt-5">Integrantes do Projeto</h2>
        <div className="flex flex-wrap gap-8 items-center justify-center mt-5">
          {members.map((member) => (
            <UserCard {...member} key={member.name}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
