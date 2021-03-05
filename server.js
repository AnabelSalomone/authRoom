const express = require("express");
const app = express();
const authRoute = require("./routes/auth");

app.use(express.json());
app.use("/api/auth", authRoute);

app.listen(5000, () => console.log("Listening on port 5000"));
