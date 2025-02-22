// app/api/hello/route.js
// export async function GET() {
//     return new Response('Hello, Next.js server is running!');
// }

import connectDB from "../../lib/db";
import User from "../../models/user.model";
import bcrypt from "bcryptjs"

export const POST = async (request) => {

 try {
  await connectDB()
  const {username, email, password} = await request.json();

  if (!username || !email || !password) {
   return new Response(
    JSON.stringify({
      success: false,
      message: 'Please provide all required fields'
    }), 
    {status: 400}
   )
  }

  // Add your database logic here to save user to the database

  const userExists = await User.findOne({email}).exec()

  if (userExists) {
    return new Response(
      JSON.stringify({
        success: false,
        message: 'User already Exists'
      }), 
      {status: 400}
     )
  }

  const salt = await bcrypt.genSalt(12)
  const hashedPassword = await bcrypt.hash(password, salt)

  const newUser = new User({
    username,
    email,
    password:hashedPassword
  })

  await newUser.save()

  return new Response(
    JSON.stringify({
      success: true,
      message: 'User registered successfully',
      newUser
    }), 
    {status: 200}
   )

 } catch (error) {
  return new Response(
    JSON.stringify({
      success: false,
      message: "Internal Server Error: " + error.message,
    }),
    { status: 500 }
  )
 }
  
}



