require("dotenv").config();


const { PORT } = process.env;

const express = require("express");
const app = express();

// middleware
app.use(express.json());

// routes
const { organisationRouter, userRouter } = require("./src/routes");

app.use("/organisation", organisationRouter);
app.use("/user", userRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));