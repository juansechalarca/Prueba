//#17 División de dos números

const division = (n1, n2) => {
  return n1 / n2;
};

console.log("División ", division(10, 5));

//#18 Cambio de base
function convertirBase(num, base, baseCambio) {
  let numBase10 = 0;
  const numReve = num.toString().split("").reverse();
  // Convertir número en base x a base 10
  numReve.forEach((num, i) => {
    numBase10 += num * Math.pow(base, i);
  });

  numBase10;

  let modulo;
  let division = numBase10;
  const modulos = [];
  //Convertir númbero en base 10 a base a cambiar
  do {
    modulo = division % baseCambio;
    division = Math.floor(division / baseCambio);
    modulos.unshift(modulo);
  } while (baseCambio <= division);

  return `${division}${modulos.join("")}`;
}

console.log("conversión de base", convertirBase(253, 6, 4));

//------------------------------------------------------------------------------------------------------------------------------------------------------

console.log("Árbol de nodos");
class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);
  }
}

// Crear un árbol
const root = new TreeNode(4);
const child1 = new TreeNode(1);
const child2 = new TreeNode(2);
const child3 = new TreeNode(5);
const child4 = new TreeNode(3);
const child5 = new TreeNode(1);
const child6 = new TreeNode(4);

root.addChild(child1);
root.addChild(child2);
root.addChild(child3);
child2.addChild(child4);
child4.addChild(child5);
child4.addChild(child6);

let suma = 0;
let cont = 0;
// Recorrer el árbol en profundidad
function traverse(node) {
  console.log(node.value);
  suma += node.value;
  cont++;
  node.children.forEach((child) => traverse(child));
}

traverse(root);

console.log("Peso: ", suma);
console.log("Peso promedio: ", suma / cont);
