import { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import Categoria from '../../../models/Categoria';
import { buscar } from '../../../services/Service';
import CardCategorias from '../cardCategorias/CardCategorias';
import { AuthContext } from '../../../contexts/AuthContext';
import { Link, useNavigate } from "react-router-dom";
import { toastAlerta } from "../../../util/toastAlerta.ts";
import Editar from '../../../assets/Editar.png';



function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const { usuario } = useContext(AuthContext);
  const token = usuario.token;
  const filteredProducts =
    ListaCategorias.length > 0 ? ListaCategorias : categorias;


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
  return (
    <>
       {categorias.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      {/* Container */}
      <div className="py-10 px-20 mobilemax:hidden">
        <div className="bg-white rounded-t-lg p-5">
          <div className="flex mt-3 p-5 text-[#5C5C5C] text-3xl font-bold items-center justify-between">
            <h1>Categorias</h1>

            {/* Botão "Add categoria" */}
            <Link to="/categoria/novo">
              <button className="bg-[#48ACB6] text-white px-6 py-2 rounded-full text-sm font-normal">
                Add Categoria
              </button>
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-md overflow-hidden">
              <thead className="bg-[#48ACB6] text-white">
                <tr>
                  <th className="py-4 px-4 border-b"> </th>
                  <th className="py-4 px-4 border-b">Categoria</th>
                  <th className="py-4 px-4 border-b">Descrição</th>
                  <th className="py-4 px-4 border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((categorias) => (
                  <tr>
                    <Link to={`/editarCategoria/${categoria.id}`}>
                      <img
                        src={Editar}
                        alt="Botão de editar"
                        className="w-6 mr-2 ml-8 pt-4"
                      />
                    </Link>
                    <td className="py-3 px-4 border-b">{categoria.nome}</td>
                    <td className="py-3 px-4 border-b">
                      {categoria.descricao}
                    </td>
                    <td
                      className={`py-2 px-4 border-b ${getStatusClass(
                        categoria.disponivel
                      )}`}
                    >
                      {categoria.disponivel ? "Disponível" : "Indisponível"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

        {/* Mobile*/}
          <div className="mobilemin:hidden">
          <div className="flex justify-center items-center mt-5"><h1 className="py-2 px-4 border-b text-3xl font-bold"> Categorias </h1><Link to="/categoria/novo">
                <button className="bg-[#48ACB6]  text-white px-3 py-1 rounded-full items-center text-sm font-normal">Add Categorias</button>
              </Link></div>
            <div className="flex flex-wrap mt-[10%] justify-center gap-5 ">
            {filteredProducts.map((categoria) => (
                    <div className="w-[45vw] border-2 rounded-3xl h-[35vh] pt-3 mt-1 bg-white text-center ">
                    <h1 className="py-3 px-4  flex items-center justify-center ">{categoria.nome}
                    <Link to={`/editarCategoria/${categoria.id}`}>
                      <img
                        src={Editar}
                        alt="Botão de editar"
                        className="w-6 flex ml-[20%]"
                      />
                    </Link></h1>
                    <h1 className="py-3 px-4 ">
                      {categoria.descricao}
                    </h1>
                    <h1
                      className={`py-2 px-4 ${getStatusClass(
                        categoria.disponivel
                      )}`}
                    >
                      {categoria.disponivel ? "Disponível" : "Indisponível"}
                    </h1>
                    </div>
                ))}
            </div>

          </div>

    </>
   

  );
}

export default ListaCategorias;