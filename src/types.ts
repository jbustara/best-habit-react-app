export interface HabitDataProps {
  id?: number;
  title?: string;
  start?: Date;
  goal?: number;
  type?: Habit_Type;
}

export interface HabitDataContainerProps {
  habits: HabitDataProps[];
}

export enum Habit_Type {
  Automatic,
  Manual,
}
