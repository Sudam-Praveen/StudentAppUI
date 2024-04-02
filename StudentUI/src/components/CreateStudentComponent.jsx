import React, { Component } from 'react';
import ListStudentComponent from './ListStudentComponent';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import  axios from 'axios'
function CreateStudentComponent() {
    const [studentData, setStudentData] = useState({});

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const submitDetails = (stdData) => {
       
        console.log(studentData);
        axios.post("http://localhost:8080/student/add",stdData).then(data=>{
            console.log(data);
            console.log(studentData);
        })
        reset()
    }

    return (

        <div className="container">
            <h2 className='text-center'>Add a Student</h2>
            <hr />
            <div className="row">

                <div className="card col-md-6 offset-md-3 offset-md-3">

                    <div className="card-body">
                        <form>
                            <div className="form-group mt-2">
                                <label> First Name: </label>
                                <input {...register("firstName", { required: true })} placeholder="First Name" name="firstName" className="form-control" />
                                {
                                    errors.firstName && <span className='errorr-msg' >*First Name must be provided</span>
                                }
                            </div>
                            <div className="form-group mt-2">
                                <label> Last Name: </label>
                                <input {...register("lastName", { required: true })} placeholder="Last Name" name="lastName" className="form-control" />
                                {
                                    errors.lastName && <span className='errorr-msg'>*Last Name must be provided</span>
                                }
                            </div>
                            <div className="form-group mt-2">
                                <label> Email : </label>
                                <input {...register("email", { required: true })} type='email' placeholder="Email Address" name="email" className="form-control" />
                                {
                                    errors.email && <span className='errorr-msg' >*Email must be provided</span>
                                }
                            </div>
                            <Link to="/">
                                <button onClick={handleSubmit(submitDetails)} className="btn btn-success mt-2" >Save</button>
                                <button className="btn btn-danger mt-2" style={{ marginLeft: "10px" }}>Cancel</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>

        </div>

    );



}

export default CreateStudentComponent;