import type Categoria from "./Categoria";

export default interface Postagem {
  id: number;
  nome: string;
  detalhes: string;
  preco: string;
  foto: string;
  categoria: Categoria | null;
}
