const User = require("../model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  
  if ( !user ) return res.status(400).json({ message: "user does'nt exsist" });
  
  const isValid = await bcrypt.compare(password , user.password )
// const isValid = true

  if (!isValid){
      return res.status(400).json({ message: "password did'not mathced" });
  }

    const token = jwt.sign({ name : user.name , email : user.email , password : user.password }, process.env.JWT_SECRET, { expiresIn: "4h" });
    return res.status(200).send({token})
};



const signUp = async (req, res) => {
  const { name, email, password, phone } = req.body;

  const user = await User.findOne({ email });

  if (user) return res.json({ message: "user already exsist " });

  const userPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    name ,
    email , 
    phone ,
    password: userPassword,
  });

  const token = jwt.sign(
    {   name: newUser.name, email: newUser.email, password: newUser.password    },
        process.env.JWT_SECRET
  );

    return res.status(201).json({token});
};

module.exports = { login, signUp };
