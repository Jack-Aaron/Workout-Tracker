const router = require('express').Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
    db.Workout.find()
        .then(dbWorkout => res.json(dbWorkout))
        .catch(err => res.json(err));
});

router.put('/api/workouts/:id', ({ body, params }, res) => {
    db.Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } }
    )
        .then(data => res.json(data))
        .catch(err => res.json(err))
});

router.post('/api/workouts', function (req, res) {
    db.Workout.create({
        day: new Date().setDate(new Date().getDate())
    })
        .then(data => res.json(data))
        .catch(err => res.json(err))
});

router.get('/api/workouts/range', function (req, res) {
    db.Workout.find()
        .then(data => res.json(data))
        .catch(err => res.json(err))
});

router.post('/api/workouts/range', function (req, res) {
    db.Workout.create()
        .then(data => res.json(data))
        .catch(err => res.json(err))
});

router.get('api/workouts/:id', function ({ params }, res) {
    db.Workout.findById(params.id)
        .then(data => res.json(data))
        .catch(err => res.json(err))
});



module.exports = router;