require('dotenv').config();

const required = ['DB_HOST', 'DB_USER', 'DB_NAME', 'JWT_SECRET'];

for (const name of required){
    if(!process.env[name]){
        throw new Error(`Falta la variable de entorno ${name}`);
    }
}

module.exports={
    port: Number(process.env.PORT) || 3000),
    db: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || 3306),
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD
    },
    jwt:{
        secret: process.env.JWT_SECRET
        expiresIn: process.env.JWT_EXPIRES_IN || '2h'
    }
};