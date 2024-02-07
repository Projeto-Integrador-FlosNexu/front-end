import logo from "../../assets/logoFN.png";
import rightArrowIcon from "../../assets/logoFlosnexu.png";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import "./SideBar.css";
import { toastAlerta } from "../../util/toastAlerta";

function Sidebar() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);

  const [isSidebarExtended, setIsSidebarExtended] = useState(false);

  function logout() {
    handleLogout();
    toastAlerta("Usuário deslogado com sucesso",'sucesso');
    navigate("/login");
  }

  return (
    <>
      {usuario.token !== "" && (
        <div
          className={` shadow-2xl sidebar fixed top-0 left-0 h-screen border rounded-lg border-azmedio ${
            isSidebarExtended ? "w-61 show" : "w-10"
          } bg-azmedio text-claro`}
        >
          <div className="flex flex-col h-full">
            <button
              className="navbar-toggle-button text-left  "
              onClick={() => setIsSidebarExtended(!isSidebarExtended)}
            >
              {isSidebarExtended ? (
                <span className="text-lg mx-9 my-5  hover:underline"> Voltar</span>
              ) : (
                <img
                  src={rightArrowIcon}
                  alt="Expandir Menu"
                  className="h-6 w-6 my-2 mx-2"
                />
              )}
            </button>

            <div
              className={`flex-1 flex flex-col gap-4 overflow-y-auto p-4 border-t border-claro ${isSidebarExtended ? "" : "hidden"
                }`}
            >
              <Link to="/home">
                <img
                  src={logo}
                  alt="FlosNexu"
                  className="rounded-lg flex items-center justify-center h-10 w-full object-cover border-escuro "
                />
              </Link>
              <Link to="/about" className="hover:bg-medio rounded-md p-2">
                About
              </Link>
              <Link to="/produtos" className="hover:bg-medio rounded-md p-2">
                Produtos
              </Link>
              <Link to="/categorias" className="hover:bg-medio rounded-md p-2">
                Categorias
              </Link>
              <Link to="/perfil" className="hover:bg-medio rounded-md p-2">
                Perfil
              </Link>
              <Link to=""
                onClick={logout}
                className="flex items-center justify-start h-16 hover:bg-medio rounded-md ">
                Sair
              </Link>
            </div>


          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;