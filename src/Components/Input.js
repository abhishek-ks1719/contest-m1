import React from "react";
import "../App.css";

const Input = ({ valid, label, type, name, value, onClick, error }) => {
  return (
    <div className="inputGroup">
      <div className="label">{label}</div>
      <input
        className={valid ? "valid" : "invalid"}
        type={type}
        name={name}
        value={value}
        onChange={onClick}
        autoComplete="true"
      />
      <p
        style={valid ? { display: "none" } : { display: "block", color: "red" }}
      >
        {error}
      </p>
    </div>
  );
};

export default Input;
