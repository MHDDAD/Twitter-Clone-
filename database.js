const mongoose = require('mongoose')



class Database {

  constructor(){
    this.connect()
  }

    connect(){
      
      mongoose.connect('mongodb://localhost:27017/TwitterCloneDB', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify : false
        // useCreateIndex: true,
        // useFindeAndModify: false
      }).then(() => {
        console.log('DB connection successful');
      })
      



    }

}




module.exports = new Database()