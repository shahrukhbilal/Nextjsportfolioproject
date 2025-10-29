import  connectDB  from "@/lib/mongodb";
import Contact from "@/model/Contact";
import { text } from "express";
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    await connectDB();
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "All fields required" }), {
        status: 400,
      });
    }
  // save the messages in mongodb 
    await Contact.create({ name, email, message });

    // send messages on my email adreess

   const transporter= nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
   });

   const mailoptions= {
    from: email,
    to : process.env.EMAIL_USER,
    subject : `You have a new message from ${email} `,
    text : `
    Name: ${name}
    Email: ${email}
    Message: ${message}
    `
   }
   await transporter.sendMail(mailoptions)
   console.log("Email:", process.env.EMAIL_USER);


    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error saving message:", error);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}
