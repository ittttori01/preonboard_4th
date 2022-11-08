const userDao = require("../dao/userDao");
const Error = require("../middlewares/errorConstructor");
const userInfoValidate = require("../utils/userInfoValidate");

const signUp = async (name,email,phone,password) => {
    
    if(!name) {
        
        throw new Error("이름은 필수 입력 항목입니다. ", 400);
    }

    if(!email) {

        throw new Error("이메일은 필수 입력 항목입니다. ", 400);
    }

    if(!password) {

        throw new Error("비밀번호는 필수 입력 항목입니다. ", 400);
    }

    const passwordInfo = await userInfoValidate.signUpValidate(email,password);
    
    await userDao.signUp(name,email,phone,passwordInfo.salt,passwordInfo.hashPassword);

    return true;
}

const logIn = async(email,password) => {

    let token = await userInfoValidate.logInValidate(email,password); 

    return token;

}

module.exports = {
    signUp,
    logIn
}