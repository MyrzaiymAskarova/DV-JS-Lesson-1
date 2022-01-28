const userCard = prompt('Номер вашей карты? (Выпуск 16)');
console.log(`Номер вашей карты- ${userCard.slice(0, 0).concat("************")}${userCard.slice(12, 16)}`);