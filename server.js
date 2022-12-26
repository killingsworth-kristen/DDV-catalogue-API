const express = require('express');
const routes = require('./routes');

// import db
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(routes);

// initialize db
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for DDV running on port ${PORT}!`);
  });
});