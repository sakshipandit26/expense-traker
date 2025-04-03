const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
require("./Models/db");
const AuthRouter = require("./Routes/AuthRouter");
const ProductRouter=require('./Routes/ProductRouter')
const ExpenseRouter=require('./Routes/ExpenseRouter');
const ensureAuthenticated = require("./Middlewares/Auth");

const PORT = process.env.PORT || 8082;

app.use(bodyParser.json());
app.use(cors());

// ✅ Fix: Add a forward slash before 'auth'
app.use('/auth', AuthRouter);
app.use('/products',ProductRouter)
app.use('/expenses',ensureAuthenticated,ExpenseRouter)

app.get("/ping", (req, res) => {
    res.send("pong");
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
