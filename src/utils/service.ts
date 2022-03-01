

export async function getManProducts() {
  return await (await fetch('https://fakestoreapi.com/products/category/men\'s clothing')).json();
}

