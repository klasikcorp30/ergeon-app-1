//Interfaces for the different types of data that can be used in the app

//Interface for DateTiles

export interface DayHeader {
  day: string;
}

export interface DayTile {
  day: number;
  isToday: boolean;
  selectedDay: number;
}

export interface WeekInterface {
  //array of DateTiles
  week: number[];
  today: number;
  selectedDay: number;
}

export interface NavigateInterface {
  nextWeek: () => void;
  prevWeek: () => void;
}
export interface SelectedDayInterface {
  day: string;
}
