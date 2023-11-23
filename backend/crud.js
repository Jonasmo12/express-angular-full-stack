const { response } = require('express');
const db = require('./postgres-config');


const createUser = ( request, response) => {
    const {id, firstName, lastName, email } = request.body;

    db.client.query("INSERT INTO users (id, firstName, lastName, email) VALUES ($1, $2, $3, $4)", [id, firstName, lastName, email], (err, result) => {
        if (err) {
            console.log(err.message)
        } else {
            response.status(201).send("A User has been added")
        }
    })
}


const getUsers = ( request, response ) => {
    db.client.query("SELECT * FROM users ORDER BY id ASC", (err, result) => {
        if (err) {
            console.log(err.message)
        }

        response.status(200).json(result.rows)
    })
}

module.exports = getUsers, createUser