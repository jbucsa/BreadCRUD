// Dependencies
const express = require('express');

//Configuration 

const breads = express.Router();
const bread = require('../models/bread.js')

//INDEX
breads.get('/', (req, res) =>
{
    res.render('Index',
    {
        breads: Bread,
        title: 'Index Page'
    });

});


// Static Routes
// localhost/breads/0
breads.get('/0', (req, res) =>
{
    res.send(bread[0]);
});

// Dymanic Routes
// SHOW
breads.get('/:arrayIndex', (req, res) => {
    res.send(bread[req.params.arrayIndex])
  })
  

module.exports = breads