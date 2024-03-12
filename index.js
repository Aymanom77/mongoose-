const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Charger les variables d'environnement depuis le fichier .env

// Importer le modèle de personne
const Person = require('./person');

// Créer une application Express
const app = express();

// Middleware pour parser le JSON
app.use(express.json());



// Route pour créer une nouvelle personne
app.post('/person', async (req, res) => {
    try {
        const { nom, age, favoriteFoods } = req.body;
        const newPerson = new Person({ nom, age, favoriteFoods });
        await newPerson.save();
        res.status(201).json(newPerson);
    } catch (error) {
        console.error("Erreur lors de la création d'une personne :", error);
        res.status(500).json({ message: "Erreur lors de la création d'une personne" });
    }
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
