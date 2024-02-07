import './CarouselStyle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import Slide02 from './Slide02';



function Carousel() {
    return (
        <div className=' container-slider shadow-lg '>
            
            <Swiper
                slidesPerView={1}
                effect=""
                loop={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: true,
                }}
                pagination={{ clickable: true, }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className='mySwiper'
            >
                {/* {carouselData.map((item) => ( */}
                <SwiperSlide>
                    <Slide02 />
                </SwiperSlide>
                    
                    {/* <SwiperSlide>
                        
                    <Link to='/produtos' className='hover:underline'>
                        <img
                            src='https://www.portalsolar.com.br/_next/image?url=%2Fassets%2Fsimulator%2Fenergia-solar-residencial-portal-solar.webp&w=2048&q=75'
                            alt="Slider"
                            className='slide-item'
                        />
                    </Link>
                    </SwiperSlide> */}
                    <SwiperSlide>
                    <Link to='/produtos' className='hover:underline'>
                        <img
                            src='https://cdn.motor1.com/images/mgl/Vz8EEz/s1/renault-zoe---um-mes-dirigindo-um-carro-eletrico-4.webp'
                            alt="Slider"
                            className='slide-item'
                        />
                    </Link>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                    <Link to='/produtos' className='hover:underline'>
                        <img
                            src='https://bluesol.com.br/wp-content/uploads/2016/08/banner-curso-01.jpg'
                            alt="Slider"
                            className='slide-item'
                        />
                    </Link>    
                    </SwiperSlide>

                    <SwiperSlide>
                    <Link to='/produtos' className='hover:underline'>
                        <img
                            src='https://bluesol.com.br/wp-content/uploads/2016/08/banner-curso-05.jpg'
                            alt="Slider"
                            className='slide-item'
                        />
                    </Link>    
                    </SwiperSlide>
                {/* ))} */}
            </Swiper>
            
        </div>
    );
}

export default Carousel; 