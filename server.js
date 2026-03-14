import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sendEmailHandler from './api/send-email.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
    // Simulamos el objeto res de Next.js/Vercel
    const vercelRes = {
        status: (code) => {
            res.status(code);
            return vercelRes;
        },
        json: (data) => {
            res.json(data);
            return vercelRes;
        },
        end: (text) => {
            res.send(text);
            return vercelRes;
        },
        setHeader: (name, value) => {
            res.setHeader(name, value);
            return vercelRes;
        }
    };
    
    await sendEmailHandler(req, vercelRes);
});

app.listen(3001, () => {
  console.log('Servidor API Local corriendo en puerto 3001');
});
