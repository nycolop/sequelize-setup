const sequelize = require('./db');
const Vehiculo = require('../models/vehiculoModel');

const syncDatabase = async () => {
    try {
        await sequelize.sync({ force: true });  // 'force: true' borrará y recreará las tablas cada vez. Usa 'alter: true' para actualizar sin borrar datos.
        console.log("La base de datos ha sido sincronizada.");
        
        const vehiculos = [
            {
                id: 1,
                nombre: 'Fiat'
            },
            {
                id: 2,
                nombre: 'Volkswagen'
            },
            {
                id: 3,
                nombre: 'Mercedez Benz'
            }
        ];
        
        await Vehiculo.bulkCreate(vehiculos);
    } catch (error) {
        console.error("Hubo un error sincronizando la base de datos:", error);
    } finally {
        await sequelize.close();
    }
};

syncDatabase();