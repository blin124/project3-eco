const faker = require("faker");
const Order = require("../../models/Order");
const getRandomModel = require('./helper/getRandomModel');

async function seedData() {
    // delete everything inside db
    Order.collection.deleteMany();

    // for loop to generate X amount of records in my db

    for (let index = 0; index < 50; index++) {
    

        let randomCart= await getRandomModel('Cart')
        
        console.log({randomCart});
        
        const order = new Order({
            cart_id: randomCart._id,
            status: "orderpending"
        })
    
        const created = await Order.create(order)

        randomCart.order_id = created._id

    }

    console.log('ordercreated');

}

module.exports = seedData;