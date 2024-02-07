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
                    <div className="user-name">{name}</div>
                    <div className="user-role">{role}</div>
                </div>
                <div>
                    <div>
                        <div className="description">
                            <span>Status:</span>
                            <span className="description-value">  Cursando</span>
                        </div>
                        <div className="description">
                            <span>Turma:</span>
                            <span className="description-value">  #0069</span>
                        </div>
                    </div>
                </div>
                <div className="user-socials">
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