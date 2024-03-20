import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Usuario from '../../models/Usuario'
import { cadastrarUsuario } from '../../services/Service'
import './Cadastro.css'
import logo from '../../assets/logoFN.png'
import LogoGoogle from '../../assets/google.png';
import { useGoogleLogin } from '@react-oauth/google';
import nome from '../../assets/nome.png'
import tipo from '../../assets/tipo.png'
import email from '../../assets/emailogin.png'
import senha from '../../assets/senha.png'
import confirmsenha from '../../assets/confirmarsenha.png'
import foto from '../../assets/foto.png'
/*import LogoGit from '../../assets/github.png'; ESSE É O LOGO TIPO DO BOTAO DO GITHUB*/

function Cadastro() {


  let navigate = useNavigate()

  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
  });

  const [confirmaSenha, setConfirmaSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    email: "",
    foto: "",
    senha: "",
    tipo: ""
  })

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: "",
    email: "",
    foto: "",
    senha: "",
    tipo: ""
  })

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back()
    }
  }, [usuarioResposta])

  function back() {
    navigate('/login')
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value)
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta)
        alert('Usuário cadastrado com sucesso')

      } catch (error) {
        alert('Erro ao cadastrar o Usuário')
      }

    } else {
      alert('Dados inconsistentes. Verifique as informações de cadastro.')
      setUsuario({ ...usuario, senha: "" }) // Reinicia o campo de Senha
      setConfirmaSenha("")                  // Reinicia o campo de Confirmar Senha
    }
  }

  return (
    <>
      <div className="fundoCadastro mobilemax:hidden">
        <div className='posicaoLogo ml-12 mr-20 text-center w-[50rem]'>
          <img src={logo} alt="Logo FlosNexu" className='w-[190rem]'/>
          <div className='ml-5'>
            <p className='slogan'>
              <span></span>
            </p>
          </div>
        </div>
        <div className='conteudo'>
          <div className='form-boxCadastro'>
            <form onSubmit={cadastrarNovoUsuario}>
              <h2 className='text-white text-4xl mb-3 mt-6'>Cadastrar</h2>
              <div className='input-containerCadastro'>
                <img src={nome} />
                <div className="inputboxCadastro">
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Nome"
                    className="placeholderCadastro rounded-3xl border-2 border-slate-700 p-2"
                    value={usuario.nome}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  />
                </div>
              </div>
              <div className='input-containerCadastro'>
                <img src={email} />
                <div className="inputboxCadastro">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Seu Email"
                    className="placeholderCadastro rounded-3xl border-2 border-slate-700 p-2"
                    value={usuario.email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  />
                </div>
              </div>
              <div className='input-containerCadastro'>
                <img src={tipo} />
                <div className="inputboxCadastro">
                  <input
                    type="text"
                    id="tipo"
                    name="tipo"
                    placeholder="Tipo de Usuario"
                    className="placeholderCadastro rounded-3xl border-2 border-slate-700 p-2"
                    value={usuario.tipo}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  />
                </div>
              </div>
              <div className='input-containerCadastro'>
                <img src={foto} />
                <div className="inputboxCadastro">
                  <input
                    type="text"
                    id="foto"
                    name="foto"
                    placeholder="Foto"
                    className="placeholderCadastro rounded-3xl border-2 border-slate-700 p-2"
                    value={usuario.foto}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  />
                </div>
              </div>
              <div className='input-containerCadastro'>
                <img src={senha} />
                <div className="inputboxCadastro">
                  <input
                    type="password"
                    id="senha"
                    name="senha"
                    placeholder="Senha"
                    className="placeholderCadastro rounded-3xl border-2 border-slate-700 p-2"
                    value={usuario.senha}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  />
                </div>
              </div>
              <div className='input-containerCadastro'>
                <img src={senha} className=' mb-28 '/>
                <div className="inputboxCadastro">
                  <input
                    type="password"
                    id="confirmarSenha"
                    name="confirmarSenha"
                    placeholder="Confirmar Senha"
                    className="placeholderCadastro rounded-3xl border-2 border-slate-700 p-2"
                    value={confirmaSenha}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
                  />
                </div>
              </div>
              <div className="flex justify-around w-full gap-8">
                <button className='buttonCadastro  text-white py-1.5 flex justify-center' type='submit'>
                  Cadastrar
                </button>
              </div>
              <button className='buttonGoogle mt-3'>
                <div onClick={() => login()} className='flex justify-center gap-4'>
                  <img src={LogoGoogle} className="w-8" alt="GoogleImg" />
                  <span className="block font-medium tracking-wide text-white w-max">Cadastrar com o Google</span>
                  </div>
              </button>
             
            </form>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="fundoCadastro flex-col flex mobilemin:hidden">

        <div className=''>
          <div className='imagemflos'>
            <img className='w-[27rem] ml-24' src={logo} />
          </div>
          <div className='form-boxCadastro ml-12 w-[30rem] items-center'>
            <form onSubmit={cadastrarNovoUsuario}>
              <h2 className='text-white text-4xl mb-3 mt-8 ml-[9rem]'>Cadastrar</h2>
              <div className='input-containerCadastro'>
                <img src={nome} />
                <div className="inputboxCadastro">
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Nome"
                    className="placeholderCadastro rounded-3xl border-2 border-slate-700 p-2"
                    value={usuario.nome}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  />
                </div>
              </div>
              <div className='input-containerCadastro'>
                <img src={email} />
                <div className="inputboxCadastro">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Seu Email"
                    className="placeholderCadastro rounded-3xl border-2 border-slate-700 p-2"
                    value={usuario.email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  />
                </div>
              </div>
              <div className='input-containerCadastro'>
                <img src={tipo} />
                <div className="inputboxCadastro">
                  <input
                    type="text"
                    id="tipo"
                    name="tipo"
                    placeholder="Tipo de Usuario"
                    className="placeholderCadastro rounded-3xl border-2 border-slate-700 p-2"
                    value={usuario.tipo}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  />
                </div>
              </div>
              <div className='input-containerCadastro'>
                <img src={foto} />
                <div className="inputboxCadastro">
                  <input
                    type="text"
                    id="foto"
                    name="foto"
                    placeholder="Foto"
                    className="placeholderCadastro rounded-3xl border-2 border-slate-700 p-2"
                    value={usuario.foto}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  />
                </div>
              </div>
              <div className='input-containerCadastro'>
                <img src={senha} />
                <div className="inputboxCadastro">
                  <input
                    type="password"
                    id="senha"
                    name="senha"
                    placeholder="Senha"
                    className="placeholderCadastro rounded-3xl border-2 border-slate-700 p-2"
                    value={usuario.senha}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  />
                </div>
              </div>
              <div className='input-containerCadastro'>
                <img src={senha} className=' mb-28 ' />
                <div className="inputboxCadastro">
                  <input
                    type="password"
                    id="confirmarSenha"
                    name="confirmarSenha"
                    placeholder="Confirmar Senha"
                    className="placeholderCadastro rounded-3xl  border-2 border-slate-700 p-2"
                    value={confirmaSenha}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
                  />
                </div>
              </div>
              <div className="flex justify-around w-full gap-8">
                <button className='buttonCadastro ml-[5rem] text-white py-1.5 flex justify-center' type='submit'>
                  Cadastrar
                </button>
              </div>
              <button className='buttonGoogle mt-3 ml-[5rem]'>
                <div onClick={() => login()} className='flex justify-center gap-4'>
                  <img src={LogoGoogle} className="w-8" alt="GoogleImg" />
                  <span className="block font-medium tracking-wide text-white w-max">Cadastrar com o Google</span>
                </div>
              </button>

            </form>
          </div>

        </div>

      </div>

    </>
  )
}

export default Cadastro