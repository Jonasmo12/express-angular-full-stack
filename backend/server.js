const express = require('express')
const cors = require('cors')
const app = express();
const pool = require('./db')


app.use(cors());

const port = 3600;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/api/users', (request, response) => {
    pool.query("SELECT * FROM users", (err, result) => {
        if (err) {
            console.log(err.message)
        }

        response.status(200).json(result.rows)
    })
})

app.post('/api/user', (request, response) => {
    const {firstName, lastName, email } = request.body;

    pool.query("INSERT INTO users (firstName, lastName, email) VALUES ($1, $2, $3)", [firstName, lastName, email], (err, result) => {
        if (err) {
            console.log(err.message)
        } else {
            response.status(201).send("A User has been added" + result.rows)
        }
    })
});

app.put('/api/user/:id', (request, response) => {
    const id = parseInt(request.params.id);
    // const { email } = request.body.email;

    // if (email) {
    //     pool.query("UPDATE users SET email = $1 WHERE id = $2;", [email, id], (err, results) => {
    //         if (err) {
    //             response.json(err.message)
    //         }    
    //         response.status(200).send(`User modified with ID: ${id}`)
    //     })
    // }
    
    response.send("This is a test for: " + id + typeof(id))
})

app.get('/', (request, response) => {
    response.json("Server Online")
})

app.listen(port, () => {
    console.log(`Server listening on port::${port}`)
});


