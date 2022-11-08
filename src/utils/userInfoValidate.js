const Error = require("../middlewares/errorConstructor");
const userDao = require("../dao/userDao");
const crypto = require("crypto");
const jwt = require('jsonwebtoken');
const config = require("../../config.json");
const secretTokenKey = config.secretTokenKey;

const signUpValidate = async (email,password) => {
   
    const emailExist = await userDao.checkEmail(email);
 
    if(emailExist) {

        throw new Error("이미 등록된 이메일 입니다.",400);
    }
    
    const validationEmail = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    
    if (!validationEmail.test(email)) {

        throw new Error("이메일 형식이 올바르지 않습니다.", 400);

    }

    const passwordInfo = {
        salt : await crypto.randomBytes(128).toString('base64'),
        hashPassword : await crypto.createHash('sha512').update(password + salt).digest('hex')
    }

    
    return passwordInfo ;
}

const logInValidate = async(email,password) => {

   const userInfo = await userDao.checkEmail(email);

   if(!userInfo) {

       throw new Error ("회원가입이 되어있지 않은 이메일 입니다. 회원가입을 해주세요",400);
   }

   const salt = userInfo.salt ;

   const registeredPassword = userInfo.password;

   const hashPassword = await crypto.createHash('sha512').update(password + salt).digest('hex');

   if(registeredPassword !== hashPassword) {
       throw new Error ("비밀번호가 일치하지 않습니다.",400);
   }

    const tokenInfo = {
        
        email : userInfo.email
    };

    const jwtToken = await jwt.sign(tokenInfo,secretTokenKey,{ algorithm: 'HS256', expiresIn: '7d' });

    return jwtToken;

}

module.exports = {
    signUpValidate,
    logInValidate
}