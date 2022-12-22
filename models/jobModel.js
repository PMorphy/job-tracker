import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, 'Please Enter a Title for this Job']
  },
  isUrgent: {
    type: Boolean,
    required: true,
    default: false
  },
  requestedOn: {
    type: Date,
    required: true,
    default: Date.now
  },
  finishedOn: {
    type: Date
  },
  description: {
    type: String,
    required: [true, 'Please Enter a Description for this Job']
  }

  // requestedBy
});

const model = mongoose.model('Job', JobSchema);
export default model;
