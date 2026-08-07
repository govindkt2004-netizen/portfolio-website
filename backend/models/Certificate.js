const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  issuedBy: { type: String, required: true },
  date: { type: Date, default: Date.now },
  image: { type: String },
  fileUrl: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Certificate', certificateSchema);
