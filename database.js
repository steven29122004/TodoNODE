const mongoose = require('mongoose');

const mongoDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/todoList', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connect Successfully Baby")
    } catch (error) {
        console.log(`Cannot Connect Buddy ${error}`);
        process.exit(1);
    }


}

module.exports = mongoDB;