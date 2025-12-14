let totalMinutes = 0;
let totalCaloriesBurned = 0;
let totalCaloriesConsumed = 0;

// Calories burned per minute for some exercises
const caloriesBurnRate = {
    "Running": 10,
    "Cycling": 8,
    "Yoga": 5,
    "Walking": 4,
    "Swimming": 9,
    "Gym": 7
};

function addWorkout() {
    let exercise = document.getElementById("exercise").value;
    let duration = parseInt(document.getElementById("duration").value);

    if (exercise === "" || isNaN(duration) || duration <= 0) {
        alert("Please enter valid exercise details");
        return;
    }

    let caloriesBurned = (caloriesBurnRate[exercise] || 6) * duration; // default 6 kcal/min
    totalMinutes += duration;
    totalCaloriesBurned += caloriesBurned;

    // Add to list
    let list = document.getElementById("workoutList");
    let li = document.createElement("li");
    li.textContent = `${exercise} - ${duration} min - Calories Burned: ${caloriesBurned} kcal`;
    list.appendChild(li);

    document.getElementById("totalTime").innerText = totalMinutes;
    document.getElementById("totalCaloriesBurned").innerText = totalCaloriesBurned;

    // Reset input fields
    document.getElementById("exercise").value = "";
    document.getElementById("duration").value = "";
}

// Diet / Calories consumed
function addDiet() {
    let meal = document.getElementById("meal").value;
    let calories = parseInt(document.getElementById("calories").value);

    if (meal === "" || isNaN(calories) || calories <= 0) {
        alert("Please enter valid meal details");
        return;
    }

    totalCaloriesConsumed += calories;

    let list = document.getElementById("dietList");
    let li = document.createElement("li");
    li.textContent = `${meal} - ${calories} kcal`;
    list.appendChild(li);

    document.getElementById("totalCaloriesConsumed").innerText = totalCaloriesConsumed;

    document.getElementById("meal").value = "";
    document.getElementById("calories").value = "";
}
