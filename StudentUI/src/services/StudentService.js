import axios from "axios"
class StudentService {
    getStudents() {
        return axios.get("http://localhost:8080/student/all")
    }
}

export default new StudentService()