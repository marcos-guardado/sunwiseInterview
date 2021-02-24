//Starting at the top left corner of an N x M grid and facing towards the right, you keep walking one square at a time in the direction you are facing. If you reach the boundary of the grid or if the next square you are about to visit has already been visited, you turn right. You stop when all the squares in the grid have been visited. What direction will you be facing when you stop? For example: Consider the case with N = 3, M = 3. The path followed will be (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2) -> (2,1) -> (2,0) -> (1,0) -> (1,1). At this point, all squares have been visited, and you are facing right.

const walkInGrid = (T) => {
  let result = [];

  for (let _cases = 0; _cases < T.length; _cases++) {
    //Make the grid
    let [N, M] = T[_cases];
    let gridSize = M * N;

    //Starts in right direction
    let R = true;
    let D = false;
    let L = false;
    let U = false;

    //Storage the positions that has been visited
    let positionsVisited = [];

    let row = 0;
    let col = 0;

    let pos = 0;
    let direction = "R";

    while (pos != gridSize) {
      while (R && pos < gridSize) {
        if (positionsVisited.includes(`[${row},${col - 1}]`)) {
          R = false;
          D = true;

          row++;
        } else {
          positionsVisited.push(`[${row},${col}]`);

          if (col == N - 1) {
            R = false;
            row++;
            if (pos - 1 != gridSize) {
              D = true;
            }
          } else {
            col++;
          }
        }
        direction = "R";
        pos++;
      }

      while (D && pos < gridSize) {
        if (positionsVisited.includes(`[${row - 1},${col}]`)) {
          D = false;
          L = true;

          col++;
        } else {
          positionsVisited.push(`[${row},${col}]`);

          if (row == M - 1) {
            D = false;
            col++;
            if (pos - 1 != gridSize) {
              L = true;
            }
          } else {
            row++;
          }
        }
        direction = "D";
        pos++;
      }

      while (L && pos < gridSize) {
        if (positionsVisited.includes(`[${row},${col - 1}]`)) {
          L = false;
          U = true;

          row--;
        } else {
          positionsVisited.push(`[${row},${col}]`);

          if (col == M - 1) {
            L = false;
            col++;
            if (pos - 1 != gridSize) {
              U = true;
            }
          } else {
            col--;
          }
        }
        direction = "L";
        pos++;
      }

      while (U && pos < gridSize) {
        if (positionsVisited.includes(`[${row - 1},${col}]`)) {
          U = false;
          R = true;

          col++;
        } else {
          positionsVisited.push(`[${row},${col}]`);

          if (row == 0) {
            U = false;
            col++;
            if (pos - 1 != gridSize) {
              R = true;
            }
          } else {
            row--;
          }
        }
        direction = "U";
        pos++;
      }
    }

    console.log([N, M], direction);
    result.push(direction);
  }
  return result;
};

walkInGrid([
  [1, 1],
  [2, 2],
  [3, 1],
  [3, 3],
]);

// The only input line contains the descriptions of the years A and B, separated by the "-" sign. A description of a year consists of one to four decimal digits (the number of the year), followed by either "AD" (Anno Domini, the current era) or "BC" (Before Christ, before the current era). In both directions the years are numbered starting from 1. It is known that (753BC) <= A <= B <= (2012AD).
// Especificación de salida

// The output should consist of a single integer, the minimal number of characters that have to be reserved in the database for the year number.
// Ejemplo de entrada

// 1BC-1AD
// Ejemplo de salida

// 7
// Hint(s)

// For input:

// 753BC-747BC

// Output must be:

// 3

// For input:

// 2000AD-2012AD

// Output must be:

// 10

const getCharacters = (range) => {
  //separate the range
  const [A, B] = range.split("-");
  //obtaining the era
  let A_eras = A.split("").slice(-2);
  let B_eras = B.split("").slice(-2);

  let A_Era = "";
  let B_Era = "";

  for (let i = 0; i < A_eras.length; i++) {
    A_Era += `${A_eras[i]}`;
  }
  for (let i = 0; i < B_eras.length; i++) {
    B_Era += `${B_eras[i]}`;
  }

  //Parsing the string into int
  let A_numbers = A.split("").slice(0, -2);
  let B_numbers = B.split("").slice(0, -2);

  let A_number = "";
  let B_number = "";

  for (let i = 0; i < A_numbers.length; i++) {
    A_number += `${A_numbers[i]}`;
  }
  for (let i = 0; i < B_numbers.length; i++) {
    B_number += `${B_numbers[i]}`;
  }

  //variables with base information about the exersice
  const BC = 753;
  const AD = 2012;
  let result = 0;

  let BC_positions = [];
  let AD_positions = [];

  let numberToConvert = 0;

  if (
    (A_Era === "BC" && B_Era === "BC") ||
    (A_Era === "AD" && B_Era === "AD")
  ) {
    if (A_Era === "BC" && B_Era === "BC") {
      for (let i = 0; i <= BC; i++) {
        BC_positions.push(i);
      }
      numberToConvert = BC_positions[A_number] - BC_positions[B_number - 1];
      result = numberToRoman(numberToConvert);
      console.log(
        `The age is ${numberToConvert}, the number in Roman System is ${result} and this number has ${result.length} characters to storage in database \n`
      );
    }
    if (A_Era === "AD" && B_Era === "AD") {
      for (let i = 0; i < AC; i++) {
        AD_positions.push(i);
      }
      numberToConvert =
        AD_positions[parseInt(A_number)] - AD_positions[parseInt(B_number)];
      result = numberToRoman(numberToConvert);
      console.log(
        `The age is ${numberToConvert}, the number in Roman System is ${result} and this number has ${result.length} characters to storage in database \n`
      );
    }
  } else {
    for (let i = BC; i >= 1; i--) {
      BC_positions.push(i);
    }
    for (let i = 0; i < AD; i++) {
      AD_positions.push(i);
    }
    numberToConvert = BC_positions[A_number] + AD_positions[B_number];

    result = numberToRoman(numberToConvert);
    console.log(
      `The age is ${numberToConvert}, the number in Roman System is ${result} and this number has ${result.length} characters to storage in database \n`
    );
  }
};

const numberToRoman = (number) => {
  let lookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let roman = "";
  let i;
  for (i in lookup) {
    while (number >= lookup[i]) {
      roman += i;
      number -= lookup[i];
    }
  }
  return roman;
};

getCharacters("753BC-747BC");
getCharacters("1BC-1AD");

console.log(
  "The last case is wrong because the biggest number that you can write in Roman System is  MMMCMXCIX and has 9 characters \n"
);
