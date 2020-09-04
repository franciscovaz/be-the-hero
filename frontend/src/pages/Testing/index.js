import React from 'react';

export default function Testing() {
  function callNewFunc(num1, num2) {
    const xpto = num1 + num2;
    console.log(xpto);
  }
  function handleClick() {
    console.log('Cliquei');

    callNewFunc(1, 4);
  }

  return (
    <button type="button" onClick={handleClick}>
      Siga
    </button>
  );
}
