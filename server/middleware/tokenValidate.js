import jwt from 'jsonwebtoken';

export const AuthenticateToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const isCustomauth = token.length < 500;

        let decodedData;

        if(token && isCustomauth){
            decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY)
            req.userId = decodedData? decodedData.id:null;
        } else {
            decodedData = jwt.decode(token);
            req.userId = decodedData? decodedData.sub:null;
        }
        next();
    } catch (error) {
        console.log(error)
    }
}