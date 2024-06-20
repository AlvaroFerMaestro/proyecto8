require ("dotenv").config();
const mongoose = require("mongoose");
const Foto = require("../../api/models/fotos");

const Allfotos = [
    {
        nombre: "León en la Sabana",
        imagen: "https://static.wikia.nocookie.net/reinoanimalia/images/b/b5/Le%C3%B3n_wiki2.png/revision/latest?cb=20130303082204&path-prefix=es.",
        categoria: "animales",
        verified: true
    },
    {
        nombre: "Ferrari Rojo",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Orange_Enzo_Ferrari_%287191948164%29.jpg/640px-Orange_Enzo_Ferrari_%287191948164%29.jpg",
        categoria: "coches",
        verified: false
    },
    {
        nombre: "Montañas Nevadas",
        imagen: "https://blog.fuertehoteles.com/wp-content/uploads/2015/11/Sierra-Nevada1.jpg",
        categoria: "paisajes",
        verified: true
    },
    {
        nombre: "Avión en Despegue",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6z8NL19X4x3etbZKnXXYU0VZyiCUDvPErMA&s",
        categoria: "aviones",
        verified: false
    },
    {
        nombre: "Tren de Alta Velocidad",
        imagen: "https://i.ytimg.com/vi/A27MzI3FIR4/maxresdefault.jpg",
        categoria: "trenes",
        verified: true
    },
    {
        nombre: "Gato en el Jardín",
        imagen: "https://sosfelinos.org/wp-content/uploads/2018/08/Jardin-Protegido-Principal.jpg",
        categoria: "animales",
        verified: false
    },
];

mongosee.connect(process.env.DB_URL).then(async () =>{
    try {
        await Foto.collection.drop();
        console.log("Fotos eliminadas");
        await Foto.insertMany(Allfotos);
        console.log("Todas las fotos subidas correctamente");
    } catch (error) {
        console.log("Comprueba la semilla");
    }
})
.finally(() => {
    mongosee.disconnect();
})