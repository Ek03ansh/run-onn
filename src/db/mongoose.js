const uri = "mongodb+srv://Run-Onn:test@cluster0.mhgxxyf.mongodb.net/?retryWrites=true&w=majority";

const mongoose = require('mongoose');
const env = require('../config/env');
const chalk = require('chalk');

try {
  mongoose.connect(uri);
} catch (error) {
  console.error(chalk.red.bold('ERROR') + ': Unable to connect to MongoDB');
}