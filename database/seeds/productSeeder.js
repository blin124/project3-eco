const faker = require("faker");
const Product = require("./../../models/Product");

async function seedData() {
    // delete everything inside db
    Product.collection.deleteMany();

    // for loop to generate X amount of records in my db

    for (let index = 0; index < 50; index++) {
    
        const cost = faker.random.number(50)
        const product = new Product({
            name: faker.commerce.productName(),
            stock_count: faker.random.number(),
            price: 10 * cost,
            cost: cost,
        })
    
        Product.create(product)

    }

    console.log('productcreated');

}

module.exports = seedData;