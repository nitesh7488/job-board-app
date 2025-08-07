const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a job title']
  },
  company: {
    type: String,
    required: [true, 'Please add a company name']
  },
  location: {
    type: String,
    required: [true, 'Please add a location']
  },
  salary: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Job', JobSchema);