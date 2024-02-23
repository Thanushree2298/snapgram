import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { date } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);



export const checkIsLiked = (likeList: string[], userId: string) => {
  return likeList.includes(userId);
};
