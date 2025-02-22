// app/api/hello/route.js
// export async function GET() {
//     return new Response('Hello, Next.js server is running!');
// }

import User from "../../models/user.model";
import bcrypt from "bcryptjs"

export const POST = async (req,res) => {
 try {
  const {username, email, password} = req.body;

  if (!username || !email || !password) {
    res.status(400).json({
      success: false,
      message: 'Missing required fields'
    })
  }

  // Add your database logic here to save user to the database

  const userExists = await User.findOne({email}).exec()

  if (userExists) {
    res.status(400).json({
      success: false,
      message: 'User already exists'
    })
  }

  const salt = await bcrypt.genSalt(12)
  const hashedPassword = await bcrypt.hash(password, salt)

  const newUser = new User({
    username,
    email,
    password: hashedPassword
  })

  await newUser.save()
  
  res.status(200).json({
    success: true,
    message: "User registered successfully",
    newUser
})

 } catch (error) {
      res.status(500).json({
        success:false,
        message: "internal Server error: " + error.message
      })
 }
  
}



