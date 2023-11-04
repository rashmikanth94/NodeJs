
import express from "express";
import {MongoClient} from "mongodb";
import bodyParser from "body-parser"
const port = 2000;
const MONGO_URL = 'mongodb://127.0.0.1:27017';

const app = express()

app.listen(port, ()=>{
    console.log('App started running ')
});
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const client = await createConnection()

async function createConnection() {
    const client = new MongoClient(MONGO_URL)
    await client.connect();
    console.log("connected");
    return client;
}

app.get('/getUsers', async (req, res) => {
    const result = await client.db('users').collection('usersList').find().toArray();
    res.send(result);
})

app.post('/addUsers', async(req, res)=> {
    const newUser = req.body
    console.log(newUser);
    const ress = client.db('users').collection('usersList').insertMany(newUser);
    res.send(ress.body);
})

app.delete('/deleteUser/:id', async(req, res)=> {
    const {id} = req.params
    console.log(id);

    const result = await client.db('users').collection('usersList').deleteOne(req.params);
    // const ress = client.db('users').collection('usersList').insertMany(newUser);
    res.send(result);
})


app.get('/getUsers/:id', async (req, res) => {
    console.log(req.params)

    const {ide} = req.params
    // console.log(ide);
    const result = await client.db('users').collection('usersList').findOne(req.params);
    console.log(result);
    if(result) {
        res.send(result) 
    } else {
        res.status(400);
        res.send({message:'No user found'});
    }
})

app.put('/updateUser/:id', async(req,res)=> {
    const {id} = req.params;
    const details = req.body;
    console.log(id, details);
    const result = await client.db('users').collection('usersList').updateOne({id:id},{$set: details});
    res.send(result)
})