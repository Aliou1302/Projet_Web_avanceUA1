import { createTransport } from "nodemailer";

export async function contactSendMail(userMail) {
  const transporter = createTransport({
    service: "gmail",
    auth: {
      user: "jabirkagone@gmail.com",
      pass: "aphh fvfs zgaj grxi",
    },
  });

  const mailOptions = {
    from: "jabirkagone@gmail.com",
    to: userMail,
    subject: "Groupe 3 web anvancee",
    text: "Next Js mail depuis web app evenements fonctionnalite d'envoie de mail.",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
