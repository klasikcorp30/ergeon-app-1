import React from "react";
import { WeekInterface } from "../../interfaces";
import { DayTileComponent } from "../TIle";

export default function Week(props: WeekInterface) {
  return (
    <>
      {props?.week.map((day: number, index: number) => {
        return (
          <DayTileComponent
            key={index}
            day={day + 1}
            isToday={day === props.today - 1}
            selectedDay={props.selectedDay}
          />
        );
      })}
    </>
  );
}
