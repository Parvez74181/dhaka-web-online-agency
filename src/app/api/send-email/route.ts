// app/api/send-email/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { fullName, email, phone, subject, aboutProject: message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "mdp020479@gmail.com,tanjil98402080@gmail.com,zerodeft01@gmail.com",
      subject: subject || "Schedule a Consultation",
      html: `
      <div><strong>Name: </strong>${fullName}</div>
      <div><strong>Email: </strong>${email}</div>
      <div><strong>Phone: </strong>${phone}</div>
      <div><strong>Message: </strong>${message}</div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, info }, { status: 200 });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
