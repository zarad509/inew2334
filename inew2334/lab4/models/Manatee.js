const mongoose = require('mongoose');

const manateeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  species: { type: String, required: true },
  habitat: { type: String },
});

const Manatee = mongoose.model('Manatee', manateeSchema);

module.exports = Manatee;
