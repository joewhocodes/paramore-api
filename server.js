const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const paramore = {
    'hayley williams': {
        'fullName': 'Hayley Nichole Williams',
        'instruments': 'vocals, keyboard',
        'age': 33,
        'birthday': 'December 27, 1988',
        'birthLocation': 'Tennessee, US'
    },
    'zac farro': {
        'fullName': 'Zachary Wayne Farro',
        'instruments': 'drums',
        'age': 32,
        'birthday': 'June 4, 1990',
        'birthLocation': 'New Jersey, US'
    },
    'taylor york': {
        'fullName': 'Taylor Benjamin York',
        'instruments': 'guitar',
        'age': 32,
        'birthday': 'December 17, 1989',
        'birthLocation': 'Tennessee, US'
    },
    'joe ulyatt': {
        'fullName': 'Joseph Anthony Kenneth Ulyatt',
        'instruments': 'guitar',
        'age': 30,
        'birthday': 'March 26, 1992',
        'birthLocation': 'Wantage, UK'
    },
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    console.log("sent")
})

app.get('/api/:bandMember', (req, res) => {
    const bandMember = req.params.bandMember.toLowerCase()
    if (paramore[bandMember]) {
        res.json(paramore[bandMember])
    } else {
        res.json(paramore['joe ulyatt'])
    }
})

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})