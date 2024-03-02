import express from 'express'; //importar express con Module.exports
import servicesRoutes from './routes/servicesRoutes.js'; //importar el archivo de rutas

//confirgurar app

const app = express();


//definr ruta
app.use('/api/services', servicesRoutes);

//definir puerto

const port = process.env.PORT || 3000;

//arrancar la app

app.listen(port, () => {
    console.log('el servidor esta corriendo en el puerto', port);
});