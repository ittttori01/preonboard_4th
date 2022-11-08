const User = require("../models/User");
const Error = require("../middlewares/errorConstructor");

const checkEmail = async(email) => {

    let registerd = await User.findOne({ email:email });
  
    return registerd;
} 

const signUp = async(name,email,phone,salt,password) => {

      let user = new User({
        name,
        email,
        phone,
        salt,
        password
      });

      user.name = name;
      user.email = email;
      user.phone = phone;
      user.salt = salt,
      user.password = password;

      await user.save();

      return true;

};

module.exports = {
    checkEmail,
    signUp
}