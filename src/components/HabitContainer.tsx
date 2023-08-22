import { HabitDataProps, HabitDataContainerProps } from "../types";
import Habit from "./Habit";

const HabitContainer = ({
  habits = [],
}: HabitDataContainerProps): JSX.Element => {
  return (
    <div>
      {habits.map((habit: HabitDataProps) => (
        <Habit key={habit.id} {...habit} />
      ))}
    </div>
  );
};

export default HabitContainer;
