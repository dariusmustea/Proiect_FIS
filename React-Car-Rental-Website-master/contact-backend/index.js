const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

// Use CORS middleware with specific origin
app.use(cors({
  origin: "http://localhost:3000", // your frontend URL
}));

app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "musteadarius@gmail.com",
      pass: "Crocna102",
    },
  });

  const mailOptions = {
    from: email,
    to: "mariuscotoi14@gmail.com",
    subject: `Contact from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
