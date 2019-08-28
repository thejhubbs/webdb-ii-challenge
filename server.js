const express = require('express');

const server = express();

const db = require('./data/dbConfig.js')

server.use(express.json());

server.get('/api/cars', (req, res) => {
  db('cars')
  .then(cars => {
    res.json(cars);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to get cars' });
  });
});

//GET car by ID
server.get('/api/cars/:id', (req, res) => {
  db('cars').where({id: req.params.id})
  .then(cars => {
    res.json(cars);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to get cars' });
  });
});

//CREATE a new car
server.post('/api/cars', (req, res) => {
  db('cars').insert(req.body)
  .then(cars => {
    res.json(cars);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to get cars' });
  });
});

//Edit an existing
server.put('/api/cars/:id', (req, res) => {
  db('cars').where({id: req.params.id}).update(req.body)
  .then(cars => {
    res.json(cars);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to get cars' });
  });
});

//Delete
server.delete('/api/cars/:id', (req, res) => {
  db('cars').where({id: req.params.id}).del()
  .then(cars => {
    res.json(cars);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to get cars' });
  });
});

module.exports = server;
