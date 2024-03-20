import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import Produto from '../../../models/Produto'
import { buscar, deletar } from '../../../services/Service'
import { RotatingLines } from 'react-loader-spinner'
import { toastAlerta } from '../../../util/toastAlerta'
import './DeletarProduto.css'

function DeletarProduto() {

  const [isLoading] = useState<boolean>(false)

  const [produto, setProduto] = useState<Produto>({} as Produto)

  let navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto, {
        headers: {
          Authorization: token,
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
    if (token === '') {
      alert('Você precisa estar logado')
      navigate('/login')
    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function retornar() {
    navigate("/produtos")
  }

  async function deletarProduto() {
    try {
      await deletar(`/produtos/deletar/${id}`, {
        headers: {
          Authorization: token,
        },
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
          <h1 className='text-4xl text-center my-4'>Deletar produto</h1>

          <p className='text-center font-bold text-2xl mb-4'>Tem certeza de que deseja apagar o produto a seguir?</p>

          <div className=' border flex flex-col rounded overflow-hidden justify-center'>
            <div className=' flex flex-col items-center'>
              <div className="flex py-2 px-4 items-center ">
                <img src={produto.foto} className='h-100' alt="" />
              </div>
              <div className='p-4 '>
              <h4 className='text-lg font-semibold uppercase'>{produto.nome}</h4>
                <h1>PREÇO: {Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'}).format(produto.preco)}</h1>
                
                <p>{produto.descricao}</p>
                
                <p>Marca: {produto.marca}</p>
              </div>
            </div>
            <div className="flex rounded-3xl">
              <button className='text-slate-100 text-2xl bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
              <button className='w-full text-slate-100 text-2xl bg-[#82D338] hover:bg-[#32CD32] flex items-center justify-center' onClick={deletarProduto}>

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

export default DeletarProduto;