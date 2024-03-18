import { Link } from 'react-router-dom';
import './CarouselStyle.css';

function Slide01() {
    return (

        <div className="bg-image-slide01 swiper-slide flex justify-center">
  <div className='text-center items-center'>
    <div className="flex flex-col pt-72 justify-items-center items-center gambido-lipe">
    <h2 className='text-7xl items-center font-bold text-white mt-40'>
        Mude o mundo, comece por você!
      </h2>
      <p className='text-4xl  my-1 text-white'>
        Soluções energéticas para sua casa e sua empresa.
      </p>
      <div className="flex justify-around my-8">
      <button className='botaoslide rounded shadow-sm text-white hover:text-white/90 py-2 px-4'>
        <Link to="/about" className=" font-bold rounded-md p-2">FLOSNEXU</Link>
          
        </button>
      </div>
      
    </div>
  </div>
</div>

    )
}

export default Slide01