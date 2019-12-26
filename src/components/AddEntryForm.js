import React, { useState } from "react";
import styled from "styled-components";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const StyledAddEntryForm = styled.form`
  display: flex;
  flex-direction: column;

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
  }

  .react-datepicker-wrapper {
    display: block;
    width: 100%;
  }
`;

export default function AddEntryForm() {
  const [entryType, setEntryType] = useState("type-counter");
  let formDisplayHelper = {
    isCounter: entryType === `type-counter` ? true : false,
    isCountdown: entryType === `type-countdown` ? true : false,
    counterChecked: entryType === `type-counter` ? true : false,
    countdownChecked: entryType === `type-countdown` ? true : false,
    descriptionPlaceholder:
      entryType === `type-counter` ? `Days without bread` : `Days until...`
  };

  const handleTypeRadioChange = function(e) {
    setEntryType(e.target.id);
  };

  console.info(`AddEntryForm State`, { entryType });

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
            onChange={handleTypeRadioChange}
            checked={formDisplayHelper.countdownChecked}
          />
          Countdown
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
              <Datepicker />
            </label>
          </div>
        </>
      )}

      {formDisplayHelper.isCountdown && (
        <>
          <div className="form-input form-input-counts-down-to">
            <label>
              Counts down to
              <Datepicker />
            </label>
          </div>
        </>
      )}

      <div className="form-input form-input-submit">
        <input type="submit" value="Create entry" disabled={true}></input>
      </div>
    </StyledAddEntryForm>
  );
}
