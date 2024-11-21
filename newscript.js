const express=require(`express`)

const app=express()

const PORT=8000

app.use(express.urlencoded({extended:false}) )

app.set(`view engine`,`ejs`)

app.set(`views`,path.resolve(`./views`))




app.get(`/lienzo/userprofile`,(req,res)=>{
    res.render(`profile`)
})


app.post(`/lienzo/otpverify`,(res,req)=>{

    const otp = Math.floor(Math.random()*10000);
    console.log(otp);
    


    const { OAuth2Client } = require('google-auth-library');
    const { error } = require('console');
    const { oauth2 } = require('googleapis/build/src/apis/oauth2');
    
    
    const CLIENT_ID = "590649544-25m5e3a0gq0h4957lph16p7c1omblgaj.apps.googleusercontent.com"
    const CLIENT_SECRET = "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";
    const REDIRECT_URI="https://developers.google.com/oauthplayground";
    const REFRESH_TOKEN = "1//04R-GuqEZX2muCgYIARAAGAQSNwF-L9IrC5e4o1WrI3bLLcM4yVQJ9Y1ApoVNJyjjZ5oO_bFcD6ofI9jkDP1RkyHgx5y-tg6sjDY";
    
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
                // to: 'bavdhanekunal90@gmail.com',
                to: 'biratop18@gmail.com',
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


    // if(!otp) return res.render(`learn`)   

       
        
    
    app.post(`/lienzo/verify`,(req,res)=>{
        
        const {otpinput}=req.body
        
        console.log(otp);
        let checkemaillotp=(otpinput[0]+otpinput[1]+otpinput[2]+otpinput[3]);
        
        if(checkemaillotp==otp){
            
            console.log("otp is verified");
            
        }
        
        else if (otpinput!=otp){
            
            res.render(`singup`)
        }
        
        
        
        
    })
    
})



app.post(`/lienzo/verify`,(req,res)=>{
        
    const {otpinput}=req.body
    
    console.log(otp);
    let checkemaillotp=(otpinput[0]+otpinput[1]+otpinput[2]+otpinput[3]);
    
    if(checkemaillotp==otp){
        
        console.log("otp is verified");
        
    }
    
    else if (otpinput!=otp){
        
        res.render(`singup`)
    }
    
    
    
    
})


app.listen(PORT,()=>{
    console.log(`server is connected on port ${PORT}`);
    
})