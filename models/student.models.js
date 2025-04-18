const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  studentId: String,
  studentName: String,
  fatherGuardianName: String,
  class: String,
  emergencyContact: Number,
  studentProfileImagUrl: String,
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
