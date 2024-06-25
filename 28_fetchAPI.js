
const productResponse = await fetch("https://fakestoreapi.com/products");
const products = await productResponse.json();
for (const product of products) {
    console.log(`ID: ${product.id}, Price: ${product.price}, Title: ${product.title}`);
}


function display(){
    
}

let show = function(){
    console.log(`Inside show function`);
}
show();