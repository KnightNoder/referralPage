import React, { useState } from 'react';
import index from './index.css';

export default function Clock() {
  const [fullName, setFullName] = useState({
    fname: '',
    lname: '',
  });

  const sub = (event) => {
    event.preventDefault();
  };

  const chg = (event) => {};

  const chg1 = (event) => {};

  return (
    <>
      <p>
        Hello {fullName.fname}
        {fullName.lname}
      </p>
      <form onSubmit={sub}>
        <input
          type="text"
          placeholder="Enter name"
          onChange={chg}
          value={fullName.fname}
        />
        <input
          type="text"
          placeholder="Enter pass"
          onChange={chg1}
          value={fullName.lname}
        />
        <button type="sumbit">Click me</button>
      </form>
    </>
  );
}
