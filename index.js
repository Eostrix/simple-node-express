const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

users = [
    {
        id:0,
        name: 'Anamika',
        email: 'anamika@localhost.com',
        phone: '01xxxxxxxxx',
        address:
        {
            district: "Narayanganj",
            division: "Dhaka"
        }
    },
    {
        id:1,
        name: 'Anika',
        email: 'anika@localhost.com',
        phone: '01xxxxxxxxx',
        address:
        {
            district: "Tangail",
            division: "Dhaka"
        }
    },
    {
        id:2,
        name: 'Samia',
        email: 'anamika@localhost.com',
        phone: '01xxxxxxxxx',
        address:
        {
            district: "Habiganj",
            division: "Sylhet"
        }
    },
    {
        id:3,
        name: 'Tumpa',
        email: 'anamika@localhost.com',
        phone: '01xxxxxxxxx',
        address:
        {
            district: "Manikganj",
            division: "Dhaka"
        }
    },
    {
        id:4,
        name: 'Eva',
        email: 'anamika@localhost.com',
        phone: '01xxxxxxxxx',
        address:
        {
            district: "Munshiganj",
            division: "Dhaka"
        }
    }
]

app.get('/',(req,res)=>{
    res.send("Hello from My First Node Again with Node Monitor");
})
app.get('/users',(req,res)=>{
    const searchKeyword = req.query.search;
    if(searchKeyword){
        const searchResult = users.filter( user => user.name.toLocaleLowerCase().includes(searchKeyword));
        res.send(searchResult);
    }
    else
        res.send(users);
})

// POST
app.post('/users',(req,res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    res.json(newUser);
    
})

app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})
app.listen(port,()=>{
    console.log("Listening from ",port);
})