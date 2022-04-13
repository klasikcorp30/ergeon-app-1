import React from "react";
import "./Navigator.scss";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

import { NavigateInterface } from "../../interfaces";

export default function Navigator(props: NavigateInterface) {
  return (
    <div className="navigator-container">
      <div className="navigator">
        <div className="navigator__arrow">
          <FaCaretLeft onClick={props.prevWeek} />
        </div>

        <div className="navigator__arrow">
          <FaCaretRight onClick={props.nextWeek} />
        </div>
      </div>
    </div>
  );
}
