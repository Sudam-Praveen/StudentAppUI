import React, { Component } from 'react';
import ListStudentComponent from './ListStudentComponent';
import { useState } from 'react';
import { Link } from 'react-router-dom'
function CreateStudentComponent() {
    const [showListStudentsComponent, setListStudentComponent] = useState(false)



    return (

        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">

                    <div className="card-body">
                        <form>
                            <div className="form-group mt-2">
                                <label> First Name: </label>
                                <input placeholder="First Name" name="firstName" className="form-control" />
                            </div>
                            <div className="form-group mt-2">
                                <label> Last Name: </label>
                                <input placeholder="Last Name" name="lastName" className="form-control" />
                            </div>
                            <div className="form-group mt-2">
                                <label> Email Id: </label>
                                <input placeholder="Email Address" name="emailId" className="form-control" />
                            </div>
                            <Link to="/">
                            <button className="btn btn-success mt-2" >Save</button>
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