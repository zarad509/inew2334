import students from '../dummy/students.js';

class StudentController {
  static getAllStudents(req, res) {
    return res.status(200).json({ students, message: "All the students" });
  }

  static getSingleStudent(req, res) {
    const student = students.find(s => s.id === parseInt(req.params.id, 10));
    if (student) {
      return res.status(200).json({ student, message: "A single student record" });
    }
    return res.status(404).json({ message: "Student record not found" });
  }
}

export default StudentController;
