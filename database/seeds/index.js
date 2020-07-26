const connectDb = require('./../../config/database');
const userSeeder = require('./userSeeder');
const productSeeder = require('./productSeeder');
const orderSeeder = require('./orderSeeder');
const cartSeeder = require('./cartSeeder');

// connected to DB
connectDb();


async function seed(){
    // will run all the seeder files

    await userSeeder();
    await productSeeder();
    await cartSeeder();
    await orderSeeder();

}

seed()

