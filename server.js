const express = require('express')
const app = express()
const PORT = 8000

const paramore = {
    'hayley williams': {
        'full name': 'Hayley Nichole Williams',
        'instruments': 'vocals, keyboard',
        'age': 33,
        'birthday': 'December 27, 1988',
        'birthLocation': 'Tennessee, US'
    },
    'zac farro': {
        'full name': 'Zachary Wayne Farro',
        'instruments': 'drums',
        'age': 32,
        'birthday': 'June 4, 1990',
        'birthLocation': 'New Jersey, US'
    },
    'taylor york': {
        'full name': 'Taylor Benjamin York',
        'instruments': 'guitar',
        'age': 32,
        'birthday': 'December 17, 1989',
        'birthLocation': 'Tennessee, US'
    },
    'joe ulyatt': {
        'full name': 'Joseph Anthony Kenneth Ulyatt',
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