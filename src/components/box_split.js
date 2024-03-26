import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Boxsplit = () => {
  const [squares, setSquares] = useState([{ id: 1, x: 0, y: 0, size: 400 }]);
  const navigate = useNavigate();
  const handleClick = square => {
    const { x, y, size } = square;
    const newSize = size / 2;
    const newId = squares.length + 1;

    const newSquares = [
      { id: newId, x, y, size: newSize },
      { id: newId + 1, x: x + newSize, y, size: newSize },
      { id: newId + 2, x, y: y + newSize, size: newSize },
      { id: newId + 3, x: x + newSize, y: y + newSize, size: newSize }
    ];

    setSquares(prevSquares => [
      ...prevSquares.filter(sq => sq.id !== square.id),
      ...newSquares
    ]);
  };

  const printSquares = () => {
    return squares.map(square =>
      <div
        key={square.id}
        style={{
          position: "absolute",

          top: square.y,
          left: square.x,
          width: square.size,
          height: square.size,
          backgroundColor: "lightblue",
          border: "1px solid darkblue"
        }}
        onClick={() => handleClick(square)}
      />
    );
  };

  return (
    <div>
      <h1>Box Split</h1>
      <div
        style={{
          position: "relative",
          width: "400px",
          height: "400px",
          margin: "auto"
        }}
      >
        {printSquares()}
      </div>{" "}
      <br />
      <button
        onClick={() => navigate("/")}
        style={{ padding: "10px 20px", background: "orange", border: "none" }}
      >
        Back
      </button>
    </div>
  );
};

export default Boxsplit;
