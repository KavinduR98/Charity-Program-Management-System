import React, {useState, useEffect} from 'react';
import { MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBCardHeader, MDBValidation } from "mdb-react-ui-kit";
import {toast} from "react-toastify";
import {useNavigate, useParams, Link} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {createDonor, updateDonor} from "../redux/features/donorSlice";
import swal from 'sweetalert';
import AddImg from "../assets/addDonor.png";


const initialState={
    firstName: "",
    lastName: "",
    email: "",
    nic: "",
    address: "",
    phone: ""  
}

const AddDonor =()=>{

    const [donorData, setDonorData]= useState(initialState);
    const {error} = useSelector ((state)=>({...state.donor}));
    const {user} = useSelector ((state)=>({...state.auth}));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const{firstName, lastName, address, email, nic, phone}= donorData;
    const {id} = useParams();

    
    useEffect(()=>{
    error && toast.error(error);
    }, [error]);
    
    const onInputChange = (e) => {
        const{name,value}= e.target;
        setDonorData({...donorData, [name]: value });
    
    };

    const validateEmail = (email) => {
        return String(email)
           .toLowerCase()
           .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
           );
     };

     const validatePhone = (phone) => {
        return String(phone)
           .match(
            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
           );
     };

     const validateNic = (nic) => {
        return String(nic)
           .match(
            /^([0-9]{9}[x|X|v|V]|[0-9]{12})$/im
            
           );
     };

    function handleSubmit(e){

        e.preventDefault();

        if (firstName === '') {
            swal('First Name is required')
         }
        else if (lastName === '') {
            swal('Last Name is required')
         }
         else if (address === '') {
            swal('Home Address is required')
         }
         else if (email === '') {
            swal('Email is required')
         }
         else if (!validateEmail(email)) {
            swal('Invalid email')
         }
         else if (nic === '') {
            swal('NIC is required')
         }
         else if (!validateNic(nic)) {
            swal('Invalid NIC ')
         }
         else if (phone === '') {
            swal('Phone Number is required')
         }
         else if (!validatePhone(phone)) {
            swal('Invalid phone number')
         }
        else if(firstName && lastName && address && email && nic && phone){
            const updatedDonorData = {...donorData,name: user?.result?.name};

            if(!id){
                dispatch(createDonor({updatedDonorData, navigate, toast}));
            }else{
                dispatch(updateDonor({id,updatedDonorData,toast,navigate}));
            }

        }else{
            swal('Error')
        }
    }
    

    return(
        <div className="col-12 col-md-12 col-sm-12 col-12" style={{marginTop:"100px"}}>
            <div className="image">
                <img src={AddImg} alt="Add_image" style={{width:"1525px", opacity:"0.6", position:"absolute", top:"0",bottom:"0",left:"0",right:"0"}}/>
            </div>
            <div className="col-12 col-md-12 col-sm-12 col-12" >
                <div class="row">
                    <div className="col-9 col-md-9 col-sm-9 col-9" ></div>
                    <div className="col-3 col-md-3 col-sm-3 col-3" >
                        <MDBBtn color="secondary" href={"/all_donors"} style={{ float: 'left' }}> <i class="fas fa-home"></i> &nbsp;Donor Dashboard</MDBBtn>
                    </div> 
                </div>
            </div>  
            
            <div style={{ margin: "auto", padding: "15px", maxWidth: "750px", alignContent: "center", marginTop: "10px", }}>
                <MDBCard alignment="center">
                    <MDBCardHeader>
                        <h4 style={{ fontWeight: 'bold' }}>{id? "Update Donor" : "Register Donor"}</h4>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBValidation className='add_form' noValidate>
                            <div className="row justify-content-center">
                                <div className=" col-md-5">
                                    <MDBInput
                                        label="First Name" 
                                        type="text"
                                        className="form-control"
                                        name="firstName"
                                        id="firstName"
                                        onChange={onInputChange}
                                        autoComplete="off"
                                        required
                                    />
                                </div>

                                <div className="col col-md-5">
                                    <MDBInput
                                        label="Last Name"
                                        type="text"
                                        className="form-control"
                                        name="lastName"
                                        id="lastName"
                                        onChange={onInputChange}
                                        required
                                        autoComplete="off"
                                    />
                                </div>
                            </div>
                            &nbsp;
                            <div className="row  justify-content-center">
                                <div className="col col-md-10">
                                    <MDBInput
                                        label="Home Address"
                                        type="text"
                                        className="form-control"
                                        name="address"
                                        id="address"
                                        onChange={onInputChange}
                                        required
                                        autoComplete="off"
                                    />
                                </div>
                            </div>
                            &nbsp;
                            <div className="row  justify-content-center">
                                <div className="col col-md-10">
                                    <MDBInput
                                        type="text"
                                        label="Email Address"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        onChange={onInputChange}
                                        required
                                        autoComplete="off"
                                    />
                                </div>
                            </div>
                            &nbsp;
                            <div className="row justify-content-center">
                                <div className="col col-md-5">
                                    <MDBInput
                                        label="NIC Number"
                                        type="text"
                                        className="form-control"
                                        name="nic"
                                        id="nic"
                                        onChange={onInputChange}
                                        required
                                        autoComplete="off"
                                    />
                                </div>

                                <div className="col col-md-5">
                                    <MDBInput
                                        label="Phone Number"
                                        type="number"
                                        className="form-control"
                                        name="phone"
                                        id="phone"
                                        maxLength="10"
                                        onChange={onInputChange}
                                        required
                                        autoComplete="off"
                                    />
                                    <p className="text-start" style={{fontWeight:"100"}}>Ex: 1234567890</p>
                                </div>
                            </div>
                            <div className="col-12 mt-4">
                                <MDBBtn className="btn btn-success" style={{width:"15%"}} onClick ={handleSubmit}>{id? "Update": "Submit"}</MDBBtn>
                                &nbsp; &nbsp; &nbsp; &nbsp;
                                <Link to="/all_donors">
                                <MDBBtn style={{ width: "15%" }} className="btn btn-primary">
                                    Cancel
                                </MDBBtn>
                                </Link>
                            </div>
                        </MDBValidation>
                        <br />
                    </MDBCardBody>
                </MDBCard>
            </div>
        </div>
    )
};

export default AddDonor;