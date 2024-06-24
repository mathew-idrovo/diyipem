
import { NextResponse } from "next/server";
import { connectDB } from "../../libs/mongodb";
import user from "../../models/user";

export async function GET(){
    await connectDB()

    const users = await user.find()
    return NextResponse.json(users)
}

export async function POST(request: { json: () => any; }){
    await connectDB()
    const data = await request.json()
    const users = await user.create(data)
    return NextResponse.json(users)
}