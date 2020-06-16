# Workout-Tracker
A consumer will reach their fitness goals quicker when they track their workout progress.

As a user, you want to be able to view create and track daily workouts. You want to be able to log multiple exercises in a workout on a given day. You should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, you should be able to track my distance traveled.

### Live Demo: https://stormy-gorge-38643.herokuapp.com/

## Usage

* Add exercises to a previous workout plan.
* Add new exercises to a new workout plan.
* View multiple the combined weight of multiple exercises on the ```stats``` page.

## Screenshots

![Last Workout](public/img/scsh1.jpg?raw=true "Last Workout")
![Add Exercise](public/img/scsh2.jpg?raw=true "Add Exercise")
![Dashboard](public/img/scsh3.jpg?raw=true "Workout Charts")

## Details

This application required the creation of a Mongo database using [mlab](https://www.mlab.com/) with a [Mongoose](https://mongoosejs.com/) schema, and handles routes with [Express](https://expressjs.com/).

The front end code was provided. I slightly modified some of the buttons' position on the page, as can be seen in the [commit history](https://github.com/Jack-Aaron/Workout-Tracker/commit/ad0c12e1f4c47324af68c3635476e63a58af0703/).

The interactive graphs are made possible by [Chart.js](https://www.npmjs.com/package/chart.js?activeTab=readme/).

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install the following dependencies needed for Workout-Tracker.

```bash
npm express
```

```bash
npm mongoose
```

```bash
npm morgan
```

```bash
npm path
```

## How You Can Contribute
Feel free to improve/change up the UI!

## License
This Readme Generator is under the [ISC](https://www.isc.org/licenses/) license.
