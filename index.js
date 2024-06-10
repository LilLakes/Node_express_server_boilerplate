const express = require("express")
const app = express()

const cors = require("cors")

const port = 1234

app.use(cors())

app.get("/", (req, res) => {
    res.write("Hello world!")
    res.end()
})

app.listen(port, () => {
    console.log(`Server started and listening at port ${port}`)
})