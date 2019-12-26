import React, { useState } from "react";
import styled from "styled-components";
import { formatDistance, formatDistanceStrict } from "date-fns";
import {
  formatDateForReading,
  transformDateStringToDate
} from "../utils/dates";

const StyledEntry = styled.li`
  margin: 0;
  padding: 0;
  padding: 1rem;
  min-height: 50px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;

  border-bottom: 1px solid var(--color-silver);
  l .id,
  .type {
    display: none;
  }

  .description {
    flex-grow: 1;
    margin-left: 1rem;
    line-height: 1.4;
  }
  .timer {
    font-weight: 100;
    transition: all 0.1s;
    flex-basis: 50px;
  }

  button.timer-cta {
    border: 0;
    background: 0;
    padding: 0;
    margin: 0;
    cursor: pointer;
    text-align: left;
    color: var(--color-green);
    line-height: 1.4;
  }

  .timer-distance {
    font-size: 0.8rem;
  }
`;

export default function Entry(entry) {
  const [activeTimer, setActiveTimer] = useState("timer-day-distance");
  const { entryType, description, countsDownTo, createdOn } = entry;

  const createdOnTimeStamp = new Date(createdOn);
  const timeTo = transformDateStringToDate(countsDownTo.formatValue);
  const distance = formatDistance(timeTo, new Date());
  const dayDistance = formatDistanceStrict(timeTo, new Date(), {
    unit: "day"
  });

  let displayHelper = {
    type: entryType === "type-counter" ? "Counter" : "Countdown",
    description: description,
    createdOn: `created on ${formatDateForReading(createdOnTimeStamp)}`
  };
  displayHelper.description = `${description}`;
  if (description === "") {
    displayHelper.description = `${displayHelper.type} ${displayHelper.createdOn}`;
  }

  const handleTimerClick = async function() {
    setActiveTimer(
      activeTimer === "timer-day-distance"
        ? "timer-distance"
        : "timer-day-distance"
    );
  };

  return (
    <StyledEntry>
      <div
        className={`timer ${
          activeTimer !== "timer-day-distance"
            ? "timer-distance"
            : "timer-day-distance"
        }`}
      >
        <button className="timer-cta" onClick={handleTimerClick}>
          {activeTimer !== "timer-day-distance" ? distance : dayDistance}
        </button>
      </div>

      <p className="description">{displayHelper.description}</p>
    </StyledEntry>
  );
}
