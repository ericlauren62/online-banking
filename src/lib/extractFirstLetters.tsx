// Function to extract first letters of each word
export function extractFirstLetters(str: string) {
  // Split the string into words
  let words = str.split(" ");

  // Extract the first letter of each word or first and second characters if length is 1
  if (words.length === 1) {
    return words[0].charAt(0).toUpperCase() + words[0].charAt(1).toUpperCase();
  }

  return words[0].charAt(0).toUpperCase() + words[1].charAt(0).toUpperCase();

  // Join the first letters into a single string
}
