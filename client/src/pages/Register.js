import React, { useState, useEffect } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBFooter,
    MDBValidation,
    MDBBtn,
    MDBIcon,
    MDBSpinner
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { register } from '../redux/features/authSlice';
import regImg from "../assets/registration.png";


const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const Register = () => {
    const [formValue, setFormValue] = useState(initialState);
    const { loading, error } = useSelector((state) => ({ ...state.auth }));
    const { email, password, firstName, lastName, confirmPassword } = formValue;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        error && toast.error(error);
    }, [error]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            return toast.error("Password did not match");
        }
        if (email && password && firstName && lastName && confirmPassword) {
            dispatch(register({ formValue, navigate, toast }));
        }
    };
    const onInputChange = (e) => {
        let { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };

    return (

        <div>
            <div className="image">
                <img src={regImg} alt="RegisterImage" style={{width:"1340px",height:"700px", opacity:"0.7", position:"absolute", top:"0",bottom:"0",left:"0",right:"0"}}/>
            </div>
        <div style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "450px",
            alignContent: "center",
            marginTop: "120px"
        }}>

            <MDBCard alignment='center'>
                <MDBIcon fas icon='user-circle' className='fa-2x' style={{ marginTop: "5px" }} />
                <h5>Sign Up</h5>
                <MDBCardBody>
                    <MDBValidation onSubmit={handleSubmit} noValidate className='row g-3'>
                        <div className='col-md-6'>
                            <MDBInput
                                label="First Name"
                                type="text"
                                value={firstName}
                                name="firstName"
                                onChange={onInputChange}
                                required
                                invalid
                                validation="Please provide first name"
                            />
                        </div>
                        <div className='col-md-6'>
                            <MDBInput
                                label="Last Name"
                                type="text"
                                value={lastName}
                                name="lastName"
                                onChange={onInputChange}
                                required
                                invalid
                                validation="Please provide last name"
                            />
                        </div>
                        <div className='col-md-12'>
                            <MDBInput
                                label="Email"
                                type="email"
                                value={email}
                                name="email"
                                onChange={onInputChange}
                                required
                                invalid
                                validation="Please provide email"
                            />
                        </div>
                        <div className='col-md-12'>
                            <MDBInput
                                label="Password"
                                type="password"
                                value={password}
                                name="password"
                                onChange={onInputChange}
                                required
                                invalid
                                validation="Please provide password"
                            />
                        </div>
                        <div className='col-md-12'>
                            <MDBInput
                                label="Password Confirm"
                                type="password"
                                value={confirmPassword}
                                name="confirmPassword"
                                onChange={onInputChange}
                                required
                                invalid
                                validation="Please confirm password"
                            />
                        </div>
                        <div className="col-12">
                    <MDBBtn style={{width: "100%"}} className="mt-2">
                        {loading && (
                            <MDBSpinner
                            size="sm"
                            role="status"
                            tag="span"
                            className="me-2"
                            />

                        )}
                        Register
                    </MDBBtn>
                </div>
                    </MDBValidation>
                </MDBCardBody>
                <MDBFooter>
                    <Link to="/login">
                        <p>Already have an account? Sign In</p>
                    </Link>
                </MDBFooter>
            </MDBCard>
        </div>
        </div>
    )

};

export default Register;