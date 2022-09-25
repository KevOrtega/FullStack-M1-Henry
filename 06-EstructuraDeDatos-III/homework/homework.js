"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El árbol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value
  this.right = null
  this.left = null
}

BinarySearchTree.prototype.size = function() {
  let counter = 1

  if(this.left) counter += this.left.size()
  if(this.right) counter += this.right.size()

  return counter
}

BinarySearchTree.prototype.insert = function(value) {
  if(value > this.value) {
    !this.right ?
    this.right = new BinarySearchTree(value) :
    this.right.insert(value)
  }
  if(value < this.value) {
    !this.left ?
    this.left = new BinarySearchTree(value) :
    this.left.insert(value)
  }
}

BinarySearchTree.prototype.contains = function(value) {
  if(value === this.value) return true

  if(value > this.value && this.right) return this.right.contains(value)
  if(value < this.value && this.left) return this.left.contains(value)

  return false
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, search = "in-order") {
  const algorithms = {
    "pre-order": () => {
      cb(this.value)
      if(this.left) this.left.depthFirstForEach(cb, search)
      if(this.right) this.right.depthFirstForEach(cb, search)
    },
    "post-order": () => {
      if(this.left) this.left.depthFirstForEach(cb, search)
      if(this.right) this.right.depthFirstForEach(cb, search)
      cb(this.value)
    },
    "in-order": () => {
      if(this.left) this.left.depthFirstForEach(cb, search)
      cb(this.value)
      if(this.right) this.right.depthFirstForEach(cb, search)
    }
  }

  algorithms[search]()
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb) {
  const searchArr = [this]
  
  for(let i = 0; i < searchArr.length; i++) {
    if(searchArr[i].left && !searchArr.includes(searchArr[i].left)) searchArr.push(searchArr[i].left)
    if(searchArr[i].right && !searchArr.includes(searchArr[i].right)) searchArr.push(searchArr[i].right)
    cb(searchArr[i].value)
    console.log(searchArr[i].value)
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
