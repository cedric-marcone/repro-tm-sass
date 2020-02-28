import React from "react";

const Spinner = ({
  size = 36,
  borderSize = 4,
  color = "#eee",
  otherColor = "#c20318"
}) => (
  <div className="spinner">
    <style jsx>{`
      .spinner {
        flex: 0 0 ${size}px;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        border-style: solid;
        border-width: ${borderSize}px;
        border-color: ${color} ${otherColor} ${otherColor} ${color};
        animation: spin 1s cubic-bezier(0.4, 0, 0.2, 1) infinite 240ms;
      }
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
);

export default Spinner;
