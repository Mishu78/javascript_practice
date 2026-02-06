const products = [
  { name: "shirt", price: 3000 },
  { name: "pant", price: 4500 },
  { name: "shoe", price: 6000 },
  { name: "jacket", price: 8000 },
  { name: "watch", price: 12000 },
  { name: "cap", price: 800 },
  { name: "belt", price: 1500 },
  { name: "bag", price: 5000 },
];

function buyProducts(products){
    let total=0;
    for(const product of products){
        console.log("each products are:",product);
        total=total+product.price;
    }
    return total;
}

const price=buyProducts(products);
console.log("total price:",price);