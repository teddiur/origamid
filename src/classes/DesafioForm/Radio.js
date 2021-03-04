import React from "react";

export const Radio = ({ id, options, onChange }) => {
  return (
    <>
      {options.map((option) => (
        <div>
          <input
            style={{ display: "initial", width: "initial" }}
            type="radio"
            name={id}
            value={option}
            onChange={onChange}
          />
          <label style={{ display: "initial" }} htmlFor={id}>
            {option}
          </label>
        </div>
      ))}
    </>
  );
};
