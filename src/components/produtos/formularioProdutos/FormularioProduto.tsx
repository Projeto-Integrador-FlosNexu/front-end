import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Produto from '../../../models/Produto';
import Categoria from '../../../models/Categoria';
import { buscar, atualizar, cadastrar } from '../../../services/Service';
import { RotatingLines } from 'react-loader-spinner';
import './CadastroProdutos.css'
import logo from '../../../assets/Logozin.png'



function FormularioProduto() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: '',
    icone: '',
    descricao: ''
  });

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: '',
    descricao: '',
    preco: 0,
    foto: '',
    marca: '',
    quantidade: 0,
    categoria: null,
    usuario: null,
  });

  async function buscarProdutoPorId(id: string) {
    await buscar(`/produtos/${id}`, setProduto, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategoriaPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategorias() {
    await buscar('/categorias', setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado');
      navigate('/');
    }
  }, [token]);

  useEffect(() => {
    buscarCategorias();
    if (id !== undefined) {
      buscarProdutoPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    });
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria,
      usuario: usuario,
    });
  }

  function retornar() {
    navigate('/produtos');
  }

  function back() {
    navigate('/login')
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true)

    if (id != undefined) {
      try {
        await atualizar(`/produtos/editar`, produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });
        alert('Produto atualizado com sucesso');
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          alert('O token expirou, favor logar novamente')
          handleLogout()
        } else {
          alert('Erro ao atualizar o Produto');
        }
      }
    } else {
      try {
        await cadastrar(`/produtos/novo`, produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });

        alert('Produto cadastrado com sucesso');
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          alert('O token expirou, favor logar novamente')
          handleLogout()
        } else {
          alert('Erro ao cadastrar o Produto');
        }
      }
    }

    setIsLoading(false)
  }

  const carregandoCategoria = categoria.descricao === '';

  return (
    <>
      <div className='fundoCadastroProd mobilemax:hidden text-xl'>
        <div className='conteudoCP'>

          <div className='form-boxCadastroProd'>
            <form onSubmit={gerarNovoProduto}>
              <h2 className='text-white text-5xl mb-3 ml-3 mt-9'>Produto</h2>
              <div className='input-containerCadastroProd ml-24 '>

                <div className='inputboxCadastroProd mb-3'>
                  <input
                    value={produto.nome}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    type="text"
                    placeholder="Nome"
                    name="nome"
                    required
                    className="placeholderCadastroProd mb-3 border-2 border-slate-700 rounded-3xl p-2"
                  />
                </div>
              </div>
              <div className='input-containerCadastroProd ml-24 '>

                <div className='inputboxCadastroProd'>

                  <input
                    value={produto.descricao}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    type="text"
                    placeholder="Descrição"
                    name="descricao"
                    required
                    className="placeholderCadastroProd border-2 border-slate-700 rounded-3xl p-2"
                  />
                </div>
              </div>
              <div className='input-containerCadastroProd ml-24 '>

                <div className='inputboxCadastroProd'>
                  <input
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    type="text"
                    placeholder="Preço"
                    name="preco"
                    required
                    className="placeholderCadastroProd border-2 border-slate-700 rounded-3xl p-2"
                  />
                </div>
              </div>
              <div className='input-containerCadastroProd ml-24 '>
                <div className='inputboxCadastroProd'>
                  <input
                    value={produto.foto}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    type="text"
                    placeholder="Foto do produto"
                    name="foto"
                    required
                    className="placeholderCadastroProd border-2 border-slate-700 rounded-3xl p-2"
                  />
                </div>
              </div>
              <div className='input-containerCadastroProd ml-24 '>
                <div className='inputboxCadastroProd'>

                  <input
                    value={produto.marca}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    type="text"
                    placeholder="Marca"
                    name="marca"
                    required
                    className="placeholderCadastroProd border-2 border-slate-700 rounded-3xl p-2"
                  />
                </div>
              </div>
              <div className='input-containerCadastroProd ml-24 '>

                <div className='inputboxCadastroProd'>
                  <input
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    type="text"
                    placeholder="Quantidade"
                    name="quantidade"
                    required
                    className="placeholderCadastroProd rounded-3xl border-2 border-slate-700 p-2"
                  />
                </div>
              </div>
              <div className='input-containerCadastroProd ml-24'>

                <select name="categoria" id="categoria" className=' inputboxCadastroProd placeholderCadastroProd rounded-2xl w-[17rem] mr-[6rem] text-black border-2 border-slate-700 p-2 bg-white' onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}>
                  <option className='text-black  bg-white' value="" selected disabled>Selecione uma categoria</option>
                  {categorias.map((categoria) => (
                    <option key={categoria.id} className='bg-white w-50' value={categoria.id}>{categoria.nome}</option>
                  ))}
                </select>
              </div>
              <div className="flex mx-auto mb-3">


                <button className="buttonCadastroProd border-2 border-[#82D338] rounded-2xl bg-white text-center text-[#82D338] py-2 px-4 mb-2" onClick={back}>
                  Voltar
                </button>

                <button disabled={carregandoCategoria} type='submit' className='buttonCadastroProd border-2 border-[#82D338] rounded-2xl bg-white text-center text-[#82D338] py-2 px-4 mb-2'>
                  {isLoading ?

                    <RotatingLines
                      strokeColor="black"
                      strokeWidth="5"
                      animationDuration="1"
                      width="24"
                      visible={true}
                    />
                    : id !== undefined ? 'Editar' : 'Cadastrar'}
                </button>
              </div>
            </form>
          </div>
          <div className='imagemflos'>
            <img className='w-[97rem]' src={logo} />
          </div>

        </div>
      </div>

      {/* PAGINA PARA MOBILE */}
      <div className='fundoCadastroProd  flex-col flex mobilemin:hidden'>
        <div className='imagemflos mt-20 mb-[-10px]'>
          <img className='w-[97rem]' src={logo} />
        </div>
        <div className=''>

          <div className='mt-[-10px] form-boxCadastroProd w-[300px] p-1 mb-10'>
            <form onSubmit={gerarNovoProduto}>
              <h2 className='text-white text-5xl mb-3 ml-28 mt-9'>PRODUTO</h2>
              <div className='input-containerCadastroProd ml-24 '>

                <div className='inputboxCadastroProd mb-3'>
                  <input
                    value={produto.nome}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    type="text"
                    placeholder="Nome"
                    name="nome"
                    required
                    className="placeholderCadastroProd mb-3 border-2 border-slate-700 rounded-3xl p-2"
                  />
                </div>
              </div>
              <div className='input-containerCadastroProd ml-24 '>

                <div className='inputboxCadastroProd'>

                  <input
                    value={produto.descricao}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    type="text"
                    placeholder="Descrição"
                    name="descricao"
                    required
                    className="placeholderCadastroProd border-2 border-slate-700 rounded-3xl p-2"
                  />
                </div>
              </div>
              <div className='input-containerCadastroProd ml-24 '>

                <div className='inputboxCadastroProd'>
                  <input
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    type="text"
                    placeholder="Preço"
                    name="preco"
                    required
                    className="placeholderCadastroProd border-2 border-slate-700 rounded-3xl p-2"
                  />
                </div>
              </div>
              <div className='input-containerCadastroProd ml-24 '>
                <div className='inputboxCadastroProd'>
                  <input
                    value={produto.foto}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    type="text"
                    placeholder="Foto do produto"
                    name="foto"
                    required
                    className="placeholderCadastroProd border-2 border-slate-700 rounded-3xl p-2"
                  />
                </div>
              </div>
              <div className='input-containerCadastroProd ml-24 '>
                <div className='inputboxCadastroProd'>

                  <input
                    value={produto.marca}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    type="text"
                    placeholder="Marca"
                    name="marca"
                    required
                    className="placeholderCadastroProd border-2 border-slate-700 rounded-3xl p-2"
                  />
                </div>
              </div>
              <div className='input-containerCadastroProd ml-24 '>

                <div className='inputboxCadastroProd'>
                  <input
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    type="text"
                    placeholder="Quantidade"
                    name="quantidade"
                    required
                    className="placeholderCadastroProd rounded-3xl border-2 border-slate-700 p-2"
                  />
                </div>
              </div>
              <div className='input-containerCadastroProd ml-24'>

                <select name="categoria" id="categoria" className='inputboxCadastroProd placeholderCadastroProd rounded-2xl w-60 text-black border-2 border-slate-700 p-2 bg-white' onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}>
                  <option className='text-black bg-white' value="" selected disabled>Selecione uma categoria</option>
                  {categorias.map((categoria) => (
                    <option key={categoria.id} className='bg-white w-50' value={categoria.id}>{categoria.nome}</option>
                  ))}
                </select>
              </div>
              <div className="flex mx-auto mb-3">


                <button className="buttonCadastroProd border-2 border-[#82D338] hover:underline rounded-2xl bg-white text-center text-[#82D338] py-2 px-4 mb-2" onClick={back}>
                  Voltar
                </button>

                <button disabled={carregandoCategoria} type='submit' className='buttonCadastroProd border-2 border-[#82D338] hover:underline rounded-2xl bg-white text-center text-[#82D338] py-2 px-4 mb-2'>
                  {isLoading ?

                    <RotatingLines
                      strokeColor="black"
                      strokeWidth="5"
                      animationDuration="1"
                      width="24"
                      visible={true}
                    />
                    : id !== undefined ? 'Editar' : 'Cadastrar'}
                </button>
              </div>
            </form>
          </div>


        </div>
      </div>

    </>
  );
}

export default FormularioProduto;