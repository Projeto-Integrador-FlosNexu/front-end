import { useContext, useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import './NavBar.css';
import { toastAlerta } from '../../util/toastAlerta';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import perfil from '../../assets/login.png'

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

              <div className='flex gap-4 relative' ref={searchBarRef}>
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
          {/* Mobile NAVBAR*/}
          <div className='mobilemin:hidden'>
            <Disclosure as="nav" className="bg-[#439DA6]">
              {({ open }) => (
                <>
                  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-[#FD98B4] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Abre o Menu</span>
                          {open ? (
                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                          ) : (
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                          )}
                        </Disclosure.Button>
                      </div>
                      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center m2">
                          <h4 className='text-white font-extralight '>Aquarelando</h4>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                          <div className="flex space-x-4">
                            {navigation.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                  'rounded-md px-3 py-2 text-sm font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                          <div>
                            <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">Abra o Menu</span>
                              <img
                                className="h-8 w-8 rounded-full"
                                src={perfil}
                                alt=""
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
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                                    to="/produtos/novo"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                  >
                                    Cadastrar Produtos
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/categorias"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                  >
                                    Categorias
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/categoria/novo"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                  >
                                    Cadastro Categoria
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="" onClick={logout}
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                  >
                                    Sair
                                  </Link>
                                )}
                              </Menu.Item>

                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  </div>

                  <Disclosure.Panel className="sm:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                      {navigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'block rounded-md px-3 py-2 text-base font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </Disclosure.Panel>
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
          <div className='w-full background py-4 border-b-[1px] border-white mobilemax:hidden'>
            <div className="container flex items-center ml-12">
              <Link to='/home' className='font-semibold uppercase flex items-center ml-0 mr-20 logo-container'>
                <img src={'paintLogo'} alt="Paint logo" className="mr-2 leading-7 logo" />
                Aquarelando
              </Link>
              <div className='flex gap-4 relative' ref={searchBarRef}>
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
                <Link to='/produtos' className='mr-8'>PRODUTOS</Link>
                <Link to='/sobre' className='mr-8'>SOBRE</Link>
              </div>
            </div>
            <div className='flex gap-5 mr-12'>
              <Link to='/login'><img src={'ShoppingCart'} alt="Carrinho" className="mr-2 carrinho mt-0" /></Link>
              <Link to='login' className='rounded-full bg-[#fd98b4] text-white py-1 px-4'>Login/Cadastro</Link>
            </div>
            <hr />
          </div>
          {/* Mobile NAVBAR*/}
          <div className='mobilemin:hidden'>
            <Disclosure as="nav" className="bg-[#439DA6]">
              {({ open }) => (
                <>
                  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-[#FD98B4] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Abre o Menu</span>
                          {open ? (
                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                          ) : (
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                          )}
                        </Disclosure.Button>
                      </div>
                      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center m2">
                          <h4 className='text-white font-extralight '>Aquarelando</h4>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                          <div className="flex space-x-4">
                            {navigation.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                  'rounded-md px-3 py-2 text-sm font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                          <div>
                            <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">Abra o Menu</span>
                              <img
                                className="h-8 w-8 rounded-full"
                                src={perfil}
                                alt=""
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
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/login"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                  >
                                    Login
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/cadastro"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                  >
                                    Cadastro
                                  </Link>
                                )}
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  </div>

                  <Disclosure.Panel className="sm:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                      {navigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'block rounded-md px-3 py-2 text-base font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </Disclosure.Panel>
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
          <div className='w-full background py-4 border-b-[1px] border-white mobilemax:hidden'>
            <div className="container flex items-center ml-12">
              <Link to='/home' className='font-semibold uppercase flex items-center ml-0 mr-20 logo-container'>
                <img src={'paintLogo'} alt="Paint logo" className="mr-2 leading-7 logo" />
                Aquarelando
              </Link>
              <div className='flex gap-4 relative' ref={searchBarRef}>
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
          {/* Mobile NAVBAR*/}
          <div className='mobilemin:hidden'>
            <Disclosure as="nav" className="bg-[#439DA6]">
              {({ open }) => (
                <>
                  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-[#FD98B4] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Abre o Menu</span>
                          {open ? (
                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                          ) : (
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                          )}
                        </Disclosure.Button>
                      </div>
                      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center m2">
                          <h4 className='text-white font-extralight '>Aquarelando</h4>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                          <div className="flex space-x-4">
                            {navigation.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                  'rounded-md px-3 py-2 text-sm font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                          <div>
                            <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">Abra o Menu</span>
                              <img
                                className="h-8 w-8 rounded-full"
                                src={perfil}
                                alt=""
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
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="/perfil"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                  >
                                    Perfil
                                  </a>
                                )}
                              </Menu.Item>

                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#" onClick={logout}
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                  >
                                    Sair
                                  </a>
                                )}
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  </div>

                  <Disclosure.Panel className="sm:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                      {navigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'block rounded-md px-3 py-2 text-base font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </Disclosure.Panel>
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