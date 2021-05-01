const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobSchema = new Schema({
  start_date: {
    type: Date,
    default: Date.now,
  },
  end_date: {
    type: Date,
  },
  result: [
    {
      type: String,
    },
  ],
  status: {
    type: String,
  },
  url: {
    type: String,
  },
});

module.exports = Job = mongoose.model("job", JobSchema);
