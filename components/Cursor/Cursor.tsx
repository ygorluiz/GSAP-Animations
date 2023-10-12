import React from "react";
import useMousePosition from "@/utils/helper";

const Cursor = () => {
  const { x, y } = useMousePosition();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      <svg
        width={30}
        height={30}
        viewBox="0 0 50 50"
        style={{
          position: "absolute",
          left: x,
          top: y,
          transform: "translate(-50%, -50%)",
          transition: "0.1s",
        }}
      >
        <circle cx="25" cy="25" r="10" fill="#77bbea" />
      </svg>
    </div>
  );
};

export default Cursor;
