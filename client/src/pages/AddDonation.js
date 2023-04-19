import React, {useState, useEffect} from 'react';
import { MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBCardHeader, MDBValidation } from "mdb-react-ui-kit";
import {toast} from "react-toastify";
import {useNavigate, useParams, Link} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {createDonation, updateDonation} from "../redux/features/donationSlice";
import AddImg from "../assets/donation.jpg";
import swal from 'sweetalert';


const initialState={
    item: "",
    type: "",
    date: "",
    des: "",
    org: "",
    amount: ""  
}

const AddDonation =()=>{

    const [donationData, setDonationData]= useState(initialState);
    const {error} = useSelector ((state)=>({...state.donation}));
    const {user} = useSelector ((state)=>({...state.auth}));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const{item, type, date, des, org, amount}= donationData;
    const {id} = useParams();

    
    useEffect(()=>{
    error && toast.error(error);
    }, [error]);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (item === '') {
            swal('First Name is required')
         }
        else if (type === '') {
            swal('Last Name is required')
         }
         else if (date === '') {
            swal('Home Address is required')
         }
         else if (des === '') {
            swal('Email is required')
         }
         else if (org === '') {
            swal('NIC is required')
         }
         else if (amount === '') {
            swal('Phone Number is required')
         }

        else if(item && type && date && des && org && amount){
            const updatedDonationData = {...donationData,name: user?.result?.name};

            if(!id){
                dispatch(createDonation({updatedDonationData, navigate, toast}));
            }else{
                dispatch(updateDonation({id,updatedDonationData,toast,navigate}));
            }

            handleClear();
        }
        else{
            swal('Error')
    }
    
    };
    
    const onInputChange = (e) => {
        const{name,value}= e.target;
        setDonationData({...donationData, [name]: value });
    
    };
    
    const handleClear= () => {
      setDonationData({title:"", type:"", date:"", des:"", org:"", amount:""})
    };

    return(
        <div className="col-12 col-md-12 col-sm-12 col-12" style={{marginTop:"100px"}}>
            <div className="image">
                <img src={AddImg} alt="DonationImage" style={{width:"1525px", opacity:"0.7", position:"absolute", top:"0",bottom:"0",left:"0",right:"0"}}/>
            </div>
            <div className="col-12 col-md-12 col-sm-12 col-12" >
                <div class="row">
                    <div className="col-9 col-md-9 col-sm-9 col-9" ></div>
                    <div className="col-3 col-md-3 col-sm-3 col-3" >
                        <MDBBtn color="secondary" href={"/all_donations"} style={{ float: 'left' }}> <i class="fas fa-home"></i> &nbsp;Donation Dashboard</MDBBtn>
                    </div> 
                </div>
            </div>  
            
            <div style={{ margin: "auto", padding: "15px", maxWidth: "750px", alignContent: "center", marginTop: "10px", }}>
                <MDBCard alignment="center">
                    <MDBCardHeader>
                        <h4 style={{ fontWeight: 'bold' }}>{id? "Update Donation" : "Register Donation"}</h4>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBValidation className='add_form' onSubmit={handleSubmit} noValidate>
                            <div className="row justify-content-center">
                                <div className=" col-md-5">
                                    <MDBInput
                                        label="Item" 
                                        type="text"
                                        className="form-control"
                                        name="item"
                                        id="item"
                                        onChange={onInputChange}
                                        autoComplete="off"
                                        required
                                    />
                                </div>

                                <div className="col col-md-5">
                                    <MDBInput
                                        label="Type"
                                        type="text"
                                        className="form-control"
                                        name="type"
                                        id="type"
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
                                        label="Date"
                                        type="date"
                                        className="form-control"
                                        name="date"
                                        id="date"
                                        onChange={onInputChange}
                                        required
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="col col-md-5">
                                    <MDBInput
                                        label="Amount"
                                        type="number"
                                        className="form-control"
                                        name="amount"
                                        id="amount"
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
                                        label="Organization"
                                        type="text"
                                        className="form-control"
                                        name="org"
                                        id="org"
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
                                        label="Description"
                                        type="text"
                                        textarea
                                        rows={3}
                                        className="form-control"
                                        name="des"
                                        id="des"
                                        onChange={onInputChange}
                                        required
                                        autoComplete="off"
                                    />
                                </div>
                            </div>

                            <div className="col-12 mt-4">
                                <MDBBtn className="btn btn-success" style={{width:"15%"}}>{id? "Update": "Submit"}</MDBBtn>
                                &nbsp; &nbsp; &nbsp; &nbsp;
                                <Link to="/all_donations">
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

export default AddDonation;