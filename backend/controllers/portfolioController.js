const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");

const transporter = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key: process.env.API_SENDGRID,
    },
  })
);

const sendEmailController = (req, res) => {
  try {
    const { name, email, msg } = req.body;
    if (!name || !email || !msg) {
      res.status(404).send({
        success: false,
        message: "You Must Fill All Fields",
      });
    }

    transporter.sendMail({
      to: "yossefmahmoud442004@gmail.com",
      from: "yossefmahmoud442004@gmail.com",
      subject: "Contact Message",
      html: `
        <h5>Detail Information</h5>
        <ul>
            <li><p>Name: ${name}</p></li>
            <li><p>Email: ${email}</p></li>
            <li><p>Message: ${msg}</p></li>
        </ul>
        `,
    });

    return res.status(200).send({
      success: true,
      message: "Your Message Send Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Send Email API Error",
      error,
    });
  }
};

module.exports = { sendEmailController };
