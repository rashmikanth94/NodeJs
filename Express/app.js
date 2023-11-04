// const express = require('express');
// const {MongoClient} = require('mongodb');
// const fs = require('fs');

import express from "express";
import {MongoClient} from "mongodb";

const app = express()


const MONGO_URL = 'mongodb://127.0.0.1:27017';

app.get('/', (req,res)=>{
    res.send('Hello');
})


app.get('/getDetailss', (req, res)=> {
    fs.readFile('./../Files/temp.json', (error, result)=> {
        if(error){
            console.log(error);
        } else {
            res.send(JSON.parse(result));
        }
    })
})

app.get('/getUsers', async (req, res) => {
    const result = await client.db('users').collection('usersList').find().toArray();
    res.send(result);
})

app.listen(3000, ()=>{
    console.log('App started running ')
});

async function createConnection() {
    const client = new MongoClient(MONGO_URL)
    await client.connect();
    console.log("connected");
    return client;
}

const client = await createConnection()
