import { Post } from "../types";
import diariesData from "./diaries.json";

const diaries: Post[] = diariesData as Post[];

export const getEnties = (): Post[] => diaries;

export const addEntry = null;
