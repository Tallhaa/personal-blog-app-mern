const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    image: String,
    title: String,
    description: String
    // tags: [String]

});

const Article = mongoose.model("articles", blogSchema);
module.exports = Article;
