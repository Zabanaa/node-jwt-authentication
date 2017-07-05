const jwt           = require("jsonwebtoken")
const secretKey     = "mysupersecretkey"

module.exports.authenticate = (req, res) => {

    let user    = {
        username: "karim",
        password: "mypassword"
    }

    let token   = jwt.sign(user, secretKey, { expiresIn: 4000 })

    return res.json({ type: "success", token })

}

module.exports.validateToken = (req, res, next) => {


    let authHeader  = req.headers["authorization"]
    let token

    if (authHeader) {
        token       = authHeader.split(" ")[1]
    }

    if (!authHeader || !token) {
       return res
                .status(401)
                .json({
                    meta: {
                        type: "error",
                        status_code: 401
                    },

                    body: {
                        message: "A token must be passed."
                    }
                })
    }

    jwt.verify(token, secretKey, (err, data) => {

        if (err) {
            return res
                    .status(401)
                    .json({
                        meta: {
                            type: "error",
                            status_code: 401
                        },
                        body: {
                            message: "Could not verify. Invalid Token"
                        }
                    })
        }

        next()
    })
}
