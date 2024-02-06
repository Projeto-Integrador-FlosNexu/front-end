import React from 'react';
import './Home.css';
import Carousel from '../../components/swiperCorousel/CarouselContainer';
import Slide01 from '../../components/swiperCorousel/Slide01';

function Home() {
    return (
        <>
          
          {Carousel()}
          <Slide01 />
        {/* Lembrar de adicionar a função lista produtos          */}
      </>
      
    );
}

export default Home;
