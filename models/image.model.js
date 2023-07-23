const mongoose = require('mongoose');
const imageSchema = new mongoose.Schema({
    name: String,
    image: {
      type: String,
      userID:String
    },
  });

// define model for image
const Image = mongoose.model('IMAGES', imageSchema);

module.exports = {
    Image
}


