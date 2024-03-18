import { useContext, useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import './NavBar.css';
import pesquisa from '../../assets/pesquisa.png'
import { toastAlerta } from '../../util/toastAlerta';
<<<<<<< HEAD
import login from '../../assets/login.png'
import LogoVerde from '../../assets/Logozin.png'
import ShoppingCart from '../../assets/shoppingcart.png'
=======
>>>>>>> c62a83934f0763c76cd9561e5cbbc0cd4ddc3cb1

function Navbar() {

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Produto', href: '/produtos', current: false },
    { name: 'Sobre', href: '/about', current: false },
  ]

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
  }

  const navigate = useNavigate();

  // Estado para armazenar o valor da barra de pesquisa
  const [searchValue, setSearchValue] = useState('');

  // Estado para armazenar os resultados da pesquisa
  const [searchResults, setSearchResults] = useState<string[]>([]);

  // Lista de todos os resultados possíveis da pesquisa
  const allResults = ['Sobre', 'Produtos', 'Categorias', 'Perfil'];

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    toastAlerta('Usuário deslogado com sucesso', 'sucesso');
    navigate('/login');
  }

  // Função para lidar com a alteração do valor na barra de pesquisa
  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setSearchValue(value);

    // Filtra os resultados com base no valor digitado na barra de pesquisa
    const filteredResults = allResults.filter(result => result.toLowerCase().includes(value.toLowerCase()));
    setSearchResults(filteredResults);
  }

  // Referência para o elemento da barra de pesquisa
  const searchBarRef = useRef<HTMLDivElement>(null);

  // Efeito para lidar com cliques fora da barra de pesquisa e limpar os resultados
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
        setSearchResults([]);
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  let navbarComponent;

  const location = useLocation()

  if (location.pathname.includes('/login') || location.pathname.includes('/cadastro')) {

    navbarComponent

  } else {
    if (usuario.tipo === "adm") { // essa é a navBar que deve aparecer quando se esta logado como adm
      navbarComponent = (
        <>
          <div className="nav">
            <div className='caixanav'>
              <div className='caixanav' >
                <ul className='caixanav'>
                  <Link to='/home' className='home opacity-100'>HOME</Link>
                  <div className="dropdown">
                    <button className="dropbtn">PRODUTOS
                    </button>
                    <div className="dropdown-content">
                      <a href="#">Painel Solar</a>
                      <a href="#">blabla2</a>
                      <a href="#">blabla3</a>
                    </div>
                  </div>
                  <Link to='/servicos' className='servico'>SERVIÇOS</Link>
                  <Link to='/about' className=' sobre'>SOBRE</Link>

<<<<<<< HEAD

                </ul>
              </div>
              <div className='flex barrapesquisa text-black' ref={searchBarRef}>
                <img className='lupa' src={pesquisa} />
=======
              <div className='flex gap-4 relative barrapesquisa text-black' ref={searchBarRef}>
>>>>>>> c62a83934f0763c76cd9561e5cbbc0cd4ddc3cb1
                {/* Barra de pesquisa */}
                <input
                  type="text"
                  placeholder="Pesquisar"
                  value={searchValue}
                  onChange={handleSearch}
                  className="inputpesquisa border border-gray-300 text-black rounded-md px-2 py-1 focus:outline-none"
                />
                {/* Dropdown dos resultados da pesquisa */}
                {searchResults.length > 0 && (
                  <div className="absolute left-0 mt-10 w-56  bg-white rounded-md border border-gray-300">
                    <ul>
                      {searchResults.map((result, index) => (
                        <li key={index} className="py-1 px-2 hover:bg-gray-100">
                          <Link to={`/${result}`} className='hover:underline'>{result}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
<<<<<<< HEAD
            <div>
              <Link to='/home' className=''>
                <img src={LogoVerde} alt="Paint logo" className='imglogo' />
              </Link>
            </div>
            <Link to='/cart'><img src={'ShoppingCart'} alt="Carrinho" className="mr-2 carrinho mt-0" /></Link>

            <div className="dropdownperfiladm ">
              <button className='dropbtnperfiladm'>
                <img src={login} className='icon' />
              </button>
              <div className="dropdown-contentperfiladm">
                <Link to='/perfil' className=' -mt-8'>Perfil</Link>
                <Link to='/cadastroProduto' className='-mt-8'>Cadastrar Produtos</Link>
                <Link to='/cadastroCategoria' className=' -mt-8 '>Cadastrar Categoria</Link>
                <Link to='/home' className='-mt-8' onClick={logout}>Sair</Link>
              </div>
            </div>
          </div >

=======
          </div>
>>>>>>> c62a83934f0763c76cd9561e5cbbc0cd4ddc3cb1
        </>
      );


      // USUÃRIO DESLOGADO: BOTÃO LOGAR
    } else if (usuario.token == "") { // essa é a navBar que deve aparecer quando nao esta logado
      navbarComponent = (
        <>
<<<<<<< HEAD
          <div className="nav">
            <div className='caixanav'>
              <div className='caixanav' >
                <ul className='caixanav'>
                  <Link to='/home' className='home opacity-100'>HOME</Link>
                  <div className="dropdown">
                    <button className="dropbtn">PRODUTOS
                    </button>
                    <div className="dropdown-content">
                      <a href="#">Painel Solar</a>
                      <a href="#">blabla2</a>
                      <a href="#">blabla3</a>
                    </div>
                  </div>
                  <Link to='/servicos' className='servico'>SERVIÇOS</Link>
                  <Link to='/about' className=' sobre'>SOBRE</Link>
                  <button><Link to='/login'><img src={login} className='imagemperfil' /></Link></button>
                </ul>
              </div>
              <div className='flex barrapesquisa text-black' ref={searchBarRef}>
                <img className='lupa' src={pesquisa} />
=======
          <div className='w-full background py-4 border-b-[1px] border-white mobilemax:hidden'>
            <div className="container flex items-center ml-12">
              <Link to='/home' className='font-semibold uppercase flex items-center ml-0 mr-20 logo-container'>
                <img src={'paintLogo'} alt="Paint logo" className="mr-2 leading-7 logo" />
                Aquarelando
              </Link>
              <div className='flex gap-4 relative barrapesquisa text-black' ref={searchBarRef}>
>>>>>>> c62a83934f0763c76cd9561e5cbbc0cd4ddc3cb1
                {/* Barra de pesquisa */}
                <input
                  type="text"
                  placeholder="Pesquisar"
                  value={searchValue}
                  onChange={handleSearch}
                  className="inputpesquisa border border-gray-300 text-black rounded-md px-2 py-1 focus:outline-none"
                />
                {/* Dropdown dos resultados da pesquisa */}
                {searchResults.length > 0 && (
                  <div className="absolute left-0 mt-10 w-56  bg-white rounded-md border border-gray-300">
                    <ul>
                      {searchResults.map((result, index) => (
                        <li key={index} className="py-1 px-2 hover:bg-gray-100">
                          <Link to={`/${result}`} className='hover:underline'>{result}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
<<<<<<< HEAD
=======
              <div className='links font-light links'>
                <Link to='/home' className='mr-8'>HOME</Link>
                <div className="dropdown">
                  <button className="dropbtn">PRODUTOS
                    <i className="fa fa-caret-down"></i>
                  </button>
                  <div className="dropdown-content">
                    <a href="#">Painel Solar</a>
                    <a href="#">blabla2</a>
                    <a href="#">blabla3</a>
                  </div>
                </div>
                <Link to='/servicos' className='mr-8'>SERVIÇOS</Link>
                <Link to='/sobre' className='mr-8'>SOBRE</Link>
              </div>
>>>>>>> c62a83934f0763c76cd9561e5cbbc0cd4ddc3cb1
            </div>
            <div>
              <Link to='/home' className=''>
                <img src={LogoVerde} alt="Paint logo" className='imglogo' />
              </Link>
            </div>
<<<<<<< HEAD

          </div >


=======
            <hr />
          </div>
>>>>>>> c62a83934f0763c76cd9561e5cbbc0cd4ddc3cb1
        </>
      );
      //USUÃRIO LOGADO: BOTÃƒO DESLOGAR, PERFIL
    } else {
      navbarComponent = (
        <>
<<<<<<< HEAD
          <div className="nav">
            <div className='caixanav'>
              <div className='caixanav' >
                <ul className='caixanav'>
                  <Link to='/home' className='home opacity-100'>HOME</Link>
                  <div className="dropdown">
                    <button className="dropbtn">PRODUTOS
                    </button>
                    <div className="dropdown-content">
                      <a href="#">Painel Solar</a>
                      <a href="#">blabla2</a>
                      <a href="#">blabla3</a>
                    </div>
                  </div>
                  <Link to='/servicos' className='servico'>SERVIÇOS</Link>
                  <Link to='/about' className=' sobre'>SOBRE</Link>

                </ul>
                <button><Link to='/cart'><img src={ShoppingCart} alt="Carrinho" className="carrinho" /></Link></button>

              </div>

              <div className='flex barrapesquisa text-black' ref={searchBarRef}>
                <img className='lupa' src={pesquisa} />
=======
          <div className='w-full background py-4 border-b-[1px] border-white mobilemax:hidden'>
            <div className="container flex items-center ml-12">
              <Link to='/home' className='font-semibold uppercase flex items-center ml-0 mr-20 logo-container'>
                <img src={'paintLogo'} alt="Paint logo" className="mr-2 leading-7 logo" />
                Aquarelando
              </Link>
              <div className='flex gap-4 relative barrapesquisa text-black' ref={searchBarRef}>
>>>>>>> c62a83934f0763c76cd9561e5cbbc0cd4ddc3cb1
                {/* Barra de pesquisa */}
                <input
                  type="text"
                  placeholder="Pesquisar"
                  value={searchValue}
                  onChange={handleSearch}
                  className="inputpesquisa border border-gray-300 text-black rounded-md px-2 py-1 focus:outline-none"
                />
                {/* Dropdown dos resultados da pesquisa */}
                {searchResults.length > 0 && (
                  <div className="absolute left-0 mt-10 w-56  bg-white rounded-md border border-gray-300">
                    <ul>
                      {searchResults.map((result, index) => (
                        <li key={index} className="py-1 px-2 hover:bg-gray-100">
                          <Link to={`/${result}`} className='hover:underline'>{result}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className='flex gap-5 mr-12'>

              </div>


            </div>
            <div>
              <Link to='/home' className=''>
                <img src={LogoVerde} alt="Paint logo" className='imglogo' />
              </Link>
            </div>

            <div className="dropdownperfil ">
              <button className='dropbtnperfil'>
                <img src={login} className='icon' />
              </button>
              <div className="dropdown-contentperfil">
                <Link to='/perfil' className=' -mt-8'>Perfil</Link>
                <Link to='/home' className='  -mt-8' onClick={logout}>Sair</Link>
              </div>
            </div>
<<<<<<< HEAD

          </div >


=======
            <div className='flex gap-5 mr-12'>
              <Link to='/cart'><img src={'ShoppingCart'} alt="Carrinho" className="mr-2 carrinho mt-0" /></Link>
              <Link to='/perfil' ><img src={'IconPerfil'} alt="Perfil" className='mr-2 perfil mt-0' /> </Link>
              <Link to='/login' className='rounded-full bg-[#fd98b4] text-white py-1 px-4 mt-0' onClick={logout}>Desconectar</Link>
            </div>
            <hr />
          </div>

>>>>>>> c62a83934f0763c76cd9561e5cbbc0cd4ddc3cb1
        </>
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