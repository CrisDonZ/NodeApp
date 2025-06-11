import jwt from 'jsonwebtoken';
import 'dotenv';

export function generarToken(email) {
    return jwt.sign({email}, process.env.JWT_SECRET, {expiresIn: '1h'});
}

export function verificarToken(req, res, next){

    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if(!token){
        res.status(401).json({error: 'Token requerido'});
    }

    try {
        const dataToken = jwt.verify(token.trim(), process.env.JWT_SECRET)
        req.emailConectado = dataToken.email;
        
        next();

    } catch (e) {
         res.status(401).json({error: 'Token no válido'})
    }
    
}

