import jwt from 'jsonwebtoken'
export const verifytoken = async (req, res, next) => {
    try {
        const bearerHeader = req.headers['authorization'];
            if(typeof bearerHeader !== 'undefined'){
                const bearer = bearerHeader.split(' ');
                const bearerToken = bearer[1];
                req.token = bearerToken;
                next();
            } else {
                let obj = {
                    msg : "Please provide valid token",
                    code : 403
                }
                res.send(obj)
            }
    }
    catch (e) {
        return res.send({ status:false, message: "Failed", result: e })
    }
}