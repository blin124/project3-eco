const faker = require("faker");
const Cart = require("../../models/Cart");
const getRandomModel = require('./helper/getRandomModel');

async function seedData() {
    // delete everything inside db
    Cart.collection.deleteMany();

    // for loop to generate X amount of records in my db

    for (let index = 0; index < 50; index++) {
    

        // const randomOrder = await getRandomModel('Order');
        const randomUser = await getRandomModel('User');
        
        let products  = []
        
        for (let index = 0; index < 3; index++) {
            const randomProduct = await getRandomModel('Product')
            products.push(randomProduct._id)
            
        }
        
        const cart = new Cart({
            products: products,
            //order_id: randomOrder._id,
            user_id: randomUser._id
        })
    
        Cart.create(cart)
    }
    console.log('cartcreated');

}

module.exports = seedData;