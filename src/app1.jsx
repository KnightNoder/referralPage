const calc = (a, b) => {
  const add = a + b;
  const sub = a - b;
  const mul = a * b;
  const div = a / b;

  return [add, sub, mul, div, a, b];
};

export default calc;
