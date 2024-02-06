import { Link } from 'react-router-dom';
import './CarouselStyle.css';

function Slide02() {
    return (

        <div className="bg-image-slide02
                swiper-slide
                flex 
                justify-center
                
                ">
            
            <div className='
                    container 
                    grid 
                    grid-cols-2 
                    text-white
                    gambido-lipe
                    '>
                <div className="
                        flex 
                        flex-col 
                        gap-4 
                        items-center 
                        justify-center 
                        py-4
                        ">
                    <h2 className='
                            text-5xl 
                            font-bold
                            text-white/80
                            '>
                        Seja bem vindos!
                    </h2>
                    <p className='text-xl text-white/80'  >
                        Aqui você encontra os melhores:!
                        </p>

                    <div className="flex justify-around gap-4">
                        <button className='
                                    rounded
                                    bg-transparent
                                    border
                                    border-white/50
                                    text-white/50

                                    hover:border-white/80
                                    hover:text-white/80
                                    py-2 
                                    px-4
                                    '>
                            Conheça mais
                        </button>
                    </div>
                    <div className="flex justify-around gap-4">
                    <Link to='/login' className='rounded
                                    bg-transparent
                                    border
                                    border-white/50
                                    text-white/50

                                    hover:border-white/80
                                    hover:text-white/80
                                    py-2 px-2 '>Entrar <br /> temporario</Link>
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default Slide02