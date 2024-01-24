import React from 'react';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import About from './pages/about/About';
import UserProvider from './contexts/UserContext';
import Cadastro from './pages/cadastro/Cadastro';

function App() {
  return (
    <>
    <UserProvider>
    <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </UserProvider>
    </>
);
}
export default App;
//  <Route path="/login" element={<Login />} /> -> COLOCAR ENTRE AS ROTAS DE HOME