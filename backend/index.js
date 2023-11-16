const express = require('express')
const app = express()
const port = 5000;
const cors = require("cors")
require("./db/dbconnection")
const Article = require("./models/Articles")
const multer = require("multer")
const path = require("path")

app.use(express.json())
app.use(express.static('public'))
app.use(cors())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "./public/images"))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })

app.get('/', (req, res) => {
    res.send('Hello Talha')
})

app.post("/add-blog", upload.single("image"), async (req, resp) => {

    try {
        const { title, description, tags } = req.body;
        console.log(req.body);
        console.log(req.file);
        const img = req.file.filename
        let blog = await Article.create({
            title: title,
            description: description,
            tags: tags,
            image: img
        })

        resp.send(blog)
    } catch (err) {
        resp.send(err)
    }

});

app.get("/all-blogs", async (req, resp) => {
    try {
        let result = await Article.find({})
        if (result.length > 0) {
            resp.send(result)
        } else {
            resp.send("No blog found")
        }
    } catch (err) {
        resp.send({ "message": "failed to find all blogs", error: err })
    }
})

app.delete("/del", async () => {
    let result = await Article.deleteMany({});
    resp.send(result)
})

app.listen(port, () => {
    console.log(`server running on ${port} port`);
})