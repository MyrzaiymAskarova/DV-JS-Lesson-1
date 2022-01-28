const souvenirsNum = +prompt('Сколько у тебя сувениров?');
const souvenirsGr = 75;

const trinketsNum = +prompt('Сколько у тебя безделушек?');
const trinketsGr = 112;

const total = souvenirsNum * souvenirsGr + trinketsNum * trinketsGr;
console.log(`Общий вес - ${total} грамм!`)