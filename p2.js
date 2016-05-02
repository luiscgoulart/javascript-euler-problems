function p2 () {
  var fibActual;
  var fibAnterior1;
  var fibAnterior2;

  var i = 0;

  var soma = 0;

  do {
    if (i === 0) {
      fibActual = 1;
    }
    else if (i === 1) {
      fibAnterior1 = fibActual;
      fibActual = 2;
    }
    else {
      fibAnterior2 = fibAnterior1;
      fibAnterior1 = fibActual;
      fibActual = fibAnterior1 + fibAnterior2;
    }

    if (fibActual % 2 == 0) {
      soma += fibActual;
    }

    i++;
  }
  while (fibActual < 4000000);

  return soma;
}
