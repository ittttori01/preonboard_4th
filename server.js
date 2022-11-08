const http = require("http");
require("dotenv").config();
const PWD = process.env.MONGODB_PWD;

const mongoogse = require("mongoose");
const mongooseUrl = `mongodb+srv://ittttori01:${PWD}@cluster0.eqzd3k8.mongodb.net/croket?retryWrites=true&w=majority`;
mongoogse.connect(mongooseUrl,{
    useNewUrlParser: true,
})
.then(()=>{console.log("MongoDB connected")})
.catch((err)=>{

    console.log(err);
})


const { createApp } = require("./app");

const startServer = async () => {
    const app = createApp();

    app.get("/ping", (req, res) => {
        res.json({ message: "pong" });
    });

    const server = http.createServer(app);
    const PORT = process.env.PORT;

    server.listen(PORT, () => {
        console.log(`Listening on Port ${PORT}`);
    });
}

startServer();