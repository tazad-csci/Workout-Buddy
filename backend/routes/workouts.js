const express = require('express');

// create a router
const router = express.Router();

// adding all the different request handlers onto that router and export the router to server.js to be used in app.use('api/workouts')

// GET all workouts
router.get('/', (req, res) => {
  res.json({ message: 'GET all workouts' });
});

// GET a single workout
router.get('/:id', (req, res) => {
  res.json({ message: 'GET single workout' });
});

// POST a new workout
router.post('/', (req, res) => {
  res.json({ message: 'POST a new workout' });
});

// DELETE a workout
router.delete('/:id', (req, res) => {
  res.json({ message: 'DELETE a workout' });
});

// UPDATE a workout
router.patch('/:id', (req, res) => {
  res.json({ message: 'UPDATE a workout' });
});

module.exports = router;
