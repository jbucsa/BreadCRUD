// Dependencies
const express = require('express');

//Configuration 

const breads = express.Router();
const Bread = require('../models/bread.js')

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
// // localhost/breads/0
// breads.get('/0', (req, res) =>
// {
//     res.send(bread[0]);
// });

// Dymanic Routes

// NEW
breads.get('/new', (req, res) => {
    res.render('new');
});


// SHOW
breads.get('/:arrayIndex', (req, res) => {
    if (bread[req.params.arrayIndex]) {
        res.render('Show', {
            bread: bread[req.params.arrayIndex]
        })
    } else {
        res.send('404')
    }
  });
  

// CREATE
breads.post('/', (req, res) => {
    if (!req.body.image) {
      req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    }
    if(req.body.hasGluten === 'on') {
      req.body.hasGluten = true
    } else {
      req.body.hasGluten = false
    }
    bread.push(req.body)
    res.redirect('/breads')
  })
  


module.exports = breads