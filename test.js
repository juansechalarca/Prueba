//#17 División de dos números

const division = (n1, n2) => {
  return n1 / n2;
};

//#18 Cambio de base
function convertirBase(num, base, baseCambio) {
  let numBase10 = 0;
  const numReve = num.toString().split("").reverse();

  numReve.forEach((num, i) => {
    numBase10 += num * Math.pow(base, i);
  });

  numBase10;

  let modulo;
  let division = numBase10;
  const modulos = [];

  do {
    modulo = division % baseCambio;
    division = Math.floor(division / baseCambio);
    modulos.unshift(modulo);
  } while (baseCambio <= division);

  return `${division}${modulos.join("")}`;
}

console.log(convertirBase(253, 6, 4));
