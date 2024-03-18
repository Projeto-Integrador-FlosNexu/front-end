import { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Produto from '../../../models/Produto';
import { buscar } from '../../../services/Service';
import CardProduto from '../cardProdutos/CardProdutos';
import CardProdutoUsuario from "../cardProdutoUsuario/CardProdutoUsuario";


function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [search, setSearch] = useState("");
  let navigate = useNavigate();

  const [selected, setSelected] = useState<{nome: string; checked: boolean }[]>([]);
  const { usuario, handleLogout } = useContext(AuthContext);
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
        alert("Erro ao buscar o Produtos");
      }
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

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

const filteredprodutos =
  filtrarProdutos.length > 0 ? filtrarProdutos : produtos;

  return (
    <>
     <div className='fundoCadastroCateg'>
      {produtos.length == 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className='container -mt-12 grid lg:grid-cols-8'>
      {usuario.tipo === "adm"
              ? filteredprodutos.map((produto) => (
                  <CardProduto key={produto.id} post={produto} />
                ))
              : filteredprodutos.map((produto) => (
                  <CardProdutoUsuario key={produto.id} produto={produto} />
                ))}
          </div>
        </div>
    </>
  );
}

export default ListaProdutos;