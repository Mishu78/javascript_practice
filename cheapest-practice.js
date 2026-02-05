const mobiles = [
  { name: 'samsung', price: 20000, camera: '12mp', color: 'black' },
  { name: 'iphone', price: 120000, camera: '48mp', color: 'silver' },
  { name: 'xiaomi', price: 18000, camera: '64mp', color: 'blue' },
  { name: 'realme', price: 15000, camera: '50mp', color: 'yellow' },
  { name: 'oneplus', price: 45000, camera: '48mp', color: 'green' },
  { name: 'oppo', price: 22000, camera: '32mp', color: 'purple' },
  { name: 'vivo', price: 25000, camera: '64mp', color: 'white' }
];

function getCheapestPhone(mobiles){
    let min=mobiles[0];
    for(const phone of mobiles){
        if(phone.price<min.price){
            min=phone;
        }
    }
    return min;
}
const cheap=getCheapestPhone(mobiles);
console.log("cheapeast phone is",cheap);