import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from "nodemailer";

export default function contact(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, phone, message } = req.body;    
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: process.env.MY_APP_EMAIL,
        pass: process.env.MY_APP_PASS
    },
  });

  const toHostMailData = {
    from: email,
    to: process.env.MY_APP_RECEIVER,
    replyTo: email,
    subject: `Contact submission from ${name}`,
    html: `
    <p><b>Name</b></p>
    <p>${name}</p>
    <p><b>Email</b></p>
    <p>${email}</p>
    <p><b>Phone</b></p>
    <p>${phone}</p>
    <p><b>Message</b></p>
    <p>${message}</p>
    `
  };

  transporter.sendMail(toHostMailData, function(err, info) {
    if(err) console.log(err);
    else console.log(info);
  });
  return res.send("your message is sent");
}


