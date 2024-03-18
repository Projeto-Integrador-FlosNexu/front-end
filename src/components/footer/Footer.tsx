import { GithubLogo } from '@phosphor-icons/react'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useLocation } from 'react-router-dom';
import './Footer.css'

function Footer() {
  const { usuario } = useContext(AuthContext);

  let footerComponent;
  const location = useLocation()
  if (location.pathname.includes('/login') || location.pathname.includes('/cadastro')) {
    footerComponent

  } else {
    if
      (usuario.token == '') {
      footerComponent = (
        <>
        <div className='fundofooter'>
          <div className="flex justify-center mb-4 bg-[#1C1C1C] text-[#82D338]">
            <div className="container flex flex-col items-center mt-8 ">
              <p className='text-xl font-bold'>FlosNexu | Copyright: </p>
              <p className='text-lg'>Acesse nossas redes sociais</p>
              <div className='flex gap-2'>
                <a className='mb-4' href="https://github.com/FlosNexu" target="_blank" ><GithubLogo size={48} /></a>
              </div>
            </div>
          </div>
          </div>
        </>
      );
      }else{
        footerComponent = (
          <>
          <div className='fundofooter'>
            <div className="flex justify-center bg-[#1C1C1C] text-[#82D338]">
              <div className="container flex flex-col items-center mt-8 ">
                <p className='text-xl font-bold'>FlosNexu | Copyright: </p>
               
                <div className='flex gap-2 '>
                  <a className='mb-4' href="https://github.com/FlosNexu" target="_blank" ><GithubLogo size={48} /></a>
                </div>
              </div>
            </div>
            </div>
          </>
        );
      }

      return (
        <>
          {footerComponent}
        </>
      );
    }
  }

export default Footer;