const mongoose = require('mongoose');

const credentials = 'mongodb+srv://practiceUser:cachito1@cluster0-stlp7.mongodb.net/test?retryWrites=true';

mongoose.connect(credentials, (error)=> {
  if (error){
    console.log('failed to connect', error)
  } else {
    console.log('connected to database succesfully')
  }
})

mongoose.Promises = global.Promise;

let db  = mongoose.connection;

db.on('error',console.error.bind(console, 'MondoDB connection error:'));

//Grabs a copy of the empty mongooose class.
let Schema = mongoose.Schema;

//Customizes outr empty class into a custom class and stored in mySchema
let usersSchema = new mongoose.Schema({
 // '_id': Schema.Types.ObjectId,
 'userid': String,
 'firstName': String,
 'lastName': String,
 'age': Number,
 'isActive': Boolean

});

let usersModel = new mongoose.model('users', usersSchema);

let myFirstUser = new usersModel(
  {
    userId: 'theGas',
    firstName: 'Roberto',
    lastName: 'Lafarius',
    age: 24,
    isActive: true

  }
);

myFirstUser.save((error)=>{
  if(error) {
    console.log('there was an error saving your document',error)
  } else{
    console.log('your document was saved to the database');
  }
});
