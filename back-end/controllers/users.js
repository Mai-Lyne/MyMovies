const bcrypt = require('bcrypt');
const registerUser = (req, res) => {
    const sqlInsert = "INSERT INTO users (mail, password)  VALUES (?, ?)";

    var mail = req.body.email
    if (!mail)
        return res.status(400).send({msg: 'Email should not be empty'})

    var password = req.body.password
    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err)
            throw (err)
        db.execute (sqlInsert, [mail, hash],
            (err, result) => {
                if (err)
                    throw (err)
                return res.status(201).send({msg: 'Registration completed'})
            })
    })
}

module.exports = {
    registerUser
}