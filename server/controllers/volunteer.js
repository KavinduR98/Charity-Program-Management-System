import VolModel from "../models/volunteer.js";
import mongoose from "mongoose";

export const createVol = async(req,res)=>{
    const volunteer = req.body;
    const newVolunteer = new VolModel({
        ...volunteer,
        creator: req.userId,
        createdAt: new Date().toISOString()
    });
    try{
        await newVolunteer.save();
        res.status(201).json(newVolunteer);
    }catch(error){
        res.status(404).json({message: "Something went wrong"});
    }
};

export const getVol = async(req,res)=>{
    const {id} = req.params
    try{
        const volunteer = await VolModel.findById(id);
        res.status(200).json(volunteer)
    }catch(error){

        res.status(404).json({message: "Something went wrong"});
    }
};

export const getVols = async(req,res)=>{
    try{
        const volunteers = await VolModel.find();
        res.status(200).json(volunteers)
    }catch(error){

        res.status(404).json({message: "Something went wrong"});
    }
};

export const deleteVol = async (req, res) => {
    const { id } = req.params;
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: `No volunteer exist with id: ${id}` });
      }
      await VolModel.findByIdAndRemove(id);
      res.json({ message: "Volunteer deleted successfully" });
    } catch (error) {
      res.status(404).json({ message: "Something went wrong" });
    }
};


  export const updateVol = async(req,res)=>{
    const {id} = req.params;
    const {title, firstName, lastName, email, nic, phone, des} = req.body;

    try{

        const updatedVolunteer ={
            title,
            firstName,
            lastName,
            email,
            nic,
            phone,
            des,
            _id: id
        }
        await VolModel.findByIdAndUpdate(id, updatedVolunteer, {new:true});
        res.json(updatedVolunteer);
    }catch(error){
        res.status(404).json({message: "Something went wrong"});
    }
    
};

export const getVolsBySearch = async(req,res)=>{
    const {searchQuery}=req.query;
    try{
        const firstName= new RegExp(searchQuery,"i");
        const volunteers = await VolModel.find({firstName});
        res.json(volunteers);
    }catch(error){
        res.status(404).json({message:"Something went wrong"});
    }
};