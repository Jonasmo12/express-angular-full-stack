const express = require('express')
const cors = require('cors')
const app = express();
const pool = require('./db')


app.use(cors()); 

const port = 3600;
//const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const users = [];


// app.get('/api/users', (request, response) => {
//     response.json(users)
// });
app.get("/api/users", (request, response) => {
    pool.query("SELECT * FROM users ORDER BY id ASC", (err, result) => {
        if (err) {
            console.log(err.message)
        }

        response.status(200).json(result.rows)
    })
})

app.post('/api/user/', (request, response) => {
    // set data to user object
    const user = {
        id: request.body.id, // get id from user in the request
        firstName: request.body.firstName, // get name from user in the request
        lastName: request.body.lastName,
        email: request.body.email

    }
    users.push(user); //Insert data into the array
    response.json('succesfully added: ' + user); 
});

app.get('/', (request, response) => {
    response.json("Server Online")
})

app.listen(port, () => {
    console.log(`Server listening on port::${port}`)
});


