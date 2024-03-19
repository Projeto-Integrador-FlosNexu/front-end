import { ChangeEvent, useContext, useEffect, useState } from 'react';
import './Login.css';
import email from '../../assets/emailogin.png'
import senha from '../../assets/senha.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';

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

  return (
    <>
      <section className='section'>
        <div className="form-boxLogin">
          <form className="flex justify-between items-center flex-col w-4/2 gap-4" onSubmit={login}>
            <h2 className="text-white text-5xl">Entrar</h2>
            <div className='input-containerLogin'>
              <img src={email} alt="simbolo de uma carta" />
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
              <img src={senha} alt="simbolo de um cadeado" />
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
            <div className='flex justify-between items-center w-full'> {/* Alteração aqui */}
              <div className='flex items-center'> {/* Alteração aqui */}
                <label htmlFor="manterLogado" className="text-white ">
                  <input
                    type="checkbox"
                  />
                  Manter Logado
                </label>
              </div>
              <p className="text-white font-bold">
                <p className="text-white hover:underline">
                  Esqueceu sua senha?
                </p>
              </p>
            </div>
            <button type='submit' className="buttonLogin text-white w-4/1 py-1.5 flex justify-center">
              {isLoading ? <RotatingLines
                strokeColor="white"
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
              <Link to="/cadastroUsuario" className="text-white hover:underline">
                Cadastre-se
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
