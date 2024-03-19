import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}




const baseURL =import.meta.env.VITE_APP_MOCK_API_URL as string;
export async function fetchData<T>(url: string,
): Promise<T> {

  const response = await fetch(baseURL + url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data as T;
}