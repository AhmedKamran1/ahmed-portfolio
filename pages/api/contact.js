import { MongoClient } from "mongodb";
import nodemailer from "nodemailer";

const handler = async (req, res) => {
  if (req.method === "POST") {
    let client;
    const connectionString = `mongodb+srv://${process.env.NEXT_PUBLIC_MONGO_URL}:${process.env.NEXT_PUBLIC_MONGO_PASS}@cluster0.i1lr5rj.mongodb.net/`;
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
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "ahmed.kamran11122@gmail.com",
        pass: process.env.NEXT_PUBLIC_GMAIL_APP_PASS,
      },
    });

    const mailOptions = {
      from: "ahmed.kamran11122@gmail.com",
      to: "ahmed.kamran11122@gmail.com",
      subject: "A Message from my Portfolio Website",
      text: `Name: ${newMessage.name} \n
      Email Address: ${newMessage.email} \n
      Message: ${newMessage.message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email: ", error);
      } else {
        console.log("Email sent: ", info.response);
      }
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
        message: "Successfully stored message!",
      });
    } catch (error) {
      return res.status(500).json({ message: "Storing message failed!" });
    } finally {
      client.close();
    }
  }
};

export default handler;
