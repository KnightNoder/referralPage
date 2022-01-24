import React from 'react';
import calc from './app1';

const res = calc(1, 2);

export default function App() {
  return (
    <>
      <p>{`Sum of ${res[4]} and ${res[5]} is ${res[0]}`}</p>
      <p>{`Subracted val of ${res[4]} and ${res[5]} is ${res[1]}`}</p>
      <p>{`Multiplied val of ${res[4]} and ${res[5]} is ${res[2]}`}</p>
      <p>{`Divided val of ${res[4]} and ${res[5]} is ${res[3]}`}</p>
    </>
  );
}
