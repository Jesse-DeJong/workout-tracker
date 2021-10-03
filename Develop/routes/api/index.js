const router = require('express').Router();
const db = require("../../models");

/* /api Endpoint */

// Total duration calculation function
// function calculateTotal(data) {
//     const mappedData = data.map((item) => {
//         const durations = item.exercises[0].duration;
//         return durations
//     })
//     data.totalDuration = mappedData.reduce((a, b) => a + b, 0);
//     console.log(data.totalDuration);
//     return data
// };

// GET all workouts
router.get("/workouts", async (req, res) => {
    try {
        // Query the database for all workouts
        const data = await db.Workout.find({})
        // Calculate total workout duration and update returned query
        data.map(item => {
            let total = 0;
                item.exercises.map(exercise => {
                    total += exercise.duration;
                });
                item.totalDuration = total;
            });

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET all workouts for graph
router.get("/workouts/range", async (req, res) => {
    try {
        const data = await db.Workout.find({});
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

// POST new workout
router.post("/workouts", async (req, res) => {
    
    try {
        const data = await db.Workout.create(req.body);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
})

// PUT update route
router.put("/workouts/:id", async (req, res) => {

    try {
        const data = await db.Workout.findByIdAndUpdate(
            { _id: req.params.id },
            {
                $push: { exercises: req.body }
            },
            { new: true }
        )
        res.status(204).json(data);
        } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
})

module.exports = router;