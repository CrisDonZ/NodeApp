
import swaggerAutogen from 'swagger-autogen';

const outputFile = './swagger.json';
const endPointFiles = ['./app.js'];

const doc = {
    info: {
        title: 'Api de adopción de mascotas',
        description: 'La API permite gestionar la adopción de mascotas y usuarios de la veterinariaHH'
    },
    host: 'localhost:5100',
    Schema: ['http']
}

swaggerAutogen()(outputFile, endPointFiles, doc);