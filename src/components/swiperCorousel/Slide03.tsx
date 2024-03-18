import { Link } from 'react-router-dom';
import './CarouselStyle.css';

function Slide03() {
    return (

        <div className="bg-image-slide03 swiper-slide flex justify-center">
  <div className='text-center items-center'>
    <div className="flex flex-col pt-72 justify-items-center items-center gambido-lipe">
      <h2 className='text-7xl items-center font-bold text-white mt-40'>
      Nossa forma de mudar o mundo.
      </h2>
     
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

export default Slide03;