const fs = require('fs');
const bodyParser = require('body-parser');
let studentList = [];


const cors = require('cors');
const express = require('express');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.get('/', (req, res) => {
    fs.readFile('students.json', 'utf-8', function(err, data){
    const studentArray = JSON.parse(data);
    studentList = studentArray;
    res.send(studentList)
    });
    
})

app.post('/', (req, res) => {

    const student = req.body;
    console.log(student);
    studentList.push(student);
    const jsonString = JSON.stringify(studentList);
    fs.writeFile('students.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })
    res.send(studentList)
})

app.delete('/', (req, res) => {
    const studentID = req.body.idNumber;
    const path = "/images/" + studentID+'.jpg';
    studentList = studentList.filter(student => student.idNumber != studentID);
    const jsonString = JSON.stringify(studentList);
    fs.writeFile('students.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })
    res.send(`${studentID} was successfully deleted`);
})
app.listen (port, ()=> {
    console.log(`App listening on port ${port}`)
})


