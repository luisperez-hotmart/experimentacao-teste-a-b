import products from '../products.json';

export default (req, res) => {
  return res.json(products);
};
