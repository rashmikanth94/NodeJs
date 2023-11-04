// import mongoose from "mongoose";
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userModel = new schema({
    name: String,
    age: Number,
    city: String
})

// module.exports = mongoose.model("user", userModel, "users")