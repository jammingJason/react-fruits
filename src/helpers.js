import React from 'react';
function choice(items) {
  const rndNum = Math.floor(Math.random() * items.length);
  const fruit = items[rndNum];
  return fruit;
}

function remove(items, item) {
  let tempFruit = [];

  items.map((f) => {
    if (item !== f) {
      tempFruit.push(f);
    }
  });
  return tempFruit;
}

export { choice, remove };
