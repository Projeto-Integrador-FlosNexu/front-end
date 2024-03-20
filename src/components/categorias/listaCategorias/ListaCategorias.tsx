import { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import Categoria from '../../../models/Categoria';
import { buscar } from '../../../services/Service';
import { AuthContext } from '../../../contexts/AuthContext';
import { Link } from "react-router-dom";
import Editar from '../../../assets/Editar.png';
import '../../produtos/listaProdutos/Lista.css'
import Deletar from '../../../assets/deletar.png'


function ListaCategorias() {


  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [search] = useState("");
  const [selected] = useState<{ nome: string; checked: boolean }[]>([]);
  const { usuario } = useContext(AuthContext);

  const token = usuario.token;



  async function buscarCategorias() {
    try {
      await buscar('/categorias', setCategorias, {
        headers: {
          Authorization: token,
        },
      });

    } catch (error: any) {
      alert(' Erro ao listar as categorias')

    }
  }

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);


  const selectedArray = selected
    .filter((item) => item.checked === true)
    .map((item) => item.nome);
  const filtrarCategorias = categorias.filter((categoria) => {
    const categoriaNameLowerCase = categoria.nome.toLowerCase();
    const searchLowerCase = search.toLowerCase();
    return searchLowerCase !== ""
      ? categoriaNameLowerCase.includes(searchLowerCase)
      : selectedArray.includes(categoria.nome.split(" ")[0]);
  });

  const filteredCategorias =
    filtrarCategorias.length > 0 ? filtrarCategorias : categorias;
  return (
    <>
      <div className='fundoLista mobilemax:hidden'>
        <div className=" bg-transparent flex-row-reverse ml-[346px] ounded-t-lg p-5 mt-[-70px] w-4/6 mobilemax:hidden">            {/* Container */}
          <div className="overflow-x-auto text-black items-center justify-center align-middle">
            <div className="flex mt-3 p-5 text-white text-3xl font-bold ">
              <h1 className='text-5xl'>Categorias</h1>

              {/* Botão "Add categoria" */}
              <Link to="/cadastroCategoria">
                <button className="bg-black ml-[460px] text-[#82D338] items-center justify-between px-6 py-2 flex text-2xl rounded-full font-normal">
                  Cadastrar Categoria
                </button>
              </Link>
            </div>
            <table className=" bg-white border flex-row-reverse w-4/6 rounded-md overflow-hidden">
              <thead className="bg-black text-[#82D338]">
                <tr className='text-[#82D338]'>
                  <th className="py-4 px-4 border-b"> </th>
                  <th className="py-4 px-4 border-b">Categoria</th>
                  <th className="py-4 px-4 border-b">Descrição</th>
                </tr>
              </thead>
              <tbody>
                {filteredCategorias.map((categorias) => (
                  <tr>
                    <Link to={`/editarCategoria/${categorias.id}`}>
                      <img
                        src={Editar}
                        alt="Botão de editar"
                        className="w-6 mr-2 ml-8 pt-4"
                      />
                    </Link>
                    <Link to={`/deletarCategoria/${categorias.id}`}>
                      <img src={Deletar} alt="Botão de editar" className="w-6 mr-2 ml-8 pt-4" />
                    </Link>
                    <td className="py-3 px-4 border-b">{categorias.nome}</td>
                    <td className="py-3 px-4 border-b">
                      {categorias.descricao}
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>


          </div>

        </div>
      </div>

      {/* Mobile*/}
      <div className="fundoListaMobile mobilemin:hidden">
        <div className=''>
          <div className="flex justify-center p-8  text-white text-6xl font-bold">
            <h1> Categorias </h1>
            </div>
            <Link to="/cadastroCategoria">
              <button className="bg-[#82D338]  text-white px-3 py-2 ml-[27rem] mb-[-20px] rounded-full items-center text-sm font-normal">Cadastrar Categorias</button>
            </Link>
            <div className="flex flex-wrap">
          <div className="flex flex-wrap justify-center gap-4 mt-7 p-3">
            {filteredCategorias.map((categorias) => (
              <div className="w-[45vw] border-2 rounded-3xl h-[5vh] pt-3 mt-1 bg-white text-center ">
                <h1 className="py-3 flex items-center justify-center mr-[4rem]">{categorias.nome}</h1>
                  <div className="mt-[-24px] ml-[97px] flex items-center justify-center ">
                  <Link to={`/editarCategoria/${categorias.id}`}>
                    <img
                      src={Editar}
                      alt="Botão de editar"
                      className="w-6 flex ml-[3rem] "
                    />
                  </Link>
                  <Link to={`/deletarCategoria/${categorias.id}`}>
                      <img src={Deletar} alt="Botão de editar" className="w-6 mr-2 ml-1" />
                    </Link>
                  </div>
                  

                  
          

              </div>
            ))}
          </div>
          </div>
        </div>
      </div>

    </>


  );
}

export default ListaCategorias;