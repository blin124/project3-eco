const faker = require("faker");
const Order = require("../../models/Order");
const getRandomModel = require('./helper/getRandomModel');

async function seedData() {
    // delete everything inside db
    Order.collection.deleteMany();

    // for loop to generate X amount of records in my db

    for (let index = 0; index < 50; index++) {
    

        let randomUser = await getRandomModel('User')

        let p = []

        for (let i = 0; i < 3; i++) {
            let randomProduct = await getRandomModel('Product')
            
            p.push(randomProduct)
        }
        
        const order = new Order({
            products: [
                p
            ],
            user_id: randomUser._id,
            status: "orderpending"
        })
    
        Order.create(order)

    }

    console.log('ordercreated');

}

module.exports = seedData;