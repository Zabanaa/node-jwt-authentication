const router   = require("express").Router()
const helpers  = require("./helpers")

router.use(helpers.validateToken)

router.post("/secure-post", (req, res) => {
    return res.send("Thanks for posting")
})

router.get("/secure-endpoint", (req, res) => {
    return res.send("You have access to this endpoint")
})

module.exports = router

