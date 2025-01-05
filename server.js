import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();

// Middleware CORS mis à jour pour accepter le port 5174
app.use(cors({
  origin: ['http://localhost:5173', 'https://turbohaven.netlify.app/',], // Accepte les deux ports
  credentials: true
}));
app.use(express.json());

// Middleware de logging pour le débogage
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Route d'authentification Discord
app.post('/auth/discord/callback', async (req, res) => {
  const { code } = req.body;
  
  console.log('Code reçu:', code); // Log pour déboguer

  try {
    // Échange du code contre un token
    const tokenResponse = await fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      body: new URLSearchParams({
        client_id: process.env.DISCORD_CLIENT_ID,
        client_secret: process.env.DISCORD_CLIENT_SECRET,
        code,
        grant_type: 'authorization_code',
        redirect_uri: process.env.REDIRECT_URI,
        scope: 'identify',
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const tokenData = await tokenResponse.json();
    console.log('Token response:', tokenData); // Log pour déboguer

    if (tokenData.error) {
      console.error('Erreur token Discord:', tokenData);
      return res.status(400).json({ error: "Erreur d'authentification Discord" });
    }

    // Récupération des informations utilisateur
    const userResponse = await fetch('https://discord.com/api/users/@me', {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
      },
    });

    const userData = await userResponse.json();
    console.log('User data:', userData); // Log pour déboguer

    // Envoi des informations utilisateur au client
    res.json({
      id: userData.id,
      username: userData.username,
      avatar: `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.png`,
    });

  } catch (error) {
    console.error('Erreur serveur détaillée:', error);
    res.status(500).json({ error: 'Erreur serveur', details: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'execution sur le port ${PORT}`);
  console.log('Variables d\'environnement:');
  console.log('DISCORD_CLIENT_ID:', process.env.DISCORD_CLIENT_ID);
  console.log('REDIRECT_URI:', process.env.REDIRECT_URI);
});