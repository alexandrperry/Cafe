const Booking = require('../models/Booking');
const Catalog = require('../models/Catalog');

const uuidv4 = require('uuid/v4');


module.exports = app =>{


    app.post('/api/add',(req,res)=>{
        console.log('request',req.body);
        const catalog = new Catalog({...req.body,id:uuidv4()});
        catalog.save((err, catalog) => {
            if (err) return next(err);
            res.status(201);
            res.send(catalog);
        });
    });

    app.post('/api/booking',(req,res)=>{
        const booking = new Booking(req.body);
        booking.save((err, booking) => {
            if (err) return next(err);
            res.status(201);
            res.json(booking);
        });
    })

    app.get('/api/catalog', (req, res, next) => {
        Catalog.find({},function (err,catalog) {
            if(err) return next(err)
            res.send(catalog)
        })

    });


    app.get('/api/catalog/:id',(req,res,next) => {
        const id = req.params.id
        console.log(id);
        Catalog.findOne({id},function (err,item) {
            if(err) return next (err)
            res.send(item)
        })
    })






};




