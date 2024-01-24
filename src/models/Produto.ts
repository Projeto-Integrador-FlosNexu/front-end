import Categoria from './Categoria';
import Usuario from './Usuario';

export default interface Postagem {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  foto: string;
  marca: string;
  quantidade: number;
  categoria: Categoria | null;
  usuario: Usuario | null;
}