const mongoose = require('mongoose');
const {Schema} = mongoose;

const bookingSchema = new Schema({
    name:String,
    address:String,
    time:Object,
    phone:String,
    sum:Number
})

const Booking = mongoose.model('booking',bookingSchema);

module.exports =  Booking;