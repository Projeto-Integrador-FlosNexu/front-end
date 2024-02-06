import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbarteste';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import About from './pages/about/About';
import Cadastro from './pages/cadastro/Cadastro';
import { AuthProvider } from './contexts/AuthContext';
import FormularioCategoria from './components/categorias/formularioCategorias/FormularioCategoria';
import DeletarCategoria from './components/categorias/deletarCategorias/DeletarCategoria';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';
import ListaProdutos from './components/produtos/listaProdutos/ListaProdutos';
import FormularioProduto from './components/produtos/formularioProdutos/FormularioProduto';
import DeletarProduto from './components/produtos/deletarProdutos/DeletarProduto';

function App() {
  return (
    <>
        <AuthProvider>
        <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
              <Route path="/produtos" element={<ListaProdutos />} />
              <Route path="/cadastroProduto" element={<FormularioProduto />} />
              <Route path="/editarProduto/:id" element={<FormularioProduto />} />
              <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
              
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
);
}
export default App;
//  <Route path="/login" element={<Login />} /> -> COLOCAR ENTRE AS ROTAS DE HOME