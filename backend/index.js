const express = require('express')
const app = express()

const port = 4000

const mongoose = require('mongoose')
const MONGO_URI ='mongodb+srv://admin:KAKAY1212?!?@cluster0.wzuyn.mongodb.net/EMRSYSTEM?retryWrites=true&w=majority'
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false, //this
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB

app.listen(port, function(error){
    if (error){
        console.log('Oops, something went wrong', error)
    }
    else {
        console.log('Server is running on port ' + port)
    };
})