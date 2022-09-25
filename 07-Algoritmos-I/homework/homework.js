'use strict'
// No cambies los nombres de las funciones.

function factorear(num, iteration = 2, numArr = [1]) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  if(iteration > num) return numArr

  const numPrime = (numero, i = 2) => {
    if(i >= numero / 2) return true
    if(numero % i == 0) return false

    return numPrime(numero, i + 1)
  }

  if(numPrime(iteration) && num % iteration === 0) {
    numArr.push(iteration)
    num /= iteration
    return factorear(num, iteration, numArr)
  }

  return factorear(num, iteration + 1, numArr)
}


function bubbleSort(array, iteration = 0, lastIteration = true) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array[iteration + 1] < array[iteration]) {
    [array[iteration], array[iteration + 1]] = [array[iteration + 1], array[iteration]]
    lastIteration = false
  }
  if(!lastIteration && !array[iteration + 2]) return bubbleSort(array)
  return lastIteration && !array[iteration + 2] ?
  array :
  bubbleSort(array, iteration + 1, lastIteration)
}


function insertionSort(array, iteration = 0) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  if(array[iteration + 1] < array[iteration]) {
    [array[iteration], array[iteration + 1]] = [array[iteration + 1], array[iteration]]

    return insertionSort(array, iteration !== 0 ? iteration - 1 : iteration + 1) 
  }

  return !array[iteration + 2] ?
  array :
  insertionSort(array, iteration + 1)
}


function selectionSort(array, elementSelected = 1, iteration = 0) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  if(elementSelected >= array.length) {
    iteration += 1
    elementSelected = iteration + 1
  }

  if(iteration === array.length) return array

  if(array[iteration] > array[elementSelected])
  [array[iteration], array[elementSelected]] = [array[elementSelected], array[iteration]]

  return selectionSort(array, elementSelected + 1, iteration)
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};