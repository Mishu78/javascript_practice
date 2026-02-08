const products = [
  { name: "shirt", price: 3000 ,quantity:2  },
  { name: "pant", price: 4500  ,quantity:4 },
  { name: "shoe", price: 6000  ,quantity:5  },
  { name: "jacket", price: 8000,quantity:1   },
  { name: "watch", price: 12000,quantity:2   },
  { name: "cap", price: 800    ,quantity:4},
  { name: "belt", price: 1500  ,quantity:6  },
  { name: "bag", price: 5000   ,quantity:3},
];

function buyProducts(products){
    let total=0;
    for(const product of products){
        console.log("each products are:",product);
        total=total+product.price*product.quantity;
    }
    return total;
}

const price=buyProducts(products);
console.log("total price:",price);