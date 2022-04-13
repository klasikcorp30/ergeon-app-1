import "./TIle.scss";
import { DayHeader, DayTile } from "./../../interfaces";

export function DayTileComponent(props: DayTile) {
  return (
    <p
      className={`${props.isToday ? "is_today" : ""} ${
        props.selectedDay === props.day ? "is_selected" : ""
      }`}
    >
      {props.day}
    </p>
  );
}

export function DayTileHeaderComponent(props: DayHeader) {
  return <p>{props.day}</p>;
}
