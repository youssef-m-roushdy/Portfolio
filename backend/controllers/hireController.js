const Hire = require("../models/hire");
const { validationResult } = require("express-validator");
const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");

const transporter = nodemailer.createTransport(
    sendGridTransport({
      auth: {
        api_key: process.env.API_SENDGRID,
      },
    })
);

// Create a new hiring offer
const createHireOffer = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    try {
      const { name, company, email, position, number, offerMessage } = req.body;
  
      const newHire = new Hire({
        name,
        company,
        email,
        number,
        position,
        offerMessage,
      });
  
      await newHire.save();
  
      const mailOptions = {
        to: "yossefmahmoud442004@gmail.com", // Change to dynamic email if needed
        from: "yossefmahmoud442004@gmail.com",
        subject: "Job Offer Letter",
        html: `
          <h5>Job Offer</h5>
          <p>Name: ${name}</p>
          <p>Contact Number: ${number}</p>
          <p>Company: ${company}</p>
          <p>Position: ${position}</p>
          <p>Message: ${offerMessage}</p>
        `,
      };
  
      // Send the email and handle the promise
      await transporter.sendMail(mailOptions);
  
      res.status(201).json({
        message: "Hiring offer sent, please wait for the page owner to respond.",
        hire: newHire,
      });
    } catch (error) {
      console.error("Error creating Hire Offer:", error);
  
      // Handle specific error cases
      if (error.response) {
        // Log SendGrid-specific error response
        console.error("SendGrid Error Response:", error.response.body);
      }
  
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
  };

// Get all hiring offers
const getAllHireOffers = async (req, res) => {
  try {
    const hires = await Hire.find();
    res.status(200).json({ hires });
  } catch (error) {
    console.error("Error fetching hiring offers:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

// Get a hiring offer by ID
const getHireOfferById = async (req, res) => {
  try {
    const hire = await Hire.findById(req.params.id);
    if (!hire) { // Fixed 'project' to 'hire'
      return res.status(404).json({ message: "Hiring offer not found" });
    }
    res.status(200).json({ hire }); // Changed 'project' to 'hire'
  } catch (error) {
    console.error("Error fetching hiring offer by ID:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

const sendHireResponseMessage = () => {
    return (req, res) => {
        try {
            const { isAccepted, name, email } = req.body;

            const subject = "Response to Your Hiring Offer";
            const responseMessage = isAccepted 
                ? `Dear ${name},<br><br>Thank you for offering me this position. I am excited about the opportunity and will reach out soon to discuss further details.`
                : `Dear ${name},<br><br>Thank you for your generous offer. I regret to inform you that I must decline at this time. I appreciate the opportunity and hope we can connect again in the future.`;

            transporter.sendMail({
                to: "yossefmahmoud442004@gmail.com",
                from: "yossefmahmoud442004@gmail.com",
                subject: subject,
                html: `
                    <h5>Hiring Offer Response</h5>
                    <p>${email}</p>
                    <p>${responseMessage}</p>
                `,
            });

            return res.status(200).send({
                success: true,
                message: "Your message has been sent successfully.",
            });
        } catch (error) {
            console.error(error);
            return res.status(500).send({
                success: false,
                message: "Error sending email.",
                error,
            });
        }
    };
};
module.exports = {
  createHireOffer,
  getAllHireOffers,
  getHireOfferById,
  sendHireResponseMessage
};
