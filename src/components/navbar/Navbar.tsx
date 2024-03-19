import { useContext, useState, useEffect, useRef, Fragment } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import './NavBar.css';
import { toastAlerta } from '../../util/toastAlerta';
import login from '../../assets/login.png'
import LogoVerde from '../../assets/Logozin.png'
import ShoppingCart from '../../assets/shoppingcart.png'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import BotaoMobile from '../../assets/Logo_FlosNexu.png'
import usercircle from '../../assets/user-circle_1.png'
import ShoppingCart1 from '../../assets/shopping-cart-simple_2.png'


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
           <div className="nav mobilemax:hidden">
            <div className='caixanav'>
            <img src={LogoVerde} alt="Paint logo" className='imglogo' />
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
                <div>
                <input
                  type="text"
                  placeholder="Pesquisar"
                  value={searchValue}
                  onChange={handleSearch}
                  className="inputpesquisa border border-gray-300 text-black rounded-md focus:outline-none"
                />{searchResults.length > 0 && (
                  <div className="absolute w-56 bg-white rounded-md border border-gray-300">
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
                <Link to='/login'><img src={login} className='imagemperfil pl-[38rem]' /></Link>
                <Link to='/cart'><img src={ShoppingCart} alt="Carrinho" className=" pl-[38rem] mt-0"/></Link>
               
                </ul>
              </div>
            </div>
          </div >
          {/* Mobile Nav */}
          {/* Mobile NAVBAR*/}
          <div className='mobilemin:hidden'>
            <Disclosure as="nav" className="bg-[#030303]">
              {({ open }) => (
                <>
                  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <Menu as="div" className="relative ml-3">
                          <div>
                            
                            <Menu.Button className="relative flex  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">Abra o Menu</span>
                              <img
                                className="h-10 w-8 bg-black"
                                src={BotaoMobile}
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                             <Menu.Items className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                  >
                                    Home
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/produtos"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                  >
                                    Produtos
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/servicos"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                  >
                                    Serviços
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/about"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                  >
                                    Sobre
                                  </Link>
                                )}
                              </Menu.Item>
                            </Menu.Items>
                            
                          </Transition>
                        </Menu>
                      </div>
                      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center m2">
                        <img src={LogoVerde} alt="Paint logo" className='w-[16rem] p-1' />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                          <div className="flex space-x-4">
                            {navigation.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className={classNames(
                                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                  'rounded-md px-3 py-2 text-sm font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-3">
                      <Link to='/cart'><img src={ShoppingCart1} alt="Carrinho" className="w-9"/></Link>

                        {/* Profile dropdown */}
                        <Menu as="div" className="flex gap-5">
                          <div>
                          <Link to={'/login'}>
                          <img
                                className="h-8 w-8 rounded-full"
                                src={usercircle}
                                alt=""
                              /></Link>
                          </div>
                        </Menu>
                      </div>
                    </div>
                  </div>

                  
                    
                </>
              )}
            </Disclosure>
          </div>

        </>
      );


      // USUÃRIO DESLOGADO: BOTÃO LOGAR
    } else if (usuario.token == "") { // essa é a navBar que deve aparecer quando nao esta logado
      navbarComponent = (
        <>
          <div className="nav mobilemax:hidden">
            <div className='caixanav'>
            <img src={LogoVerde} alt="Paint logo" className='imglogo' />
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
                <div>
                <input
                  type="text"
                  placeholder="Pesquisar"
                  value={searchValue}
                  onChange={handleSearch}
                  className="inputpesquisa border border-gray-300 text-black rounded-md focus:outline-none"
                />{searchResults.length > 0 && (
                  <div className="absolute w-56 bg-white rounded-md border border-gray-300">
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
                <Link to='/login'><img src={login} className='imagemperfil pl-[38rem]' /></Link>
                <Link to='/cart'><img src={ShoppingCart} alt="Carrinho" className=" pl-[38rem] mt-0"/></Link>
               
                </ul>
              </div>
            </div>
          </div >
          {/* Mobile Nav */}
          {/* Mobile NAVBAR*/}
          <div className='mobilemin:hidden'>
            <Disclosure as="nav" className="bg-[#030303]">
              {({ open }) => (
                <>
                  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <Menu as="div" className="relative ml-3">
                          <div>
                            
                            <Menu.Button className="relative flex  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">Abra o Menu</span>
                              <img
                                className="h-10 w-8 bg-black"
                                src={BotaoMobile}
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                             <Menu.Items className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                  >
                                    Home
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/produtos"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                  >
                                    Produtos
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/servicos"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                  >
                                    Serviços
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/about"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                  >
                                    Sobre
                                  </Link>
                                )}
                              </Menu.Item>
                            </Menu.Items>
                            
                          </Transition>
                        </Menu>
                      </div>
                      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center m2">
                        <img src={LogoVerde} alt="Paint logo" className='w-[16rem] p-1' />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                          <div className="flex space-x-4">
                            {navigation.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className={classNames(
                                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                  'rounded-md px-3 py-2 text-sm font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-3">
                      <Link to='/cart'><img src={ShoppingCart1} alt="Carrinho" className="w-9"/></Link>

                        {/* Profile dropdown */}
                        <Menu as="div" className="flex gap-5">
                          <div>
                          <Link to={'/login'}>
                          <img
                                className="h-8 w-8 rounded-full"
                                src={usercircle}
                                alt=""
                              /></Link>
                          </div>
                        </Menu>
                      </div>
                    </div>
                  </div>

                  
                    
                </>
              )}
            </Disclosure>
          </div>


        </>
      );
      //USUÃRIO LOGADO: BOTÃƒO DESLOGAR, PERFIL
    } else {
      navbarComponent = (
        <>
           <div className="nav mobilemax:hidden">
            <div className='caixanav'>
            <img src={LogoVerde} alt="Paint logo" className='imglogo' />
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
                <div>
                <input
                  type="text"
                  placeholder="Pesquisar"
                  value={searchValue}
                  onChange={handleSearch}
                  className="inputpesquisa border border-gray-300 text-black rounded-md focus:outline-none"
                />{searchResults.length > 0 && (
                  <div className="absolute w-56 bg-white rounded-md border border-gray-300">
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
                <Link to='/login'><img src={login} className='imagemperfil pl-[30%]' /></Link>
                <Link to='/cart' className='pl-[40%]'><img src={ShoppingCart} alt="Carrinho" className="  mt-0"/></Link>
               
                </ul>
              </div>
            </div>
          </div >
          {/* Mobile Nav */}
          {/* Mobile NAVBAR*/}
          <div className='mobilemin:hidden'>
            <Disclosure as="nav" className="bg-[#030303]">
              {({ open }) => (
                <>
                  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <Menu as="div" className="relative ml-3">
                          <div>
                            
                            <Menu.Button className="relative flex  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">Abra o Menu</span>
                              <img
                                className="h-10 w-8 bg-black"
                                src={BotaoMobile}
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                             <Menu.Items className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/home"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                  >
                                    Home
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/produtos"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                  >
                                    Produtos
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/servicos"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                  >
                                    Serviços
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/about"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                  >
                                    Sobre
                                  </Link>
                                )}
                              </Menu.Item>
                            </Menu.Items>
                            
                          </Transition>
                        </Menu>
                      </div>
                      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center m2">
                        <img src={LogoVerde} alt="Paint logo" className='w-[16rem] p-1' />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                          <div className="flex space-x-4">
                            {navigation.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className={classNames(
                                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                  'rounded-md px-3 py-2 text-sm font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-3">
                      <Link to='/cart'><img src={ShoppingCart1} alt="Carrinho" className="w-9"/></Link>

                        {/* Profile dropdown */}
                        <Menu as="div" className="flex gap-5">
                          <div>
                          <Link to={'/login'}>
                          <img
                                className="h-8 w-8 rounded-full"
                                src={usercircle}
                                alt=""
                              /></Link>
                          </div>
                        </Menu>
                      </div>
                    </div>
                  </div>

                  
                    
                </>
              )}
            </Disclosure>
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