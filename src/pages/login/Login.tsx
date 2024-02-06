import  { ChangeEvent, useContext, useEffect, useState } from 'react';
import './Login.css';

import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';
import { EnvelopeSimple } from '@phosphor-icons/react'

function Login() {
  let navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin } = useContext(AuthContext);

  const { isLoading } = useContext(AuthContext)

  useEffect(() => {
    if (usuario.token !== "") {
      navigate('/home')
    }
  }, [usuario])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    })
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    handleLogin(usuarioLogin)

  }

  // console.log(usuarioLogin)

  return (
    <>
      <body>
        <section>
          <div className="form-boxLogin">
            <form className="flex justify-center items-center flex-col w-4/2 gap-4" onSubmit={login}>
              <h2 className="text-white text-5xl ">Entrar</h2>
              <div className='input-containerLogin'>
                <img src="https://cdn.discordapp.com/attachments/1159532272379248795/1204191560397225994/image.png?ex=65d3d5c8&is=65c160c8&hm=df92915efe0e13a751e8e88f6670cbb081bd8baf0ba94fdf12ba4e2cfbee27e5&" alt="simbolo de uma carta" />
                <div className="inputboxLogin">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder='Usuário'
                    value={usuarioLogin.email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    className="placeholderLogin"
                  />
                </div>
              </div>
              <div className='input-containerLogin'>
                <img src="https://cdn.discordapp.com/attachments/1159532272379248795/1204192810295890010/image.png?ex=65d3d6f2&is=65c161f2&hm=eb7142301d54707ccb8bca22cd67360cb1f65bc09ed536bde89833b275104237&" alt="simbolo de um cadeado" />
                <div className="inputboxLogin">
                  <input
                    type="password"
                    id="senha"
                    name="senha"
                    placeholder="Senha"
                    value={usuarioLogin.senha}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    className="placeholderLogin"
                  />
                </div>
              </div>
              <button type='submit' className="buttonLogin bg-white w-4/1 py-1.5 flex justify-center">
                {isLoading ? <RotatingLines
                  strokeColor="black"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="24"
                  visible={true}
                /> :
                  <span>Entrar</span>}
              </button>

              <hr className="border-white w-full" />

              <p className='text-white font-bold'>
                Ainda não tem uma conta?{' '}
                <Link to="/cadastro" className=" text-green-400 hover:underline">
                  Cadastre-se
                </Link>
              </p>
            </form>
          </div>
        </section>
      </body>
    </>
  );
}

export default Login;
