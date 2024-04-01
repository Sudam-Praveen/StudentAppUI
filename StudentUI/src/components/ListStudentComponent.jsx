import React, { useState, useEffect } from 'react';
import StudentService from '../services/StudentService';
import CreateStudentComponent from './CreateStudentComponent';
//import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'
function ListStudentComponent(props) {
    const [students, setStudents] = useState([]);


    useEffect(() => {
        StudentService.getStudents()
            .then((res) => {
                setStudents(res.data);
            })
            .catch((error) => {
                console.error('Error fetching students:', error);
            });
    }, []);



    return (
        <div>
            <h2 className="text-center">Student List</h2>
            <br></br>
            <div>
                <Link to="/add-Student">
                    <button className="btn btn-primary">Add Student</button>   {/* Adding link to the Addcontact using liknk */}
                </Link>
            </div>

            <br />
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Student First Name</th>
                            <th>Student Last Name</th>
                            <th>Student Email</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>{student.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListStudentComponent;
