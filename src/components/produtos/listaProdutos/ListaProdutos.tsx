import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Produto from '../../../models/Produto';
import { buscar } from '../../../services/Service';
import CardProdutoUsuario from "../cardProdutoUsuario/CardProdutoUsuario";
import Editar from '../../../assets/Editar.png';
import Deletar from '../../../assets/deletar.png'
import './Lista.css'

function ListaProdutos() {
    let ListaProdutosComponent;
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [search] = useState("");
    const [selected] = useState<{ nome: string; checked: boolean }[]>([]);
    const { usuario } = useContext(AuthContext);
    // const token = usuario.token;

    // useEffect(() => {
    //   if (token === '') {
    //     alert('Você precisa estar logado');
    //     navigate('/');
    //   }
    // }, [token]);

    async function buscarProdutos() {
        try {
            await buscar('/produtos', setProdutos, {
                headers: {},
            });
        } catch (error: any) {
            {
                alert("Erro ao buscar os Produtos");
            }
        }
    }

    useEffect(() => {
        buscarProdutos();
    }, [produtos.length]);

    const selectedArray = selected
        .filter((item) => item.checked === true)
        .map((item) => item.nome);
    const filtrarProdutos = produtos.filter((produto) => {
        const produtoNameLowerCase = produto.nome.toLowerCase();
        const searchLowerCase = search.toLowerCase();
        return searchLowerCase !== ""
            ? produtoNameLowerCase.includes(searchLowerCase)
            : selectedArray.includes(produto.nome.split(" ")[0]);
    });

    const filteredProdutos =
        filtrarProdutos.length > 0 ? filtrarProdutos : produtos;
    if (usuario.tipo === "adm") {
        ListaProdutosComponent = (
            <>
                <div className='fundoLista'>
                    <div className=" bg-transparent flex-row-reverse ml-[346px] ounded-t-lg p-5 mt-40 w-4/6 mobilemax:hidden">
                        {/* Pagina Produtos */}

                        <div className="overflow-x-auto text-black items-center justify-center align-middle">
                            <div className="flex mt-3 p-5 text-white text-3xl font-bold ">
                                <h1 className='text-5xl'>Produtos</h1>

                                {/* Botão "Add Produto" */}
                                <Link to={`/produtos/novo`}>
                                    <button className="bg-black ml-[500px] text-[#82D338] items-center justify-between px-6 py-2 flex text-2xl rounded-full font-normal">Cadastrar Produto</button>
                                </Link>
                            </div>
                            <table className=" bg-white border flex-row-reverse w-4/6 rounded-md overflow-hidden">
                                <thead className="bg-black text-[#82D338]">
                                    <tr className='text-[#82D338]'>
                                        <th className="py-4 px-4 border-b"> </th>
                                        <th className="py-4 px-4 border-b">Fotos</th>
                                        <th className="py-4 px-4 border-b">Nome</th>
                                        <th className="py-4 px-4 border-b">Preço</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredProdutos.map((produto) => (
                                        <tr key={produto.id}>
                                            {/* Link para a página de edição */}
                                            <Link to={`/produtos/editar/${produto.id}`}>
                                                <img src={Editar} alt="Botão de editar" className="w-6 mr-2 ml-8 pt-4" />
                                            </Link>
                                            <Link to={`/produtos/deletar/${produto.id}`}>
                                                <img src={Deletar} alt="Botão de editar" className="w-6 mr-2 ml-8 pt-4" />
                                            </Link>
                                            <td className="py-2 px-4 border-b ">
                                                <img src={produto.foto} alt="Product" className=" w-16 -mb-3 rounded-full" />
                                            </td>
                                            <td className="py-2 px-4 border-b">{produto.nome}</td>
                                            <td className="py-2 px-4 border-b">
                                                {Intl.NumberFormat('pt-BR', {
                                                    style: 'currency',
                                                    currency: 'BRL',
                                                }).format(produto.preco)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>


                </div>
            </>

        );
    } else {
        ListaProdutosComponent = (
            <>
                {/* Pagina Produtos */}
                <div className='fundoLista mobilemax:hidden'>
                    <div className='mt-[22rem]'>
                        <div className=" flex justify-center mt-3 p-4  text-white text-6xl font-bold">
                            <h1>Produtos</h1>
                        </div>
                        <div className="flex flex-wrap">

                            <div className="flex flex-wrap justify-center gap-10 mt-7 p-3">
                                {filteredProdutos.map((produto) => (
                                    <CardProdutoUsuario key={produto.id} produto={produto} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* MOBILE */}
                <div className='fundoListaMobile mobilemin:hidden'>
                    <div className=''>
                        <div className=" flex justify-center p-4  text-white text-6xl font-bold">
                            <h1>Produtos</h1>
                        </div>
                        <div className="flex flex-wrap">

                            <div className="flex flex-wrap justify-center gap-4 mt-7 p-3">
                                {filteredProdutos.map((produto) => (
                                    <CardProdutoUsuario key={produto.id} produto={produto} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    return (
        <>
            {ListaProdutosComponent}
        </>
    );
}

export default ListaProdutos;
