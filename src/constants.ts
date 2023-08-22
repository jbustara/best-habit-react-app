import { Habit_Type, HabitDataProps } from "./types";

export const habitsData: HabitDataProps[] = [
  {
    id: 1,
    title: "no sugar",
    start: new Date("2023/08/01"),
    goal: 30,
    type: Habit_Type.Automatic,
  },
  {
    id: 2,
    title: "no soda",
    start: new Date("2023/08/03"),
    goal: 21,
    type: Habit_Type.Automatic,
  },
  {
    id: 3,
    title: "no fries",
    start: new Date("2023/08/10"),
    goal: 21,
    type: Habit_Type.Automatic,
  },
];
