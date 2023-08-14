export interface HabitData {
  id?: number;
  title?: string;
  start?: Date;
  goal?: number;
  type?: Habit_Type;
}

export enum Habit_Type {
  Automatic,
  Manual,
}
