const { default: mongoose } = require("mongoose");
const config = require("./config");

let MONGOURI = config.MONGOURI

const dbConnect = () => {

    if (MONGOURI != undefined) {

        const conn = mongoose
            .connect(MONGOURI).then(resp => {
                console.log(`Connected to db: ${resp.connections[0].name}`)

            })
            .catch(error => console.log("Connection failed!", error));
    }

}

module.exports = dbConnect