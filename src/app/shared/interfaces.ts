export interface IEditora {
  id: number;
  nome: string;
}

export interface IGenero {
  id: number;
  nome: string;
}

export interface ILivro {
  id: number;
  titulo: string;
  ano: number;
  paginas: number;
  isbn: string;
  genero: IGenero;
  editora: IEditora;
}

export interface Predicate<T> {
    (item: T): boolean
}