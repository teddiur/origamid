import React from "react";

export const InputItem = ({ label, name, type, setForm }) => {
  const [value, setValue] = React.useState("");

  function onChange({ target }) {
    setValue(target.value);
  }

  React.useEffect(() => {
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  }, [value, name, setForm]);

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input name={name} type={type} value={value} onChange={onChange} />
    </>
  );
};
