import { NextResponse } from "next/server";
import prisma from "@/prisma";
export async function POST(req: Request) {
    const data = await req.json();
    const response = await prisma.user.create({
        data: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
        }
    })

    return NextResponse.json(response, { status: 200 });
}

export async function GET() {
    return NextResponse.json({ message: "Hello from route" })
}