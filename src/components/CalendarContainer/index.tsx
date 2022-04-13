import { format, getDaysInMonth } from "date-fns";
import { useState } from "react";
import { Input } from "reactstrap";

import Navigator from "../Navigator";
import { DayTileHeaderComponent } from "../TIle";
import Week from "../Week";
import "./CalContainer.scss";
export default function CalContainer() {
  //Update context with new day

  const [day, setDay] = useState(0);

  let [daysInMonthArray] = useState(
    Array.from(Array(getDaysInMonth(new Date())).keys())
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //Use regex to only accept numbers with replace
    setDay(parseInt(e.target.value.replace(/[^0-9]/g, "")));
  };

  const search = () => {
    //Update context with new day
    setDay(day);
    let start = day - (day % 7);
    let end = start + 7;
    setParsedRange({ start, end });
  };

  let [parsedRange, setParsedRange] = useState({ start: 0, end: 7 });

  return (
    <div className="calendar-box">
      <div className="main-header">
        <h1>{format(new Date(), "MMMM")}</h1>
        <h3>{format(new Date(), "yyyy")}</h3>
      </div>
      <div className="calendar-box__header">
        <DayTileHeaderComponent day="S" />
        <DayTileHeaderComponent day="M" />
        <DayTileHeaderComponent day="T" />
        <DayTileHeaderComponent day="W" />
        <DayTileHeaderComponent day="T" />
        <DayTileHeaderComponent day="F" />
        <DayTileHeaderComponent day="S" />
      </div>

      <div className="calendar-box__body">
        <Week
          week={daysInMonthArray.slice(parsedRange.start, parsedRange.end)}
          today={parseInt(format(new Date(), "dd"))}
          selectedDay={day}
        />
      </div>
      <div className="input-container">
        <Input
          value={day}
          type="number"
          onChange={handleChange}
          placeholder="Type day here..."
          className="custom-input"
        />
        <button onClick={search} className="button">
          Search for Day..
        </button>
      </div>

      <div className="calendar-box__navigator">
        <Navigator nextWeek={goToNextWeek()} prevWeek={goToPrevWeek()} />
      </div>
    </div>
  );

  function goToPrevWeek(): () => void {
    return () => {
      if (parsedRange.start === 0) {
        return;
      } else {
        setParsedRange({
          start: parsedRange.start - 7,
          end: parsedRange.end - 7,
        });
      }
    };
  }

  function goToNextWeek(): () => void {
    return () => {
      //If the end of the array is reached, disable button
      if (parsedRange.end <= daysInMonthArray.length) {
        setParsedRange({
          start: parsedRange.start + 7,
          end: parsedRange.end + 7,
        });
      } else {
        return null;
      }
    };
  }
}
