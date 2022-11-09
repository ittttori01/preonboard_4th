const userService = require("../services/userService");

/**
 *  @사용자_회원가입
 *  @route POST /user/signup
 *  @access public
 *  @err
 */

const signUp = async(req,res) => {

    const {name , email, phone, password }  = req.body;

    await userService.signUp(name,email,phone,password);
    
    res.status(200).send("저장되었습니다.");
}


/**
 *  @사용자_로그인
 *  @route POST /user/login
 *  @access public
 *  @err
 */
const logIn = async(req,res) => {

    const {email,password} = req.body;

    let token = await userService.logIn(email,password);

    res.status(200).json({message : "로그인되었습니다", token : token});
}

module.exports = {
    signUp,
    logIn,
}