import { useContext, useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import './NavBar.css';
import { toastAlerta } from '../../util/toastAlerta';

function Navbar() {

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Produto', href: '/produtos', current: false },
    { name: 'Sobre', href: '/sobre', current: false },
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
          <div className='w-full bg-[#3f51da] text-black flex justify-center py-4'>
            <div className="container flex justify-between text-lg">
              <Link to='/home' className='text-2xl font-bold uppercase'>FlosNexu</Link>

              <div className='flex gap-4 relative barrapesquisa text-black' ref={searchBarRef}>
                {/* Barra de pesquisa */}
                <input
                  type="text"
                  placeholder="Pesquisar"
                  value={searchValue}
                  onChange={handleSearch}
                  className="border border-gray-300 text-black w-56 rounded-md px-2 py-1 focus:outline-none"
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

                {/* Links de navegação */}
                <Link to='/about' className='hover:underline'>Sobre</Link>
                <Link to='/produtos' className='hover:underline'>Produtos</Link>
                <Link to='/categorias' className='hover:underline'>Categorias</Link>
                <Link to='/cadastroProduto' className='hover:underline'>Cadastrar Produtos</Link>
                <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link>
                <Link to='/perfil' className='hover:underline'>Perfil</Link>
                <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
              </div>
            </div>
          </div>
        </>
      );


      // USUÃRIO DESLOGADO: BOTÃO LOGAR
    } else if (usuario.token == "") { // essa é a navBar que deve aparecer quando nao esta logado 
      navbarComponent = (
        <>
          <div className='w-full background py-4 border-b-[1px] border-white mobilemax:hidden'>
            <div className="container flex items-center ml-12">
              <Link to='/home' className='font-semibold uppercase flex items-center ml-0 mr-20 logo-container'>
                <img src={'paintLogo'} alt="Paint logo" className="mr-2 leading-7 logo" />
                Aquarelando
              </Link>
              <div className='flex gap-4 relative barrapesquisa text-black' ref={searchBarRef}>
                {/* Barra de pesquisa */}
                <input
                  type="text"
                  placeholder="Pesquisar"
                  value={searchValue}
                  onChange={handleSearch}
                  className="border border-gray-300 w-56 text-black rounded-md px-2 py-1 focus:outline-none"
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
            </div>
            <div className='flex gap-5 mr-12'>
              <Link to='/login'><img src={'ShoppingCart'} alt="Carrinho" className="mr-2 carrinho mt-0" /></Link>
              <Link to='login' className='rounded-full bg-[#fd98b4] text-white py-1 px-4'>Login/Cadastro</Link>
            </div>
            <hr />
          </div>
        </>
      );

      //USUÃRIO LOGADO: BOTÃƒO DESLOGAR, PERFIL
    } else {
      navbarComponent = (
        <>
          <div className='w-full background py-4 border-b-[1px] border-white mobilemax:hidden'>
            <div className="container flex items-center ml-12">
              <Link to='/home' className='font-semibold uppercase flex items-center ml-0 mr-20 logo-container'>
                <img src={'paintLogo'} alt="Paint logo" className="mr-2 leading-7 logo" />
                Aquarelando
              </Link>
              <div className='flex gap-4 relative barrapesquisa text-black' ref={searchBarRef}>
                {/* Barra de pesquisa */}
                <input
                  type="text"
                  placeholder="Pesquisar"
                  value={searchValue}
                  onChange={handleSearch}
                  className="border border-gray-300 w-56 text-black rounded-md px-2 py-1 focus:outline-none"
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
              <div className='font-light links'>
                <Link to='/home' className='mr-8'>HOME</Link>
                <Link to='/produtos' className='mr-8'>PRODUTOS</Link>
                <Link to='/perfil' className='hover:underline'>Perfil</Link>
                <Link to='/sobre' className='mr-8'>SOBRE</Link>
              </div>
            </div>
            <div className='flex gap-5 mr-12'>
              <Link to='/cart'><img src={'ShoppingCart'} alt="Carrinho" className="mr-2 carrinho mt-0" /></Link>
              <Link to='/perfil' ><img src={'IconPerfil'} alt="Perfil" className='mr-2 perfil mt-0' /> </Link>
              <Link to='/login' className='rounded-full bg-[#fd98b4] text-white py-1 px-4 mt-0' onClick={logout}>Desconectar</Link>
            </div>
            <hr />
          </div>

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