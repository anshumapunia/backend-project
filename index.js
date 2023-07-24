const express = require("express");
const { connection } = require("./config/db");


const { adminrouter } = require("./routes/admin.route");

// const { logger } = require("./middlewares/logger");
const { userRoute } = require("./routes/user.route");


const { BookingRouter } = require("./routes/booking.route");



const cors = require("cors");
const { authMiddleWare } = require("./middlewares/auth");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());



app.get("/", async (req, res) => {
  try {
    res.send({ ok: true, msg: "Welcome to Backend" });
  } catch (error) {
    res.send({ ok: false, msg: error.message });
  }
});
// app.use(authMiddleWare)
app.use("/user", userRoute);
app.use("/admin",adminrouter)

app.use("/book", BookingRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to MongoDb Database");

  } catch (error) {
    console.log(error.message);
  }
  console.log(`Server is running at port ${process.env.PORT}`);
});
