const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });


exports.createContactEnquiry = async (req, res) => {
  const contact = req.body;
  const { email } = req.body;
  console.log(contact);

  try {


    const transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
    });



    const options = {
      from: "alerts@multiplexdrone.com",
      to: 'marketing@multiplexdrone.com',
      //cc: "aditya@multiplexdrone.com",
      subject: "New Marketing ContactUs Enquiry | Multiplex Drone Group Enquires",
      text: "New Marketing ContactUs Enquiry | Multiplex Drone Group Enquires",
      html: `<h2>Multiplex Drone Group</h2><br/> <h3>New Marketing ContactUs Enquiry</h3> <p>Name: ${contact.name}</p> <p>Email Id: ${contact.email}</p> <p>Mobile Number: ${contact.contactnumber}</p> <p>Description: ${contact.message}</p>   <b>Thankyou!</b>`,
    };
    transporter.sendMail(options, function (err, info) {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Sent: " + info.response);
    });

    // await newContact.save();
    // res.status(201).json(newContact);
  } catch (error) {
    console.log(error);
    res.status(409).json(error.message);
  }
};

