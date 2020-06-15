// Dependencies
const router = require('express').Router();
const db = require("../models");

// gets all workouts from database
router.get("/api/workouts", (req, res) => {
    db.Workout.find()
        .then(dbWorkout => res.json(dbWorkout))
        .catch(err => res.json(err));
});

// gets range of workouts needed for our graphs
router.get('/api/workouts/range', function (req, res) {
    db.Workout.find()
        .then(stats => res.json(stats))
        .catch(err => res.json(err))
});

// gets a specific workout by ID
router.get('api/workouts/:id', function ({ params }, res) {
    db.Workout.findById(params.id) // specifically gets the id from the request
        .then(data => res.json(data))
        .catch(err => res.json(err))
});

router.put('/api/workouts/:id', ({ body, params }, res) => {
    db.Workout.findByIdAndUpdate( // searches by ID and also updates all in one method
        params.id,
        { $push: { exercises: body } }
    )
        .then(data => res.json(data))
        .catch(err => res.json(err))
});

// posts a new workout to the database
router.post('/api/workouts', function (req, res) {
    db.Workout.create({
        // gets the date at the time of posting
        day: new Date().setDate(new Date().getDate())
    })
        .then(data => res.json(data))
        .catch(err => res.json(err))
});

module.exports = router;