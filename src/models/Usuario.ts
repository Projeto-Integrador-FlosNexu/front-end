import Produto  from "./Produto";

export default interface Usuario {
  id: number;
  nome: string;
  foto: string;
  tipo: string;
  email:string;
  senha: string;
  produto?: Produto | null;
}