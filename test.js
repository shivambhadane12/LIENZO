const express = require('express');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const app = express();
app.use(express.json());

const CLIENT_ID = "590649544-25m5e3a0gq0h4957lph16p7c1omblgaj.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = "1//04R-GuqEZX2muCgYIARAAGAQSNwF-L9IrC5e4o1WrI3bLLcM4yVQJ9Y1ApoVNJyjjZ5oO_bFcD6ofI9jkDP1RkyHgx5y-tg6sjDY";

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail(otp) {
    try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'fashionclubserver@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken,
            }
        });

        const mailOptions = {
            from: 'fashionclubserver@gmail.com',
            to: 'bavdhanekunal90@gmail.com',
            subject: 'Your OTP Code',
            html: `<p>Your OTP code is: <strong>${otp}</strong></p>`
        };

        const result = await transport.sendMail(mailOptions);
        return result;
    } catch (error) {
        return error;
    }
}

app.post('/send-otp', async (req, res) => {
    const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
    try {
        await sendMail(otp);
        res.json({ message: 'OTP has been sent to your email!' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to send OTP' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
