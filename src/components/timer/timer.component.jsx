import React from "react";
import "./timer.style.css";

export const Timer = (props) => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="time-circulo">
          <div className="time">
            {props.minutes} : {props.seconds}
          </div>
        </div>
      </div>
    </div>
  );
};
