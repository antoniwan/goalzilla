import React, { useState } from "react";
import styled from "styled-components";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const StyledAddEntryForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0;

  .form-input {
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-top: 1px solid var(--color-silver);

    &:last-child {
      border-top: 0;
    }
  }

  .label,
  label {
    color: var(--color-gray);
    display: block;
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  input[type="radio"] {
    margin-right: 0.5rem;
  }

  input[type="text"] {
    display: block;
    border: 1px solid var(--color-silver);
    width: 100%;
    height: 30px;
    padding: 5px 8px;
    margin-top: 1rem;
  }

  input[type="submit"] {
    border: 1px solid var(--color-gray);
    background-color: var(--color-green);
    color: var(--color-white);
    padding: 8px 20px;
    border-radius: 5px;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      background-color: var(--color-shocking-green);
      color: var(--color-black);
    }
  }

  .react-datepicker-wrapper {
    display: block;
    width: 100%;
  }
`;

export default function AddEntryForm() {
  const [loading, setLoading] = useState(false);
  const [entryType, setEntryType] = useState("type-counter");
  const [startsOn, setStartsOn] = useState(new Date());
  const [description, setDescription] = useState("");
  const dateFormat = `MMMM d, yyyy`;

  let formDisplayHelper = {
    isCounter: entryType === `type-counter` ? true : false,
    isCountdown: entryType === `type-countdown` ? true : false,
    counterChecked: entryType === `type-counter` ? true : false,
    countdownChecked: entryType === `type-countdown` ? true : false,
    descriptionPlaceholder:
      entryType === `type-counter` ? `Days without bread` : `Days until...`,
    submitCTA:
      entryType === `type-counter` ? `Create counter` : `Create countdown`
  };

  const handleTypeRadioChange = function(e) {
    setEntryType(e.target.id);
  };

  const handleDatePickerChange = function(e) {
    setStartsOn(e);
  };

  console.info(
    `AddEntryForm State`,
    { entryType },
    { startsOn },
    { description }
  );

  return (
    <StyledAddEntryForm name="add-entry">
      <div className="form-input form-input-type">
        <span className="label">Select the type of entry</span>
        <label>
          <input
            type="radio"
            id="type-counter"
            name="type"
            value="counter"
            onChange={handleTypeRadioChange}
            checked={formDisplayHelper.counterChecked}
          />
          Counter
        </label>

        <label>
          <input
            type="radio"
            id="type-countdown"
            name="type"
            value="countdown"
            onChange={date => setStartsOn(date)}
            checked={formDisplayHelper.countdownChecked}
          />
          Countdown (Not implemented!)
        </label>
      </div>

      <div className="form-input form-input-description">
        <label>
          Description
          <input
            type="text"
            id="description"
            name="description"
            placeholder={formDisplayHelper.descriptionPlaceholder}
          ></input>
        </label>
      </div>

      {formDisplayHelper.isCounter && (
        <>
          <div className="form-input form-input-starts-on">
            <label>
              Starts on
              <Datepicker
                todayButton="Today"
                selected={startsOn}
                onChange={handleDatePickerChange}
                maxDate={new Date()}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                shouldCloseOnSelect={true}
                dateFormat={dateFormat}
              />
            </label>
          </div>
        </>
      )}

      {formDisplayHelper.isCountdown && (
        <>
          <div className="form-input form-input-counts-down-to">
            <label>
              Counts down to
              {/* <Datepicker /> */}
            </label>
          </div>
        </>
      )}

      <div className="form-input form-input-submit">
        <input type="submit" value={formDisplayHelper.submitCTA}></input>
      </div>
    </StyledAddEntryForm>
  );
}
