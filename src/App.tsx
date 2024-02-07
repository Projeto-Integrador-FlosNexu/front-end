import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import About from "./pages/about/About";
import Cadastro from "./pages/cadastro/Cadastro";
import ListaCategorias from "./components/categorias/listaCategorias/ListaCategorias";
import FormularioCategoria from "./components/categorias/formularioCategorias/FormularioCategoria";
import DeletarCategoria from "./components/categorias/deletarCategorias/DeletarCategoria";
import ListaProdutos from "./components/produtos/listaProdutos/ListaProdutos";
import FormularioProduto from "./components/produtos/formularioProdutos/FormularioProduto";
import DeletarProduto from "./components/produtos/deletarProdutos/DeletarProduto";
import Footer from "./components/footer/Footer";
import Perfil from "./pages/perfil/Perfil";
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Sidebar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/cadastroUsuario" element={<Cadastro />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
              <Route path="/produtos" element={<ListaProdutos />} />
              <Route path="/cadastroProduto" element={<FormularioProduto />} />
              <Route path="/editarProduto/:id" element={<FormularioProduto />} />
              <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;