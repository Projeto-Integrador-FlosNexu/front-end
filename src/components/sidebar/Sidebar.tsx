
import logoFlos from "../../assets/FlosNexu.png";
import FlosNexu from "../../assets/Logo_FlosNexu.png";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import "./Sidebar.css";
import { toastAlerta } from "../../util/toastAlerta";

function Sidebar() {
    const navigate = useNavigate();
    const { usuario, handleLogout } = useContext(AuthContext);

    const [isSidebarExtended, setIsSidebarExtended] = useState(false);

    function logout() {
        handleLogout();
        toastAlerta("Usuário deslogado com sucesso", 'sucesso');
        navigate("/login");
    }

    return (
        <>
            {usuario.token !== "" && (
                <div
                    className={` shadow-2xl sidebar fixed top-0 left-0 h-screen border rounded-lg border-azmedio ${isSidebarExtended ? "w-61 show" : "w-10"
                        } bg-azmedio text-claro`} >
                    <div className="flex flex-col h-full">
                        <button
                            className="navbar-toggle-button text-left flex justify-center "
                            onClick={() => setIsSidebarExtended(!isSidebarExtended)}>
                            {isSidebarExtended ? (
                                <span className="text-lg mx-9 my-5 "><img className="w-100 h-40" src={logoFlos} /></span>
                            ) : (
                                <img
                                    src={logoFlos}
                                    alt="Expandir Menu"
                                    className="h-6 w-6 my-2 mx-2" /> 
                            )}
                        </button>

                        <div
                            className={`flex-1 flex flex-col gap-4 overflow-y-auto p-4 border-claro ${isSidebarExtended ? "" : "hidden"
                                }`}>
                            <Link to="/home">
                                <img
                                    src={FlosNexu}
                                    alt="FlosNexu"
                                    className="rounded-lg flex items-center justify-center w-52 object-cover border-escuro "
                                />
                            </Link>
                            <Link to="/about" className="text-white  hover:underline rounded-md p-2"><img src=""/> 
                                Sobre
                            </Link>
                            <Link to="/produtos" className="text-white hover:underline rounded-md p-2">
                                Produtos
                            </Link>
                            <Link to="/categorias" className="text-white hover:underline rounded-md p-2">
                                Categorias
                            </Link>
                            <Link to="/perfil" className="text-white hover:underline  rounded-md p-2 ">
                                Perfil
                            </Link>
                            <Link to=""
                                onClick={logout}
                                className="text-white flex items-center font-bold justify-start h-16 hover:underline rounded-md mt-10 ml-2">
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