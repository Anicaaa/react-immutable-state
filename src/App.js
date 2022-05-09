import { useState } from "react";
import { initialWorkouts, generateWorkout } from "./Workouts.js";
import "./App.css";

function App() {
  const [workouts, setWorkouts] = useState(initialWorkouts);

  const addNewWorkout = () => {
    const newWorkout = generateWorkout();
    const addWorkout = [...workouts, newWorkout];
    setWorkouts(addWorkout); // ask react to update the old state with the new state
    console.log("addNewWorkout:", newWorkout);
  };

  const deleteWorkout = (workout) => {
    const delWorkout = workouts.filter((e) => {
      return e !== workout;
    });
    setWorkouts(delWorkout); // ask react to update the old state with the new state
    console.log("deleteWorkout:", workout);
  };

  const completeWorkout = (workout) => {
    const doneWorkout = workouts.map((e) => {
      if (e === workout) {
        e.done = true; // change the done property to true
      }
      return e;
    });
    setWorkouts(doneWorkout); // ask react to update the old state with the new state
    console.log("completeWorkout:", workout);
  };

  return (
    <div className="App">
      <h1>🏋️‍♀️Workout Generator</h1>
      <button onClick={addNewWorkout}>Add New Workout</button>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            <p>
              {workout.sets}x sets of{" "}
              <strong>
                {workout.reps}x{workout.exercise}
              </strong>{" "}
              with {workout.rest} seconds rest
            </p>
            {!workout.done && (
              <button onClick={(e) => completeWorkout(workout)}>Done</button>
            )}
            {workout.done && <p>✅</p>}
            <button onClick={(e) => deleteWorkout(workout)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
