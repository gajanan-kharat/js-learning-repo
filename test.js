
const response = await fetch("https://fakestoreapi.com/products");
const products = await response.json();
for (const product of products) {
    console.log(product.id, product.title);
}