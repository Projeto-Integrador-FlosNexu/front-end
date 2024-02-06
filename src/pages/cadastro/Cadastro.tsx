import React, { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Usuario from '../../models/Usuario'
import { cadastrarUsuario } from '../../services/Service'
import cadastro from "../../assets/cadastro.png"
import './Cadastro.css'

function Cadastro() {

  let navigate = useNavigate()

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
      <body>
        <div className="fundoCadastro ">
          <div className='conteudo'>
            <div className='form-boxCadastro'>
              <form onSubmit={cadastrarNovoUsuario}>
                <h2 className='text-white text-4xl mb-3 ml-'>Cadastrar</h2>
                <div className='input-containerCadastro'>
                  <img src='https://cdn.discordapp.com/attachments/1202676755547037716/1204321146200264744/user_1.png?ex=65d44e78&is=65c1d978&hm=67ab9c2abc91dfa403b2f67d5dd76630abf6ec2a1c6ea39db2536a4c89ef246c&' />
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
                  <img src='https://cdn.discordapp.com/attachments/1202676755547037716/1204321565743915041/envelope-simple_1.png?ex=65d44edc&is=65c1d9dc&hm=902287b6d2b600a336afa258d4c592610b8aab709885c626ceb97f5983acfd0f&' />
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
                  <img src='https://cdn.discordapp.com/attachments/1202676755547037716/1204323382657552394/identification-card.png?ex=65d4508d&is=65c1db8d&hm=3c962330883bd1fc71fe71ed9f90798fac9c2a858056bf8b6b87b799732975a9&' />
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
                  <img src='https://cdn.discordapp.com/attachments/1202676755547037716/1204323543480008755/camera.png?ex=65d450b4&is=65c1dbb4&hm=3e0368cd2d70e83214aa29a57fe68085613352f96af3397f30fe165a628f43d2&' />
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
                  <img src='https://cdn.discordapp.com/attachments/1202676755547037716/1204323683972161566/image.png?ex=65d450d5&is=65c1dbd5&hm=e266b401479af7fab9d6a75aefb0d5d69dc8f72194a37d1c63b6caad82dc75ac&' />
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
                  <img src='https://cdn.discordapp.com/attachments/1202676755547037716/1204324906750320640/lock-laminated.png?ex=65d451f9&is=65c1dcf9&hm=e9553807fdc65fb4209ba7ce990feac2d5120a81e8b96914ec7080c87c5546fe&' />
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
                  <button className='buttonCadastro rounded-3xl text-black bg-white w-4/1 py-1.5 flex justify-center' onClick={back}>
                    Cancelar
                  </button>
                  <button className='buttonCadastro rounded-3xl text-black bg-white w-4/1 py-1.5 flex justify-center' type='submit'>
                    Cadastrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </body>
    </>
  )
}

export default Cadastro