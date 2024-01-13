const express = require("express");
const dbConnect = require("./config/dbConnect");
const config = require("./config/config");
const app = express();
const PORT = config.PORT
const parser = require("body-parser");
// const cors = require("cors");
// app.use(parser.json());
// app.use(cors());

const authRouter = require("./routes/authRoute")
dbConnect();
app.use(parser.json())
app.use(parser.urlencoded({ extended: false }))
app.use('/api/user', authRouter)
app.listen(PORT, () => {
    console.log(`✅ PORT: ${PORT} 🌟`);
});
