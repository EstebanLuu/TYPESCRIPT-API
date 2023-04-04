export type Category =
  | "Politica"
  | "Entretenimiento"
  | "Educacion"
  | "Finanzas";

export interface Post {
  id: number;
  title: string;
  subtitle: string;
  text: string;
  img: string;
  category: Category;
}

// ´POST DEL JSON

export type newDiaryEntry = omit<Post, "id">;

// MODELO PARA AÑADIR UN NUEVO POST 
