export async function getManProducts() {
  return await (
    await fetch("https://fakestoreapi.com/products/category/men's clothing")
  ).json();
}

export async function getWomanProducts() {
  return await (
    await fetch("https://fakestoreapi.com/products/category/women's clothing")
  ).json();
}


export async function getProduct(id: number) {
  return await (await fetch(`https://fakestoreapi.com/products/${id}`)).json();
}
