//Crea una función que reciba un número y devuelva un string con formato ordinal inglés. Esto es:
//acaba en 1 --> 301st

//acaba en 2 --> 302nd

//acaba en 3 --> 303rd

//cualquier otra cosa --> 300th

function englishNumber(n) {
  let number = 1;
  let result = '';
  for (const number of result) {

  }
  lastIndexOf('');
}




//Vamos a emular una "posible" pandemia. El mundo se representará como un string como el siguiente: 01000000X000X011X0X Donde los valores representan lo siguiente:
//'0': no contagiado
//'1': contagiado
//'X': océano
//Tenemos que calcular el porcentaje de personas contagiadas en el mundo. Para ello tenemos que tener en cuenta lo siguiente:

//El virus no se puede propagar por el océano.
//Si una persona se contagia en un continente todas las personas se contagian en ese continente.
//Los continentes no están conectados por los extremos
//Casos de prueba:

//Input: '01000000X000X011X0X' Output: ~73.33333

//Input: '01X000X010X011XX' Output: ~72.72727272727273

//Input: 'XXXXX' Output: 0

//Input: '0000000010' Output: 100

//Input: 'X00X000000X10X0100' Output: ~42.857142857142854