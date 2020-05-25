const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        // replace with admin mail
        user: "anastasia.satysheva@gmail.com",
        // replace with admin mail password
        pass: ""
    }
});


async function sendEmail(email, notes) {
    const mailOptions = {
        // replace with sender mail
        from: "anastasia.satysheva@gmail.com",
        // replace with sender password
        to: email,
        subject: "testing",
        text: notes
    }

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log(info.response);
    } catch (err) {
        console.log(err.message);
    }
}

module.exports = sendEmail;