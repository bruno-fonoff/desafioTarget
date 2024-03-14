function isFibonacci(numero) {
  let a = 0;
  let b = 1;

  for (let i = 0; a <= numero; i++) {
    if (a === numero) {
      console.log(numero + " é Fibonacci.");
      return true;
    }
    let soma = a + b;
    //console.log(a, b);
    a = b;
    b = soma;
  }
  console.log(numero + " não é Fibonacci.");
  return false;
}

isFibonacci(987);

isFibonacci(988);
