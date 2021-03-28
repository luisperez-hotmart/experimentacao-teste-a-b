export async function productRequest(slug) {
  try {
    const request = await fetch(`${process.env.API_URL || ''}/api/product/${slug}`);
    if (request.ok) {
      return request.json();
    }
  } catch (err) {
    console.log(
      '🚀 ~ file: productService.js ~ line 8 ~ productRequest ~ err',
      err
    );
  }

  return null;
}

export async function allProductsRequest(slug) {
  try {
    const request = await fetch(`${process.env.API_URL || ''}/api/product/all`);
    if (request.ok) {
      return request.json();
    }
  } catch (err) {
    console.log(
      '🚀 ~ file: productService.js ~ line 22 ~ allProductsRequest ~ err',
      err
    );
  }

  return null;
}
