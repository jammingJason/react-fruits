import React from 'react';
import foods from './foods';
import { choice, remove } from './helpers';
const App = () => {
  let tempFruit = [];

  const strFruit = choice(foods);
  foods.map((f) => {
    if (strFruit !== f) {
      tempFruit.push(f);
    }
  });
  return (
    <>
      <p>I'd like one {strFruit}, please.</p>
      <p>Here you go : {strFruit}</p>
      <p>Delicious! May I have another {strFruit}?</p>
      <p>
        I'm sorry, we're all out of {strFruit}. We have
        {remove(foods, strFruit).length} left of these :
        {remove(foods, strFruit)}
      </p>
    </>
  );
};
export default App;
