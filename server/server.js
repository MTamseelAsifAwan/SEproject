const express = require("express");
const mysql = require("mysql");
const mysql2 = require("mysql2");
const cors = require("cors");
const Router= express.Router();

const app = express();

app.use(express.json());
app.use(cors());

const con = mysql2.createConnection({
    user: "root",
    host: "localhost",
    password: "tamseel@911",
    database: "se"
})

app.post('/register', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const number = req.body.number;
    const gender = req.body.gender;
    const cnic = req.body.cnic;
    const dob = req.body.dob;
    const address = req.body.address;
    const country = req.body.country;
    const province = req.body.province;
    const city = req.body.city;
    const bloodGroup = req.body.bloodGroup;
    const age = req.body.age;
  /*  const monthlyIncome = req.body.monthlyIncome;
    const medicalConditions = req.body.medicalConditions;*/




    con.query("INSERT INTO donors (name,email,number,gender,cnic,dob,address,country,province,city,bloodGroup, age) VALUES (?,  ?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?)",
    [name, email, number, gender, cnic, dob, address, country, province, city,bloodGroup, age, ], 
        (err, result) => {
            if(result){
                res.send(result);
                res.send({message: "!Send"})
            }
        }
    )
})
Router.get("/jzt", (req, res) => {
    con.query("SELECT * FROM jztworkers", (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
            res.status(500).send('Error retrieving data from jztworkers');
        }
    });
});
app.post('/dregister', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const number = req.body.number;
    const gender = req.body.gender;
    const cnic = req.body.cnic;
    const dob = req.body.dob;
    const address = req.body.address;
    const country = req.body.country;
    const province = req.body.province;
    const city = req.body.city;
    const bloodGroup = req.body.bloodGroup;
    const age = req.body.age;
  /*  const monthlyIncome = req.body.monthlyIncome;
    const medicalConditions = req.body.medicalConditions;*/




    con.query("INSERT INTO requester (name,email,number,gender,cnic,dob,address,country,province,city,bloodGroup, age) VALUES (?,  ?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?)",
    [name, email, number, gender, cnic, dob, address, country, province, city,bloodGroup, age, ], 
        (err, result) => {
            if(result){
                res.send(result);
                res.send({message: "!Your request has been send"})
            }
        }
    )
})

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    con.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password], 
        (err, result) => {
            if(err){
                res.status(500).send({ error: err.message });
            } else {
                if(result.length > 0){
                    const user = result[0];
                    res.send(result);
                    res.send({ message: "Login successful", user });
                } else {
                    res.send({ message: "WRONG USERNAME OR PASSWORD!" });
                }
            }
        }
    );
});

app.use('/api', Router); // You can use '/api' or any other prefix you prefer

app.listen(3001, () => {
    console.log("Tamseel running backend server");
})