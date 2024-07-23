export function addCommas(number: string) {
  // Convert number to string if it's not already

  // Check if the number is negative
  let negative = false;
  if (number.startsWith("-")) {
    negative = true;
    number = number.substring(1); // Remove the negative sign
  }

  // Split the number into whole and decimal parts (if any)
  let parts = number.split(".");
  let wholePart = parts[0];
  let decimalPart = parts[1] || null;

  // Add commas to the whole part
  if (wholePart.length <= 3) {
    var formattedWholePart = wholePart;
  } else {
    var formattedWholePart = "";
    var numDigits = wholePart.length;
    for (var i = 0; i < numDigits; i++) {
      formattedWholePart += wholePart[i];
      if ((numDigits - i - 1) % 3 === 0 && i !== numDigits - 1) {
        formattedWholePart += ",";
      }
    }
  }

  // Combine the whole and decimal parts
  let formattedNumber = decimalPart ? formattedWholePart + "." + decimalPart : formattedWholePart;

  // Add back the negative sign if the number was negative
  if (negative) {
    formattedNumber = "-" + formattedNumber;
  }

  return formattedNumber;
}
