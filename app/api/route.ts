import { NextResponse } from "next/server";

let data = { record: { email: "test12@gmail.com" } }

export async function GET(request: Request) {
    return NextResponse.json({
        status: 200,
        data
    })
}

export async function POST(request: Request) {
    const req = await request.json();

    data = req;

    return NextResponse.json({
        status: 200,
        data,
        message: "Data has been updated"
    })
}