// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:

  const nombre = [10,10,16,12]
  return (array[0]);
  
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  const nombre = [1,2,3,4,5,6,7,8,9,10]
  return array[array.length - 1]
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
const nombre = [1,2,3,4]
return array.length
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  const array2 = [];
  for(var i = 0; i < array.length; i++) 
  array2[i] = array[i] + 1;
  return array2
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
 return array

}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array

}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join (" ") 
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
    for (var i = 0; i < array.length; i++ )
    if (array [i] === elemento)
    {return true}
    return false }
 

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let sumarnumeros = 0
  for (var i = 0 ; i < numeros.length ;i++){
  sumarnumeros = sumarnumeros + numeros [i]}
  return sumarnumeros;
 
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let promedio = 0
  for (var i = 0 ; i < numeros.length ; i++)
  {promedio = promedio + resultadosTest[i] }
  return (promedio / resultadosTest.length);
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let masgrande = 0
  for (var i = 0 ; i < numeros.length ; i++){
    if (numeros [i] > masgrande)
    {masgrande = numeros [i]}
    return masgrande
  }

}

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí:
  let elementos = 0
  for (var i = 0 ; i < arreglo.length ; i++){
  if (arreglo [i] > 19)
   elementos += 1}
return elementos;
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí:
  if (numeroDeDia === 1 || numeroDeDia === 7 ){
  return "Es fin de semana"}
  else if (numeroDeDia > 1 && numeroDeDia < 7 ){
  return "Es dia Laboral"}
}


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let numeroSting = n.toString()
  if (numeroSting [0] === "9")
  return true;
  else{return false}
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí:
    for (var i = 0 ; i < arreglo.length ; i++ )
    if (arreglo[i] !== arreglo[i+1] )
    return false
    else return true
  } 

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let arrayMeses = [];
  
  for ( var i = 0 ; i < array.length ; i++)
   if (array[i] === "Enero" || array[i] === "Marzo" ||array[i] === "Noviembre")
   arrayMeses.push (arrayMeses[i])
   if ( arrayMeses.length ===3)
    {return arrayMeses;}

    else {return "No se encontraron los meses pedidos"}
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
let arrayNuevo = []
for (var i = 0 ; i < array.length ; i++)  
if ( array[i] >= 101)
   arrayNuevo.push(array[i]);
  return arrayNuevo



}

// No modificar nada debajo de esta línea, de lo contrario no correrán los test.
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
};
