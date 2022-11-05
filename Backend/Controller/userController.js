import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import registration from '../Model/userModel';

//User Registration------------------------------------------
export const userSignup = async (req, res) => {
    try{
        const { firstname, lastname,addline1,addline2,city,state,mobile, email, password } = req.body;
        const user = await registration.findOne({ email });
        if (user) {
          return res.send({ status: false, message: "Email Already Registered"})
        }
        const userSignup = new registration({
          firstname,
          lastname,
          addline1,
          addline2,
          city,
          state,
          mobile,
          email,
          password: bcrypt.hashSync(password, 8),
        })
        const response = await userSignup.save();
        if (response) {
            let payload = {};
            payload._id = response._id;
            jwt.sign(
                payload,
                "SECRET_KEY",
                {
                    expiresIn: "2m",
                },
                (err, token) => {
                    res.send({ Token: token, status: true, message: "User Registered Successfully", result: response });
                }
            );
        }
    }
    catch(e){
        res.send({ status: false, messgae: "No Results Found", Result: e });
    }
  }

//Login------------------------------------------------------------
export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await registration.findOne({ email });
        if (!user) {
            res.send({ status: false, message: "email not valid" })
        }
        const isValid = bcrypt.compareSync(password, user.password);
        if (isValid) {
            let payload = {};
            payload._id = user._id;
            jwt.sign(
                payload,
                "SECRET_KEY",
                {
                    expiresIn: "1h",
                },
                (err, token) => {
                    res.send({ Token: token, status: true, message: "Login Successfully", result: user });
                }
            );
        } else {
            res.send({ status: false, message: "Password is incorrect" });
        }
    }
    catch (e) {
        res.send({ status: false, messgae: "No Results Found", Result: e });
    }
}
//User Data By Id----------------------------------------------
export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const userdata = await registration.findById({ _id: id })
        if (userdata) {
            res.send({ status: true, message: "Success", result: userdata });
        }
    }
    catch (e) {
        res.send({ status: false, messgae: "No Results Found", Result: e });
    }
};

//Update User --------------------------------------------------
export const userUpdate = async (req, res) => {
    try {
        let jsondata = {}
        if (req.body.firstname) {
            jsondata.firstname = req.body.firstname
        }
        if (req.body.lastname) {
            jsondata.lastname = req.body.lastname
        }
        if (req.body.address) {
            jsondata.address = req.body.address
        }
        if (req.body.addline1) {
            jsondata.addline1 = req.body.addline1
        }
        if (req.body.addline2) {
            jsondata.addline2 = req.body.addline2
        }
        if (req.body.city) {
            jsondata.city = req.body.city
        }
         if (req.body.state) {
            jsondata.state = req.body.state
        }
        if (req.body.mobile) {
            jsondata.mobile = req.body.mobile
        }
        if (req.body.password) {
            jsondata.password = req.body.password
        }
        registration.updateOne({ _id: req.params.id },
            { $set: jsondata },
            { new: true },
            (err, result) => {
                if (err) {
                    res.send({ status: 404, message: "failed", result: err })
                } else {
                    res.send({ status: 200, message: "update successfully", result: result })
                }
            }
        )
    } catch (e) {
        return res.send({ status: false, message: "error", code: 400, result: e })
    }

}