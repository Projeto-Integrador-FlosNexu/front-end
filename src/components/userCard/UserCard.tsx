import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import UserInfo from '../../models/UserInfo';
import './UserCard.css';

function UserCard({ name, role, linkedin, github,image }: UserInfo) {
  return (
    <>
    <div className="card-container">
            <img src={image} className="user-picture"></img>
            <div className="user-details">
                <div>
                    <div className="user-name text-center">{name}</div>
                    <div className="user-role text-center">{role}</div>
                </div>
                <div>
                    <div className='text-center '>
                        <div className="description  ">
                            <span>Formação: Sistemas de Informação</span>
                            <span className="description-value"></span>
                        </div>

                        <div className="description  ">
                            <span >Turma:</span>
                            <span className="description-value "> 69</span>
                        </div>
                    </div>
                </div>
                <div className="user-socials items-center">
                    <a className="social-info" href={linkedin} target="_blank">
                        <LinkedinLogo size={30} />
                    </a>
                    <a className="social-info" href={github} target="_blank">
                        <GithubLogo size={30} />
                    </a>
                </div>
            </div>
        </div>
      </>
  )
}

export default UserCard