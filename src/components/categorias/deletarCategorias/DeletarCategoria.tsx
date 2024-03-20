import { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router';
import Categoria from '../../../models/Categoria';
import { buscar, deletar } from '../../../services/Service';
import { RotatingLines } from 'react-loader-spinner';
import { AuthContext } from '../../../contexts/AuthContext';
import { toastAlerta } from '../../../util/toastAlerta'

function DeletarCategoria() {

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const [isLoading] = useState<boolean>(false);

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('O token expirou, favor logar novamente')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/login')
        }
    }, [token])

    function retornar() {
        navigate("/categorias")
    }

    async function deletarCategoria() {
        try {
            await deletar(`/deletarCategoria/${id}`, {
                headers: {
                    'Authorization': token
                }
            });

            toastAlerta("Produto apagado com sucesso", "sucesso");
        } catch (error) {
            toastAlerta("Erro ao apagar o Produto", "erro");
        }
        retornar();
    }

    return (
        <>
            <div className='fundoDeletar '>
                <div className='w-[50rem] rounded-3xl mx-auto  bg-white'>
                    <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>

                    <p className='text-center font-bold text-2xl mb-4'>Tem certeza de que deseja apagar a categoria a seguir?</p>

                    <div className=' border flex flex-col rounded overflow-hidden justify-center'>
                        <div className=' flex flex-col items-center'>

                            <div className='p-4 '>
                                <h4 className='text-5xl font-bold uppercase'>{categoria.nome}</h4>

                            </div>
                        </div>
                        <div className="flex rounded-3xl">
                            <button className='text-slate-100 text-2xl bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
                            <button className='w-full text-slate-100 text-2xl bg-[#82D338] hover:bg-[#32CD32] flex items-center justify-center' onClick={deletarCategoria}>

                                {isLoading ?
                                    <RotatingLines
                                        strokeColor="white"
                                        strokeWidth="5"
                                        animationDuration="0.75"
                                        width="24"
                                        visible={true}
                                    /> :
                                    <span>Sim</span>
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeletarCategoria