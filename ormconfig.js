require("dotenv/config")

const devConfig = [
    {
        name: "default",
        type: "mongodb",
        host: "localhost",
        port: 27017,
        database: "mernTest",
        useUnifiedTopology: true,
        entities: [
            "./src/schemas/*.ts"
        ]
    }
]

const prodConfig = [
    {
        name: "default",
        type: "mongodb",
        host: process.env.MONGO_URL,
        port: 27017,
        database: "mernTest",
        useUnifiedTopology: true,
        entities: [
            "./dist/schemas/*.ts"
        ]
    }
]

module.exports = process.env.NODE_ENV === 'development' ? devConfig : prodConfig;
