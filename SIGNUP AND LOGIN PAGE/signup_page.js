
// OTP GENERATION
    const otp = Math.floor(Math.random()*1000000);
const nodemailer = require('nodemailer');
const {google} = require('googleapis');
const { OAuth2Client } = require('google-auth-library');
const { error } = require('console');
const { oauth2 } = require('googleapis/build/src/apis/oauth2');

const CLIENT_ID = "590649544-25m5e3a0gq0h4957lph16p7c1omblgaj.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI="https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = "1//04UKWyddBgMrDCgYIARAAGAQSNwF-L9Irq6rVU4cWAo_RJJJ3rSF1oo2Gf8p5v2AuU2CeT_6P5tmA2UwxRsMKMVVt-Z2dHye5tJU";

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI);
oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN});
async function  sendMail(){

    try {
        const accessToken= await oAuth2Client.getAccessToken();
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user : 'fashionclubserver@gmail.com',
                clientId : CLIENT_ID,
                clientSecret : CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken : accessToken,
            }
        });

        const mailOptions = {
            from: 'fashionclubserver@gmail.com',
            to: 'bavdhanekunal90@gmail.com',
            subject : "Your One-Time Password (OTP) for Verification by LIENZO",
            text : "hello",
            html:`We have received a request to verify your account. To complete this process, please use the One-Time Password (OTP) provided below. This OTP is required to proceed with your verification and will expire in 10 minutes for security purposes.

Your OTP: <h1>${otp}</h1>

If you did not request this verification, please ignore this email, and your account will remain secure.

For any assistance or questions, feel free to contact our support team.

Thank you for your attention,
LIENZO`,
        };
        const result = await transport.sendMail(mailOptions)
        return result;
    } catch (error) {
        return error;
    }
}

sendMail().then((result)=>console.log('Email is sent',result))
.catch((error)=>console.log(error.message));