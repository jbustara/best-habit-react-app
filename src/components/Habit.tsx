import Progress from "./Progress";
import { HabitDataProps } from "../types";

const Habit = ({ title, start, goal, type }: HabitDataProps) => {
  return (
    <div className="habit">
      <h2>{title}</h2>
      <div>
        <img src="/" alt="habit" />
        <div>
          <Progress />
          <p>
            <strong>Start: </strong>
            {start?.toString()}
          </p>
          <p>
            <strong>Goal: </strong>
            {goal}
          </p>
        </div>
      </div>
      <p>{type}</p>
      <button>Restart</button>
    </div>
  );
};

export default Habit;
