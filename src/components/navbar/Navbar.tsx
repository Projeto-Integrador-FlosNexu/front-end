import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';


function Navbar() {
  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert('Usuário deslogado com sucesso');
    navigate('/login');
  }

  let navbarComponent;

  if (location.pathname.includes('/login') || location.pathname.includes('/cadastroUsuario')) {

    navbarComponent = <Link to='/' className='hover:underline'></Link>;

  } else {

    if (usuario.token !== '') {
      navbarComponent = (
        <div
          className='w-full flex justify-center py-6'
          style={{
            background: 'linear-gradient(to bottom, red, black)',
            color: 'white',
          }}
        >
          <div className='w-full bg-[#3CB371] text-white flex justify-center py-4'>
            <div className="container flex justify-between text-lg">
              <Link to='/home' className='text-2xl font-bold uppercase'>FlosNexu</Link>

              <div className='flex gap-4'>
                <Link to='/about' className='hover:underline'>About</Link>
                <Link to='/produtos' className='hover:underline'>Produtos</Link>
                <Link to='/categorias' className='hover:underline'>Categorias</Link>
                <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categorias</Link>
                <div className='hover:underline'>Perfil</div>
                <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      navbarComponent = (
        <div
          className='w-full flex justify-center py-6'
          style={{
            background: 'linear-gradient(to bottom, red, black)',
            color: 'white',
          }}
        >
          <div className='w-full bg-[#3CB371] text-white flex justify-center py-4'>
            <div className="container flex justify-between text-lg">
              <Link to='/home' className='text-2xl font-bold uppercase'>FlosNexu</Link>

              <div className='flex gap-4'>
                <Link to='/about' className='hover:underline'>About</Link>
                <Link to='/produtos' className='hover:underline'>Produtos</Link>
                <Link to='/categorias' className='hover:underline'>Categorias</Link>
                <Link to='/perfil' className='hover:underline'>Perfil</Link>
                <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <>
      {navbarComponent}
    </>
  );
}

export default Navbar;