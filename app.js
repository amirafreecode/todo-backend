require("dotenv").config();
const express = require ("express");
const cors = require ("cors")
const conn = require("./conn/conn");
const app = express();
app.use(cors())
app.use(express.json());
conn();
const auth = require("./routes/auth");
const list = require("./routes/list");
app.get("/favicon.ico", (req, res) => res.status(204));
app.get("/",(req,res) => {
    res.send("Hello");
});
app.use("/api/v1",auth)
app.use("/api/v2",list)

const PORT = process.env.PORT || 1000;

app.listen(PORT, () => {
    console.log(`✅ Server started on port ${PORT}`);
});
