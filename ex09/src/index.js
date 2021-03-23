const product = (...args) => {
  return args.reduce((a, b) => a * b, 1);
};
console.log(product(4, 3, 10, 2));
module.exports = product;
