"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendEmail(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const county = formData.get("county");
  const vendor = formData.get("vendor");
  const message = formData.get("message");


  try {
    await transporter.sendMail({
      from: `"Solar Cooking Kenya" <${process.env.EMAIL_USER}>`,
      to: "asulmacentre@yahoo.com",
      replyTo: email as string,
      subject: `New Inquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>County:</strong> ${county}</p>
        <p><strong>Preferred Vendor:</strong> ${vendor}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to send email" };
  }
}
