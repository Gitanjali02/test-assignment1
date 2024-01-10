import { NextResponse } from "next/server";
import prisma from "@/prisma";
export async function POST(req: Request) {
    try {
        const data = await req.json();
        const response = await prisma.contact.create({
            data: {
                email: data.email,
                message: data.message,
                fullName: data.fullName
            }
        })

        if(!response) return NextResponse.json({message:"Something went wrong"}, {status: 500});
        return NextResponse.json(response, {status: 200})
    } catch (error) {
        return NextResponse.error();
    }
}