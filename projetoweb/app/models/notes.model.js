const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

// Definindo o model
const NotesSchema = new Schema({
  id: {
    type: Number,
    require: true
  },
  content: {
    type: String,
    require: true
  }
})
 
module.exports = mongoose.model('notes', NotesSchema);