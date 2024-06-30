import { capitalizeFirstLetter } from "./capitalize";

// Function to split a string into words, capitalize each word, and join them back
export function capitalizeWords(str: string) {
  // Split the string into words
  let words = str.split(" ");

  // Capitalize each word using the capitalizeFirstLetter function
  let capitalizedWords = words.map((word) => capitalizeFirstLetter(word));

  // Join the capitalized words back into a single string
  let result = capitalizedWords.join(" ");

  return result;
}
