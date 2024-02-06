import React from 'react';
import './Home.css';

import Carousel from '../../components/swiperCorousel/CarouselContainer';
// import ListaCategorias from '../../components/categorias/listaCategorias/ListaCategorias';
import ListaProdutos from '../../components/produtos/listaProdutos/ListaProdutos';


function Home() {
    return (
        <>
          {Carousel()}
        
        {/* Lembrar de adicionar a função lista produtos   */}

       
        <ListaProdutos/>
        
      </>
      
    );
}

export default Home;