import React from "react";

const Button = ({ content, size, color, shape, onClick, tdClass }) => {
  const sizeClass = size ? "td-btn-" + size : "";
  const colorClass = color ? "td-btn-" + color : "";
  let shapeClass = "";
  if (shape === "square") shapeClass = "td-btn-square";
  else if (shape === "circle") shapeClass = "td-btn-square td-btn-circle";

  let className =
    "td-button " + sizeClass + " " + colorClass + " " + shapeClass;
  if (tdClass) className += " " + tdClass;

  return (
    <button className={className} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
