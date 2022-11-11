const User = require("../models/User");
const Error = require("../middlewares/errorConstructor");

const checkEmail = async(email) => {

    let registerd = await User.findOne({ email:email });
  
    return registerd;
} 

const signUp = async(name,email,phone,user_id,salt,password) => {
  
      let user = new User({
        name,
        email,
        phone,
        user_id,
        salt,
        password
      });

      user.name = name;
      user.email = email;
      user.phone = phone;
      user.user_id = user_id;
      user.salt = salt,
      user.password = password;

      await user.save((err) => {

          if(err) throw new Error("회원정보 저장 실패",500);
          return true;
      });

   

};

module.exports = {
    checkEmail,
    signUp
}