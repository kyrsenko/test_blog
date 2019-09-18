const express = require('express');
const mongoose = require('mongoose');

const postRoutes = require('./routes/postRoutes');

const config = require('./config');
const app = express();

app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());
app.use(postRoutes);

const run = async () => {
  try {
    await mongoose.connect(config.DB, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    app.listen(config.PORT, () => {
      console.log(`Connected on port ${config.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

run();
