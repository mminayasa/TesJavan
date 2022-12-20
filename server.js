const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

var corsOption = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOption))

// parse requests of content-type - application/json
app.use(express.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require('./app/models')
db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });

// simple route
app.get("/", (req, res) => {
    res.json({ message: 'Welcome to family asset application' })
})


// require('./app/routes/tutorial.routes')(app)
require('./app/routes/family.user.routes')(app)

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})
