import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import Produto from '../../../models/Produto'
import { buscar, deletar } from '../../../services/Service'
import { RotatingLines } from 'react-loader-spinner'

function DeletarProduto() {

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [produto, setProduto] = useState<Produto>({} as Produto)

  let navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto, {
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
    setIsLoading(true)

    try {
      await deletar(`/produtos/${id}`, {
        headers: {
          'Authorization': token
        }
      })

      alert('Produto apagada com sucesso')

    } catch (error) {
      alert('Erro ao apagar o Produto')
    }

    setIsLoading(false)
    retornar()
  }
  return (
    <div className='container w-1/3 mx-auto'>
      <h1 className='text-4xl text-center my-4'>Deletar produto</h1>

      <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar o produto a seguir?</p>

      <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
      <div>
        <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
          <img src={produto.foto} className='h-100' alt="" />
        </div>
        <div className='p-4 '>
          <p>Preço: {produto.descricao} </p>
          <h4 className='text-lg font-semibold uppercase'>{produto.nome}</h4>
          <p>{produto.descricao}</p>
          <p>Categoria: {produto.categoria?.descricao}</p>
          <p>Marca: {produto.marca}</p>
        </div>
      </div>
        <div className="flex">
          <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
          <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center' onClick={deletarProduto}>

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
  )
}

export default DeletarProduto