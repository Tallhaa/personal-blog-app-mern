const mongoose = require('mongoose');

const main = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/blog');
        console.log("db connected");
    } catch (error) {
        console.log(error);
    }

}
main().catch(err => console.log(err))

module.exports = main;
