import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Produto from '../../../models/Produto';
import Categoria from '../../../models/Categoria';
import { buscar, atualizar, cadastrar } from '../../../services/Service';
import { RotatingLines } from 'react-loader-spinner';
import './CadastroProdutos.css'


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

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true)

    if (id != undefined) {
      try {
        await atualizar(`/produtos`, produto, setProduto, {
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
        await cadastrar(`/produtos`, produto, setProduto, {
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
        <div className='fundoCadastroProd'>
          <div className='conteudoCP'>
            <div className="container flex flex-col mx-auto items-center">
              <div className='form-boxCadastroProd'>
                <form onSubmit={gerarNovoProduto}>
                  <h2 className='text-white text-4xl mb-3 ml-3 mt-1'>Produto</h2>
                  <div className='input-containerCadastroProd'>

                    <div className='inputboxCadastroProd'>
                      <input
                        value={produto.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Nome"
                        name="nome"
                        required
                        className="placeholderCadastroProd border-2 border-slate-700 rounded-3xl p-2"
                      />
                    </div>
                  </div>
                  <div className='input-containerCadastroProd'>

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
                  <div className='input-containerCadastroProd'>

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
                  <div className='input-containerCadastroProd'>
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
                  <div className='input-containerCadastroProd'>
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
                  <div className='input-containerCadastroProd'>

                    <div className='inputboxCadastroProd'>
                      <input
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Quantidade em estoque"
                        name="quantidade"
                        required
                        className="placeholderCadastroProd rounded-3xl border-2 border-slate-700 p-2"
                      />
                    </div>
                  </div>
                  <div className='input-containerCadastroProd'>

                    <select name="categoria" id="categoria"
                      className='inputboxCadastroProd placeholderCadastroProd rounded-3xl border-2 border-slate-700 p-2' onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}>
                      <option className='text-black ' text-black value="" selected disabled>Selecione uma categoria</option>
                      {categorias.map((categoria) => (
                        <>
                          <option value={categoria.id} >{categoria.descricao}</option>
                        </>
                      ))}
                    </select>


                  </div>
                  <button disabled={carregandoCategoria} type='submit' className='buttonCadastroProd rounded-3xl disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800 text-black font-bold w-1/2 mx-auto  py-2 flex justify-center'>
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
                </form>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default FormularioProduto;