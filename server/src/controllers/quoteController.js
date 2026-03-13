import Quote from "../models/Quote.js";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const createQuote = async (req, res) => {
  try {
    const { name, email, organization, projectType, message } = req.body;

    if (!name || !email || !projectType || !message) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields"
      });
    }

    const quote = await Quote.create({
      name,
      email,
      organization,
      projectType,
      message
    });

    await resend.emails.send({
      from: "CodeHeR <info@codeherllc.com>",
      to: ["info@codeherllc.com"],
      subject: "New Quote Request - CodeHeR Website",
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    return res.status(201).json({
      success: true,
      message: "Quote submitted successfully",
      data: quote
    });

  } catch (error) {
    console.error("Create quote error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};