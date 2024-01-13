const dotenv = require('dotenv').config()

module.exports = {
    MONGOURI: process.env.MONGOURI,
    PORT: process.env.PORT || 4000
}