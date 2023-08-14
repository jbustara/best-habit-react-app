import "./App.css";
import HabitContainer from "./components/HabitContainer";
import { habitsData } from "./constants";

function App() {
  return (
    <>
      <HabitContainer habits={habitsData} />
    </>
  );
}

export default App;
