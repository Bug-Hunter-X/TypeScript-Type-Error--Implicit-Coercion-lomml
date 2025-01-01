function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: Both arguments must be numbers');
  }
  return a + b;
}

let result1 = addSafe(10, 5); // Correct usage
let result2; 
try {
  result2 = addSafe("hello", 5); //Throws error at runtime
} catch (e) {
  console.error(e);
}

let result3 = add(10, 5); // Correct usage, but no runtime error check