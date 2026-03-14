import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

async function test() {
    console.log('Testing SMTP connection with:');
    console.log('User:', process.env.EMAIL_USER);
    console.log('Pass:', process.env.EMAIL_PASS ? '***' : 'not set');

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.verify();
        console.log('Connection verified successfully!');
    } catch (e) {
        console.error('Connection failed:', e.message);
    }
}
test();
