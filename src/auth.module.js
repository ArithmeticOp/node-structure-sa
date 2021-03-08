const jwt = require('jsonwebtoken')
const SECRET = "xxx"

function verify(shared_token) {
    try {
        let { access_token } = jwt.verify(shared_token, SECRET)
        return jwt.decode(access_token)
    }
    catch (error) {
        return null
    }
}

module.exports = {
    verify
}