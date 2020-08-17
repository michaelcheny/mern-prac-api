const express = require("express");
const dotenv = require("dotenv");
// const logger = require("./middleware/logger");
const morgan = require("morgan");

// Route Files
const bootcamps = require("./routes/bootcamps");

// LOAD ENV variables
dotenv.config({ path: "./config/config.env" });

const app = express();

// Middleware starts |||| app.use() <- is middleware

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
// Mount Routers
app.use("/api/v1/bootcamps", bootcamps);

// Middleware ends

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
