import { HTML_TEMPLATE } from "@/utils/email-template";
import { MongoClient } from "mongodb";
import nodemailer from "nodemailer";

const handler = async (req, res) => {
  if (req.method === "POST") {
    let client;
    const connectionString = `mongodb+srv://${process.env.NEXT_PUBLIC_MONGO_USERNAME}:${process.env.NEXT_PUBLIC_MONGO_PASS}@cluster0.i1lr5rj.mongodb.net/`;
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      !message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input" });
      return;
    }
    const newMessage = {
      email,
      name,
      message,
    };

    const transporter = nodemailer.createTransport({
      service: process.env.NEXT_PUBLIC_EMAIL_SERVICE,
      host: process.env.NEXT_PUBLIC_EMAIL_HOST,
      port: process.env.NEXT_PUBLIC_EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
        pass: process.env.NEXT_PUBLIC_GMAIL_APP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
      to: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
      subject: "A Message from my Portfolio Website",
      // text: `Name: ${newMessage.name} \n
      // Email Address: ${newMessage.email} \n
      // Message: ${newMessage.message}`,
      html: HTML_TEMPLATE(
        newMessage.name,
        newMessage.email,
        newMessage.message
      ),
    };

    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error("Error sending email: ", err);
          reject(err);
        } else {
          console.log("Email sent: ", info.response);
          resolve(info);
        }
      });
    });

    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      return res.status(500).json({ message: "Could not connect to db" });
    }

    const db = client.db();

    try {
      await db.collection("messages").insertOne(newMessage);
      return res.status(201).json({
        message: "Sent message successfully!",
      });
    } catch (error) {
      return res.status(500).json({ message: "message failed to send!" });
    } finally {
      client.close();
    }
  }
};

export default handler;
