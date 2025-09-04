"use server";

import nodemailer from "nodemailer";
import { logger } from "@/lib/logger";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

logger.info("Email transporter initialized", {
  context: "sendEmail",
  data: {
    host: "smtp.gmail.com",
    port: 465,
    user: process.env.EMAIL_USER ? "set" : "missing",
  },
});

export async function sendEmail(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const county = formData.get("county");
  const vendor = formData.get("vendor");
  const message = formData.get("message");

  logger.debug("Received form submission", {
    context: "sendEmail",
    data: {
      name,
      email,
      county,
      vendor,
      message: message ? "provided" : "missing",
    },
  });

  if (!name || !email) {
    logger.warn("Missing required fields in form data", {
      context: "sendEmail",
      data: { name: !!name, email: !!email },
    });
    return { success: false, error: "Missing required fields" };
  }

  const emailData = {
    from: `"Integrated Solar Cooking Kenya" <${process.env.EMAIL_USER}>`,
    to: "judefabiano99@gmail.com",
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
  };

  logger.info("Attempting to send email", {
    context: "sendEmail",
    data: {
      to: emailData.to,
      from: emailData.from,
      subject: emailData.subject,
    },
  });

  try {
    const info = await transporter.sendMail(emailData);

    logger.info("Email sent successfully", {
      context: "sendEmail",
      data: {
        messageId: info.messageId,
        response: info.response,
      },
    });

    return { success: true };
  } catch (error) {
    logger.error("Failed to send email", {
      context: "sendEmail",
      data: {
        error: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
      },
    });

    return { success: false, error: "Failed to send email" };
  }
}
