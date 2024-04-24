import jwt from "jsonwebtoken"
import { SECRET } from "../config.js"

export const authRequired = (req,res,next) => {
    //console.log(req.headers)
    //console.log('token validado');

    const {token} = req.cookies
    if(!token) return res.status(401).json({'message': 'No tiene token, No esta autorizado'})

    jwt.verify(token, SECRET, (err, user) =>{
        if (err)  return res.status(403).json({'message': 'Error en el token'});
        console.log(user)
        req.user = user
        next()
    })

    //console.log(token)
    //next()
}