const router = require('express').Router();
const Workout = require("../models/workout");

router.get('/api/workouts', function (req, res) {
});

router.post('/api/workouts', function (req, res) {
});

router.get('/api/workouts/range', function (req, res) {
    Workout.find()
        .then(data => res.json(data))
        .catch(err => res.json(err))
});

router.post('/api/workouts/range', function (req, res) {
});

router.put('/api/workouts/:id', ({ body, params }, res) => {
});
module.exports = router;