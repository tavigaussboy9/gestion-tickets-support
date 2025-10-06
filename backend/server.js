const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connecté à MongoDB'))
    .catch(err => console.error('Erreur de connexion à MongoDB:', err));

// Routes
app.get('/', (req, res) => {
    res.send('API de gestion de tickets de support');
});

app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});