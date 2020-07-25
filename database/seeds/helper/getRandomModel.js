async function getRandomModel(modelName){
    let model = require('./../../../models/' + modelName);
    let count = await model.count({});
    
    let rand = Math.floor(Math.random() * count) +1;
    console.log(rand);

    let models = await model.find({});

    return models[rand];
}

module.exports = getRandomModel
