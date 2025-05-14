import React from "react";

function ReusableBtn(props) {
  let varStyle = {
    primary: { backgroundColor: "blue", color: "white" },
    secondary: { backgroundColor: "gray", color: "white" },
    danger: { backgroundColor: "red", color: "white" },
  };

  let sizeStyle = {
    small: { padding: "4px 8px", fontSize: "12px" },
    medium: { padding: "8px 16px", fontSize: "14px" },
    large: { padding: "12px 24px", fontSize: "16px" },
  };

  let style = {
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
    ...varStyle[props.variant],
    ...sizeStyle[props.size],
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <button style={style} onClick={props.onClick}>
          {props.label}
        </button>
      </div>
    </>
  );
}

export default ReusableBtn;
