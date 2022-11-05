import express from 'express';
import { getUserById, userLogin, userSignup, userUpdate } from '../Controller/userController';
const router = express.Router();

//User---------------------------------------------------
router.post("/register",userSignup);
router.post("/login",userLogin);
router.get("/userdetail/:id",getUserById);
router.put("/updateuser/:id", userUpdate);

export default router;
