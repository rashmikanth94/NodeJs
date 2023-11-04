// import express from 'express';
// import mongoose from 'mongoose';
// import userModel from './model/user.js';

const express = require('express');
const mongoose = require('mongoose');
// const {userModel} = require('mongoose');
// var userModel = require("./model/user")

const app = express();
const PORT = 1000;

// var userModel2 = userModel;
const MONGO_URL = 'mongodb://127.0.0.1:27017';
mongoose.connect(MONGO_URL);

app.get('/', (req, res)=> {
    res.send('welcome to userlist')
})


app.listen(PORT, ()=> {
    console.log('App started on Port ', PORT)
})