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

export type newDiaryEntry = omit<Post, "id">;
