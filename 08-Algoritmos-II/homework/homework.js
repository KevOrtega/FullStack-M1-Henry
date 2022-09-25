'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length > 1) {
    const random = Math.floor(Math.random() * array.length)
    const equals = []
    const left = []
    const right = []

    for(let i = 0; i < array.length; i++) {
      if(array[i] === array[random]) equals.push(array[i])
      if(array[i] !== array[random]) {
        array[i] < array[random] ?
        left.push(array[i]) :
        right.push(array[i])
      }
    }

    return quickSort(left).concat(equals, quickSort(right))
  }

  return array
}

function mergeSort(array) {
  if(array.length < 2) return array

  console.log('anashe')
  const centerIndex = Math.floor(array.length / 2)
  const left = mergeSort(array.slice(0, centerIndex))
  const right = mergeSort(array.slice(centerIndex))

  array = []

  while(left.length > 0 && right.length > 0) {
    left[0] < right[0] ?
    array.push(left.shift()) :
    array.push(right.shift())
  }

  array = array.concat(left, right)

  return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
