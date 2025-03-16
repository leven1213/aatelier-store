import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Convert prisma object to a regular JS object
// TypeScript generic 'T' is a placeholder for any type
// that the function might accept – could be a string,
// object, or Prisma model.
// value: T - Specifying the type of parameter
// : T - Should be the same type
export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}  

// Format number with decimal places
// takes in num that has a type of number, which will return a string
export function formatNumberWithDecimal(num:number):string {
  const [int, decimal] = num.toString().split('.');
  return decimal ? `${int}.${decimal.padEnd(2, '0')}` : `${int}.00`;
}