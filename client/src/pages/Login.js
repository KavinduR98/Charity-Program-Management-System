import React,{useState, useEffect} from 'react';
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
import {Link, useNavigate} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {toast} from "react-toastify";
import {login } from '../redux/features/authSlice';
import loginImg from "../assets/login.png";



const initialState ={
    email: "",
    password:""
}

const Login = () => {
    const [formValue, setFormValue]= useState(initialState);
    const {loading,error} =useSelector((state)=>({...state.auth}));
    const {email,password} = formValue;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        error && toast.error(error);
    },[error]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(email && password){
            dispatch(login({formValue,navigate, toast}));
        }
    };
    const onInputChange = (e)=> {
        let {name,value}= e.target;
        setFormValue({...formValue, [name]: value });
    };


  return(
    <div>
        <div className="image">
                <img src={loginImg} alt="LoginImage" style={{width:"1340px",height:"700px", opacity:"0.7", position:"absolute", top:"0",bottom:"0",left:"0",right:"0"}}/>
        </div>
    

    <div style={{
    margin: "auto", 
    padding:"15px", 
    maxWidth: "450px", 
    alignContent: "center", 
    marginTop: "120px"
    }}>

    <MDBCard alignment='center'>
        <MDBIcon fas icon='user-circle' className='fa-2x' style={{marginTop:"5px"}}/>
        <h5>Sign In</h5>
        <MDBCardBody>
            <MDBValidation onSubmit={handleSubmit} noValidate className='row g-3'>
                <div className='col-md-12'>
                    <MDBInput
                    label="Email"
                    type="email"
                    value={email}
                    name="email"
                    onChange={onInputChange}
                    required
                    invalid
                    validation="Please provide your email"
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
                    validation="Please provide your password"
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
                        Login
                    </MDBBtn>
                </div>
            </MDBValidation>
        </MDBCardBody>
        <MDBFooter>
            <Link to="/register">
            <p>Don't have an account? Sign Up</p>
            </Link>
        </MDBFooter>
    </MDBCard>
    </div>
    </div>
  )
  
};

export default Login;