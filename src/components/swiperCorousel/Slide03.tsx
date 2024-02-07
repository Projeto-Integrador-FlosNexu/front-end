import { Link } from 'react-router-dom';
import './CarouselStyle.css';

function Slide03() {
    return (

        <div className="bg-image-slide03 swiper-slide flex justify-center">
  <div className='text-center items-center'>
    <div className="flex flex-col pt-72 justify-items-center items-center gambido-lipe">
      <h2 className='text-5xl items-center font-bold text-white'>
      Nossa forma de mudar o mundo.
      </h2>
     
      <div className="flex justify-around my-8">
      <button className='rounded shadow-sm shadow-white/40 bg-transparent border border-white/70 text-white hover:border-white/90 hover:text-white/90 py-2 px-4'>
        <Link to="/about" className=" font-bold rounded-md p-2">FLOSNEXU</Link>
          
        </button>
      </div>
    
    </div>
  </div>
</div>

    )
}

export default Slide03;