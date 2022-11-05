import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    fullname: {
        type: String
    },
    addline1:{
        type:String
    },
    addline2:{
        type:String
    },
    city:{
        type:String
    },  
    state:{
        type:String
    },
    mobile: {
        type: Number
    },
    email: {
        type: String
    },
    password: {
        type: String
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
