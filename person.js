// person.js
const mongoose = require('mongoose');

// Définir le schéma de personne
const personSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    age: { type: Number },
    favoriteFoods: [{ type: String }]
});

// Créer le modèle de personne à partir du schéma
const Person = mongoose.model('Person', personSchema);

module.exports = Person;
