import React from "react";

export const Radio = ({ id, options, onChange }) => {
  return (
    <>
      {options.map((option) => (
        <div key={option}>
          <input
            style={{
              display: "initial",
              width: "initial",
              fontFamily: "monospace",
            }}
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
