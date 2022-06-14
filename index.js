const express = require('express')

require('dotenv').config()

const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');

// exp.use(bodyParser.json({ type: '*' }))
app.use(bodyParser.urlencoded({ extended: true }));

const port = 1500

app.use(express.json())
app.use(cors())

app.get('/data', (req,res) => {
    try {
        let data = [
            {
                nama : "Ari",
                waktu : 20.10,
                nilai : 65.59
            },
            {
                nama : "Andi",
                waktu : 10.00,
                nilai : 50.01
            },
            {
                nama : "Budi",
                waktu : 15.15,
                nilai : 60
            },
            {
                nama : "Bayu",
                waktu : 1.10,
                nilai : 45.00
            },
            {
                nama : "Citra",
                waktu : 2.00,
                nilai : 55.35
            },
            {
                nama : "Candra",
                waktu : 0.10,
                nilai : 58.39
            },
            {
                nama : "Dodi",
                waktu : 0.20,
                nilai : 70
            },
            {
                nama : "Dimas",
                waktu : 3.01,
                nilai : 91
            },
            {
                nama : "Erwin",
                waktu : 10.15,
                nilai : 35.55
            },
            {
                nama : "Fikri",
                waktu : 10.30,
                nilai : 97.01
            },
            {
                nama : "Gilang",
                waktu : 10.90,
                nilai : 59.30
            },
            {
                nama : "Haikal",
                waktu : 3.00,
                nilai : 70
            },
            {
                nama : "Irwan",
                waktu : 3.30,
                nilai : 60
            },
            {
                nama : "Joko",
                waktu : 19.03,
                nilai : 65.59
            },
            {
                nama : "Kirana",
                waktu : 17.00,
                nilai : 100
            },
            {
                nama : "Latif",
                waktu : 14.05,
                nilai : 89.90
            },
            {
                nama : "Naila",
                waktu : 12.10,
                nilai : 91
            }
        ]

        data = JSON.parse(JSON.stringify(data))
        res.send({
            message : "sucesss",
            data
        })
    } catch (error) {
        console.log(error);
        res.status({
          status: "failed",
          message: "Server Error",
    })
    }
})

app.listen(port , () => console.log(`Server Running on port ${port}`))