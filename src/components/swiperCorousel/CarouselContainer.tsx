import './CarouselStyle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import Slide02 from './Slide02';
import Slide04 from './Slide04';
import Slide03 from './Slide03';
import Slide01 from './Slide01';



function Carousel() {
    return (
        <div className=' container-slider shadow-lg'>
            
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
                    <Slide01 />
                </SwiperSlide>
                
                <SwiperSlide>
                    <Slide02 />
                </SwiperSlide>
                    
                    
                    <SwiperSlide>
                    <Slide03 />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                    <Slide04 />
                    </SwiperSlide>

                    
                {/* ))} */}
            </Swiper>
            
        </div>
    );
}

export default Carousel; 