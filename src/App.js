import { useState } from "react";
import { initialWorkouts, generateWorkout } from "./Workouts.js";
import "./App.css";
import Workout from "./props.js";

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
          <Workout
            workout={workout}
            index={index}
            deleteWorkout={deleteWorkout}
            completeWorkout={completeWorkout}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
