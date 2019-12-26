import React, { useState } from "react";
import styled from "styled-components";
import {
  formatDateForDateInput,
  formatDateForReading,
  transformDateStringToDate,
  displayDatesDistance
} from "../utils/dates";

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

  input[type="text"],
  input[type="date"] {
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

  small {
    display: block;
    width: 100%;
    text-align: center;
    margin-top: 0.5rem;
    font-style: italic;
  }
`;

export default function AddEntryForm() {
  const now = new Date();
  const [loading, setLoading] = useState(false);
  const [entryType, setEntryType] = useState("type-counter");
  const [startsOn, setStartsOn] = useState({
    formatValue: formatDateForDateInput(now),
    rawValue: now
  });
  const [description, setDescription] = useState("");

  let formDisplayHelper = {
    isCounter: entryType === `type-counter` ? true : false,
    isCountdown: entryType === `type-countdown` ? true : false,
    descriptionPlaceholder:
      entryType === `type-counter` ? `Days without bread` : `Days until...`,
    submitCTA:
      entryType === `type-counter` ? `Create counter` : `Create countdown`,
    startsOn: {
      readableDate: formatDateForReading(startsOn.rawValue),
      datesDistance: displayDatesDistance(startsOn.rawValue, now)
    }
  };

  const handleFormSubmit = async function(e) {
    e.preventDefault();
    await setLoading(true);

    const formData = {
      entryType,
      startsOn,
      description,
      createdOn: new Date(),
      new: true
    };
  };

  const handleTypeRadioChange = function(e) {
    setEntryType(e.target.id);
  };

  const handleDescriptionChange = function(e) {
    setDescription(e.target.value);
  };

  const handleDatePickerChange = function(e) {
    setStartsOn({
      formatValue: e.target.value,
      rawValue: transformDateStringToDate(e.target.value)
    });
  };

  return (
    <StyledAddEntryForm name="add-entry" onSubmit={handleFormSubmit}>
      <div className="form-input form-input-type">
        <span className="label">Select the type of entry</span>
        <label>
          <input
            type="radio"
            id="type-counter"
            name="type"
            value="counter"
            onChange={handleTypeRadioChange}
            checked={formDisplayHelper.isCounter}
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
            checked={formDisplayHelper.isCountdown}
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
            onChange={handleDescriptionChange}
            value={description}
          ></input>
        </label>
      </div>

      {formDisplayHelper.isCounter && (
        <>
          <div className="form-input form-input-starts-on">
            <label>
              Starts on
              <input
                type="date"
                id="starts-on"
                name="starts-on"
                required
                onChange={handleDatePickerChange}
                value={startsOn.formatValue}
              />
              <small>
                {formDisplayHelper.startsOn.readableDate}{" "}
                {formDisplayHelper.startsOn.datesDistance !==
                "less than a minute"
                  ? ` (~ ${formDisplayHelper.startsOn.datesDistance})`
                  : ""}
              </small>
            </label>
          </div>
        </>
      )}

      {formDisplayHelper.isCountdown && (
        <>
          <div className="form-input form-input-counts-down-to">
            <label>
              Counts down to
              <input
                type="date"
                id="counts-down-to"
                name="counts-down-to"
                required
                onChange={handleDatePickerChange}
              />
            </label>
          </div>
        </>
      )}

      <div className="form-input form-input-submit">
        <input
          type="submit"
          value={loading ? "Saving..." : formDisplayHelper.submitCTA}
          disabled={loading ? true : false}
        ></input>
      </div>
    </StyledAddEntryForm>
  );
}
