import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>REACT ASSIGNMENTS</h1>
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "fit-content",
          margin: "auto",
          border: "1px solid black",
          padding: "50px"
        }}
      >
        <button
          onClick={() => navigate("/elementtransfer")}
          style={{ padding: "10px 20px", background: "orange", border: "none" }}
        >
          ELEMENT TRANSFER
        </button>
        <button
          onClick={() => navigate("/nestedlist")}
          style={{ padding: "10px 20px", background: "orange", border: "none" }}
        >
          NESTED LIST
        </button>
        <button
          onClick={() => navigate("/infinitescroll")}
          style={{ padding: "10px 20px", background: "orange", border: "none" }}
        >
          INFINITE SCROLL
        </button>
        <button
          onClick={() => navigate("/boxsplit")}
          style={{ padding: "10px 20px", background: "orange", border: "none" }}
        >
          BOX SPLIT
        </button>
      </div>
    </div>
  );
};

export default Home;
