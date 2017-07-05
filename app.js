const express       = require("express")
const app           = express()
const helpers       = require("./helpers")
const routes        = require("./routes")
const port          = process.env.PORT || 3000

// 1. Create a secret key
const secret_key    = "mysupersecretkey"

app.use("/api", routes)

// 2. Create an authentication endpoint to generate a token
app.get("/authenticate", helpers.authenticate)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
