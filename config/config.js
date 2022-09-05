module.exports = {
    development: {
        username: process.env.USER_DB,
        password: process.env.USER_PASS_DB,
        database: process.env.DATABASE,
        host: process.env.HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false
            }
        },
        test: {
            username: process.env.USER_DB,
            password: process.env.USER_PASS_DB,
            database: process.env.DATABASE,
            host: process.env.HOST,
            port: process.env.DB_PORT,
            dialect: 'postgres',
            dialectOptions: {
                ssl: {
                    rejectUnauthorized: false
                }
            }
        },
        production: {
            username: process.env.USER_DB,
            password: process.env.USER_PASS_DB,
            database: process.env.DATABASE,
            host: process.env.HOST,
            port: process.env.DB_PORT,
            dialect: 'postgres',
            logging: false,
            dialectOptions: {
                ssl: {
                    rejectUnauthorized: false
                }
            }
        }
    }
}

/* 
username: 'dtqugbihumrdkk',
password: '12cb9ebd2faf9274d0e6699f559e47d4df7492f30bc4dd77c5fe7a23ec01790f',
database: 'db1ips7sem5qvb',
host: 'ec2-34-199-209-37.compute-1.amazonaws.com',
port: 5432,
dialect: 'postgres',
dialectOptions: {
    ssl: {
        rejectUnauthorized: false
    }
} 
*/