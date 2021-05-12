const express = require("express");

const app = express();

const ratesRoutes = require("./routes/rates");

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/rates", ratesRoutes);

app.listen(3001);
