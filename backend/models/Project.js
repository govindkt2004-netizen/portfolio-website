const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  technology: { type: String, required: true },
  githubLink: { type: String },
  liveDemo: { type: String },
  image: { type: String },
  category: { type: String, default: 'Web App' },
  date: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
