// Import Mongoose
const mongoose = require("mongoose");

// Mongoose Schema
const Schema = mongoose.Schema;

// Create Workout Schema
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
        required: true
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Please enter an exercise type."
            },
            name: {
                type: String,
                required: "Please name this exercise."
            },
            duration: {
                type: Number
            },
            distance: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            }
        }
    ],
    totalDuration: {
        type: Number
    }
});

// Initialise Schema
const Workout = mongoose.model("Workout", WorkoutSchema);

// Export Schema
module.exports = Workout;