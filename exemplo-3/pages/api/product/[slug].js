import products from '../products.json';

export default (req, res) => {
  const {
    query: { slug },
  } = req;

  if (slug) {
    const product = products.find((item) => {
      return item.slug === slug;
    });

    if (product) {
      return res.json(product);
    }
  }
  return res.status(404).json({ error: 'PRODUCT_NOT_FOUND' });
};
