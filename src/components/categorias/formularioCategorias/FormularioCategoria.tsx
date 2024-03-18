import { useState, useEffect, useContext, ChangeEvent } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { buscar, atualizar, cadastrar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";
import './CadastroCateg.css'

function FormularioCategoria() {

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

    const [isLoading, setIsLoading] = useState<boolean>(false);

    let navigate = useNavigate();
    const { usuario } = useContext(AuthContext);
    const { id } = useParams<{ id: string }>();

    const token = usuario.token;

    console.log(token)

    async function buscarPorId(id: string) {
        await buscar(`/categorias/${id}`, setCategoria, {
            headers: {
                Authorization: token,
            },
        });

    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })

        console.log(JSON.stringify(categoria))
    }

    async function gerarNovoCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        console.log(JSON.stringify(categoria))
        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria, {
                    headers: {
                        Authorization: token,
                    },

                })

                alert('Categoria atualizado com sucesso')

            } catch (error: any) {

                alert('Erro ao atualizar a Categoria')
            }

        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria, {
                    headers: {
                        Authorization: token,
                    },

                })

                alert('Categoria cadastrado com sucesso')

            } catch (error: any) {

                alert('Erro ao cadastrar a Categoria')

            }
        }

        setIsLoading(false)

        retornar()
    }

    function retornar() {
        navigate("/categorias")
    }

    return (
        <>
            <div className="fundoCadastroCateg">
                <div className="conteudoCateg">
                        <div className="form-boxCadastroCateg mt-48">
                            <form onSubmit={gerarNovoCategoria}>
                                <h2 className='text-white text-4xl mb-3 ml-3 mt-10'>Categoria</h2>
                                <div className="input-containerCadastroCateg">
                                    <div className="inputboxCadastroCateg">
                                        <input
                                            type="text"
                                            placeholder="Nome"
                                            name='nome'
                                            className="placeholderCadastroCateg border-2 border-slate-700 rounded-3xl p-2"
                                            value={categoria.nome}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                        />
                                    </div>
                                </div>
                                <div className="input-containerCadastroCateg">
                                    <div className="inputboxCadastroCateg">
                                        <input
                                            type="text"
                                            placeholder="Descrição"
                                            name='descricao'
                                            className="placeholderCadastroCateg border-2 border-slate-700 rounded-3xl p-2"
                                            value={categoria.descricao}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                        />
                                    </div>
                                </div>
                                <button
                                    className="border-2 border-[#82D338] rounded-2xl bg-white text-center text-[#82D338] py-2 px-4 mb-4"
                                    type="submit"
                                >

                                    {isLoading ? <RotatingLines
                                        strokeColor="black"
                                        strokeWidth="5"
                                        animationDuration="0.75"
                                        width="24"
                                        visible={true} /> : <span> {id === undefined ? 'Cadastrar' : 'Atualizar'}</span>}

                                </button>
                            </form>
                        </div>
                </div>
            </div>
        </>
    );
}

export default FormularioCategoria;