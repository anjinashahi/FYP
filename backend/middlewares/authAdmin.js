import jwt from "jsonwebtoken";

const authAdmin = async (req, res, next) => {
    try{
        const {atoken} = req.headers;
        if (!atoken){
            return res.json({success: false, message: "Access denied"})
        }
        
    }
    catch(error){
        console.log(error)
        res.json({success: false, message: "Internal server error"})
    }
}