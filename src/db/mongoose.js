const uri = "mongodb+srv://Run-Onn:test@cluster0.mhgxxyf.mongodb.net/?retryWrites=true&w=majority";

const mongoose = require('mongoose');
const env = require('../config/env');
const chalk = require('chalk');

try {
  mongoose.connect(uri);
} catch (error) {
  console.error(chalk.red.bold('ERROR') + ': Unable to connect to MongoDB');
}

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://Run-Onn:Ekma@2003@cluster0.lklsgqb.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   console.log("err");
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });