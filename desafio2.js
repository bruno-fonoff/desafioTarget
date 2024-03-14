function isFibonacci(numero) {
  let a = 0;
  let b = 1;

  while (a <= numero) {
    if (a === numero) {
      return true;
    }
    let temp = a + b;
    a = b;
    b = temp;
  }

  return false;
}
//EXEC:
const numero = 21;
if (isFibonacci(numero)) {
  console.log(numero + " é Fibonacci.");
} else {
  console.log(numero + " não é Fibonacci.");
}
