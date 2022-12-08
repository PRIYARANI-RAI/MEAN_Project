import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    addline1:{
        type:String,
        required:true
    },
    addline2:{
        type:String,
        required:false
    },
    city:{
        type:String,
        required:false
    },  
    state:{
        type:String,
        required:false
    },
    mobile: {
        type: Number,
        required:false
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    status: {
        type: String,
        default: "Active"
    },
    created: {
        type: String,
        default: new Date().toISOString(),
    }
});
const usersdata = mongoose.model("registration", usersSchema);
export default usersdata;
