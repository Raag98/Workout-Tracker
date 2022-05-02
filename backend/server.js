const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const uri = "mongodb+srv://RaaG_98:HelloWorld!@workout-tracker-db.9e6ur.mongodb.net/workout-tracker-db?retryWrites=true&w=majority"
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});
const conn = mongoose.connection;
conn.once('open', () => {
    console.log('MongoDB database connection established successfully');
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(5000, () => {
  console.log('Server started on port: 5000');
});