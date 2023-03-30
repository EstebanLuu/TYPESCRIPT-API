import { newDiaryEntry, Post } from "../types";
import diariesData from "./diaries.json";

const diaries: Post[] = diariesData as Post[];

export const getEnties = (): Post[] => diaries;

export const findById = (id: number): Post | undefined => {
  const entry = diaries.find((d) => d.id === id);
  return entry;
};

export const addDiary = (newDiaryEntry: newDiaryEntry): Post => {
  const newEntry = {
    id: diaries.length + 1,
    ...newDiaryEntry,
  };
  diaries.push(newEntry);
  return newEntry;
};
