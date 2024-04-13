import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1); //Method use to convert first letter of word to Capital
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong> :{" "}
        <b>{props.alert.msg}</b>

      </div>
    )
  );
}

export default Alert;
// props.alert&& is an condition if it false then the div function runs--- this happens because all jsx will be converted to javascript calls
