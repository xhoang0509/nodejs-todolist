const fs = require("fs");

const readAllProduct = () => {
  const buffer = fs.readFileSync("product.json");
  // convert hex to string
  const productString = buffer.toString();
  // convert string to JSON
  const productJSON = JSON.parse(productString);
  return productJSON;
};

const readOneProduct = (id) => {
  const products = readAllProduct();
  const product = products.find((item) => item.id === id);
  if (product) {
    return product;
  } else {
    return null;
  }
};

const createProduct = (name, price, amount, description) => {
  const newProduct = {
    id: Math.random().toString(),
    name,
    price,
    amount,
    description,
  };
  let products = readAllProduct();
  products = [...products, newProduct];
  fs.writeFileSync("product.json", JSON.stringify(products));
  return newProduct;
};

const updateProduct = (id, name, price, amount, description) => {
  const products = readAllProduct();
  const index = products.findIndex((product) => product.id === id);
  if (index !== -1) {
    const productOld = products[index];
    const productNew = { ...productOld, name, price, amount, description };
    products[index] = productNew;
    fs.writeFileSync("product.json", JSON.stringify(products));
    return productNew;
  } else {
    return null;
  }
};

const deleteProduct = (id) => {
  let products = readAllProduct();
  const index = products.findIndex((product) => product.id === id);
  if (index !== -1) {
    products = products.filter((product) => product.id !== id);
    fs.writeFileSync("product.json", JSON.stringify(products));
    return true;
  } else {
    return null;
  }
};

const increaseAmount50 = (id) => {
  let products = readAllProduct();
  const index = products.findIndex((product) => product.id === id);
  if (index !== -1) {
    const productOld = products[index];
    const productNew = { ...productOld, amount: productOld.amount + 50 };
    products[index] = productNew;
    fs.writeFileSync("product.json", JSON.stringify(products));
    return productNew;
  } else {
    return null;
  }
};

module.exports = {
  readAllProduct,
  readOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  increaseAmount50,
};
