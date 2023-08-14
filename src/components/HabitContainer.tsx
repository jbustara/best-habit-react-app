import { HabitData } from "../types";
import Habit from "./Habit";

const HabitContainer = ({ habits = [] }: HabitData[]) => {
  return (
    <div>
      {habits.map((habit: HabitData) => (
        <Habit key={habit.id} {...habit} />
      ))}
    </div>
  );
};

export default HabitContainer;
