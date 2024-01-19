interface Member {
  name: string;
  github: string;
  linkedin: string;
}

const members: Member[] = [
  {
    name: "Felipe Souza",
    github: "https://github.com/FelipeAJdev",
    linkedin: "https://www.linkedin.com/in/felipemacedo1/",
  },

  {
    name: "Gabriel Lima",
    github: "https://github.com/costalima10",
    linkedin: "https://www.linkedin.com/in/costalima10/",
  },

  {
    name: "Gabriel Castro",
    github: "https://github.com/GabrielCNavarro",
    linkedin: "https://www.linkedin.com/in/gabrielcastro-finan/",
  },

  {
    name: "Grazielle Ferreira",
    github: "https://github.com/GrazielleNascimento",
    linkedin:
      "https://www.linkedin.com/in/grazielle-nascimento-software-developer/",
  },

  {
    name: "Kaellen Heleni",
    github: "https://github.com/Kaellen-heleni",
    linkedin: "https://www.linkedin.com/in/kaellen-heleni/",
  },
  {
    name: "Luiz Iury",
    github: "https://github.com/LuizIury",
    linkedin: "https://www.linkedin.com/in/luiziury/",
  },
  {
    name: "Richardson Furlan",
    github: "https://github.com/richardson-furlan",
    linkedin: "https://www.linkedin.com/in/richardsonfurlan/",
  },
];

const About: React.FC = () => {
  return (
    <div>
      <h1>Sobre o Projeto</h1>

      <section>
        <h2>Flosnexu</h2>
        <p>
          [A FlosNexu tem em sua essência a vontade e o compromisso de mudar a
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
          os desafios ambientais e garantir a saúde a longo prazo do planeta. ]
        </p>
      </section>

      <section>
        <h2>Motivação</h2>
        <p>
         [O intuito principal do projeto busca
          garantir o acesso universal, confiável, sustentável, moderno e
          acessível à energia limpa. Esse tema vem ganhando cada vez mais
          publicidade nos últimos tempos, influenciando as nações a cooperarem
          de maneira efetiva e estreitando as fronteiras entre elas. Nesse
          contexto, a promoção de fontes de energia limpa surge como uma
          peça-chave na construção de um futuro energético mais equitativo e
          sustentável.].
        </p>
      </section>

      <section>
        <h2>Integrantes do Projeto</h2>
        {members.map((member) => (
          <div key={member.name}>
            <h3>{member.name}</h3>
            <p>
              <strong>GitHub:</strong>{" "}
              <a href={member.github} target="_blank" rel="noreferrer">
                {member.github}
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a href={member.linkedin} target="_blank" rel="noreferrer">
                {member.linkedin}
              </a>
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default About;
