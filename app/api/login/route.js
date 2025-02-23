import connectDB from "../../lib/db";
import User from "../../models/user.model";
import {NextResponse} from 'next/server'
import jwt from 'jsonwebtoken'
import bcrypt from "bcryptjs";

export const POST = async (request) => {

    try {
     await connectDB() 

        const {username, password} = await request.json();

        if (!username || !password) {
            return NextResponse.json({
                success: false,
                message: "Please provide both username and password"
            }, { status: 400 });
        }

        const user = await User.findOne({username}).exec()

        if(!user) {
            return NextResponse.json({
                success: false,
                message: "User not found"
            }, { status: 404 });
        }

        const isMatch = await bcrypt.compare( password, user.password,)

        if (!isMatch) {
            return NextResponse.json({
                success: false,
                message: "Invalid credentials"
            }, { status: 401 });
        }

        const accessToken = jwt.sign(
            {code: user._id},
            process.env.JWT_SECRET,
            {expiresIn: '1h'}
    )

    const refreshToken = jwt.sign(
        {code: user._id},
        process.env.JWT_SECRET,
        {expiresIn: '1d'}
)

        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            maxAge:  10 * 3600 * 1000
        })

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            maxAge: 1* 24 * 3600 * 1000
        })

        return NextResponse.json({
            success: true,
            message: "User authenticated successfully"
        }, {status: 200});

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Internal Server Error: " + error.message
        }, { status: 500 });
    }
   
    
}