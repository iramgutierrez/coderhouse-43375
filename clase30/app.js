import express from 'express';
import nodemailer from 'nodemailer';
import twilio from 'twilio';

const app = express();

const TWILIO_ACCOUNT_SID = 'xxxxxxxxxxxxxxxxxxx';
const TWILIO_AUTH_TOKEN = 'xxxxxxxxxxxxxxxxx';
const TWILIO_PHONE_NUMBER = '+1112121';

const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

app.get('/sms', async(req, res) => {
    let result = await client.messages.create({
        body: 'Usted fue Chemseado',
        from: TWILIO_PHONE_NUMBER,
        to: '+541159288127',
    });
    res.send({status: "success",result:"sms enviado"});
})

app.get('/mail', async(req, res) => {
    let result= await transporter.sendMail({
        from: 'xxxxxxxxxxxx',
        to: 'xxxxxx',
        subject: 'Usted fue Chemseado',
        html: `<div>
                    <h1>Usted fue Chemseado</h1>
                    <img src="cid:chems"/>
                </div>`,
        attachments: [{
            filename: 'chems.PNG',
            path: './src/chems.PNG',
            cid: 'chems'
        }]
    })
    res.send({status: "success",result:"mail enviado"});
})

app.listen(3000, () => {
    console.log('Servidor web iniciado');
})

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: 'xxxxxxxx@gmail.com',
        pass: 'asdasdasdasd'
    }
});

