const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

// POST /api/contact
router.post("/", async (req, res) => {
  const {
    name,
    email,
    phone,
    category,
    budget,
    timeline,
    description,
    confidential,
  } = req.body;

  // Basic validation
  if (!name || !email || !description) {
    return res
      .status(400)
      .json({ success: false, error: "Missing required fields." });
  }

  // Configure SMTP transport using environment variables for security
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"Elite Finder Contact" <${process.env.SMTP_USER}>`,
    to: "info@elitefinder.com",
    subject: "New Confidential Inquiry",
    text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Category: ${category || "N/A"}
Budget: ${budget || "N/A"}
Timeline: ${timeline || "N/A"}
Confidential: ${confidential ? "Yes" : "No"}
Description:
${description}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    res.status(500).json({ success: false, error: "Failed to send email." });
  }
});

module.exports = router;
