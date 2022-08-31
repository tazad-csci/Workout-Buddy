const express = require('express');
const {
  createWorkout,
  getWorkouts,
  getWorkout,
} = require('../controllers/workoutController');

// create a router
const router = express.Router();

// a all the different request handlers onto that router and export the router to server.js to be used in app.use('api/workouts')

// GET all workouts
router.get('/', getWorkouts);

// GET a single workout
router.get('/:id', getWorkout);

// POST a new workout
router.post('/', createWorkout);

// DELETE a workout
router.delete('/:id', (req, res) => {
  res.json({ message: 'DELETE a workout' });
});

// UPDATE a workout
router.patch('/:id', (req, res) => {
  res.json({ message: 'UPDATE a workout' });
});

module.exports = router;
