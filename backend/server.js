const express = require('express')
const cors = require('cors')
const app = express();
const pool = require('./db')


app.use(cors());

const port = 3600;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [];


app.get("/api/users", (request, response) => {
    pool.query("SELECT * FROM users ORDER BY id ASC", (err, result) => {
        if (err) {
            console.log(err.message)
        }

        response.status(200).json(result.rows)
    })
})

app.post('/api/user/', (request, response) => {
    const { id, firstName, lastName, email } = request.body;

    pool.query("INSERT INTO users (id, firstName, lastName, email) VALUES ($1, $2, $3, $4)", [id, firstName, lastName, email], (err, result) => {
        if (err) {
            console.log(err.message)
        } else {
            response.status(201).send("A User has been added" + result.rows)
        }
    })
});

app.get('/', (request, response) => {
    response.json("Server Online")
})

app.listen(port, () => {
    console.log(`Server listening on port::${port}`)
});


