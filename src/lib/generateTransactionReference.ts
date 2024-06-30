export function generateTransactionReference(): string {
  const constantPrefix = "FH"; // Constant part of the string
  const uniqueSuffix = generateUniqueSuffix(); // Generate a unique suffix (e.g., timestamp or random number)
  return `${constantPrefix}/${uniqueSuffix}`;
}

function generateUniqueSuffix(): string {
  // Generate a timestamp or random number to use as the suffix
  // Example: Using current timestamp
  const timestamp = Date.now().toString();
  return `UUS${timestamp}`;
}
