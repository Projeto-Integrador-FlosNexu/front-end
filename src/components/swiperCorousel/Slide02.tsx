import { Link } from 'react-router-dom';
import './CarouselStyle.css';

function Slide02() {
    return (

        <div className="bg-image-slide02 swiper-slide flex justify-center">
  <div className='text-center items-center'>
    <div className="flex flex-col pt-72 justify-items-center items-center gambido-lipe">
      <h2 className='text-5xl items-center font-bold text-white/80'>
        Mude o mundo, comece por você!
      </h2>
      <p className='text-2xl  my-1 text-white/80'>
        Soluções energéticas para sua casa e sua empresa.
      </p>
      <div className="flex justify-around my-8">
        <button className='rounded shadow-sm shadow-white/40 bg-transparent border border-white/70 text-white/70 hover:border-white/90 hover:text-white/90 py-2 px-4'>
          Sobre Nos
        </button>
      </div>
      {/* <div className="flex justify-around gap-4">
        <Link to='/login' className='rounded bg-transparent border border-white/50 text-white/50 hover:border-white/80 hover:text-white/80 py-2 px-2'>
          Entrar <br /> temporário
        </Link>
      </div> */}
    </div>
  </div>
</div>

    )
}

export default Slide02