import { registerAs } from '@nestjs/config'

export default registerAs('config', () => {
    return {
        dataBase: {
            name: process.env.POSTGRES_DB,
            port: parseInt(process.env.POSTGRES_PORT, 10),
            user: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            host: process.env.POSTGRES_HOST,
        }
    }
});
