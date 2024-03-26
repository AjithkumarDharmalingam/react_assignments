import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Elementtransfer = () => {
  const navigate = useNavigate();
  const [bucket1, setBucket1] = useState([
    { id: 1, name: "Item 1", selected: false },
    { id: 2, name: "Item 2", selected: false },
    { id: 3, name: "Item 3", selected: false }
  ]);
  const [bucket2, setBucket2] = useState([
    { id: 4, name: "Item 4", selected: false },
    { id: 5, name: "Item 5", selected: false },
    { id: 6, name: "Item 6", selected: false }
  ]);
  const handleToggleSelectionBucket1 = item => {
    const updatedBucket1 = bucket1.map(
      i => (i.id === item.id ? { ...i, selected: !i.selected } : i)
    );
    setBucket1(updatedBucket1);
  };

  const handleToggleSelectionBucket2 = item => {
    const updatedBucket2 = bucket2.map(
      i => (i.id === item.id ? { ...i, selected: !i.selected } : i)
    );
    setBucket2(updatedBucket2);
  };

  const addSelectedItems = () => {
    const selectedItems = bucket1.filter(item => item.selected);
    setBucket2([...bucket2, ...selectedItems]);
    const updatedBucket1 = bucket1.filter(item => !item.selected);
    setBucket1(updatedBucket1);
  };

  const removeSelectedItems = () => {
    const selectedItems = bucket2.filter(item => item.selected);
    setBucket1([...bucket1, ...selectedItems]);
    const updatedBucket2 = bucket2.filter(item => !item.selected);
    setBucket2(updatedBucket2);
  };

  const addMultipleItem = () => {
    setBucket2([...bucket2, ...bucket1]);
    setBucket1([]);
  };

  const removeAllItem = () => {
    setBucket1([...bucket1, ...bucket2]);
    setBucket2([]);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "800px",
        margin: "auto",
        paddingTop: "40px",
        alignItems: "baseline"
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
        <h2>Bucket 1</h2>
        <div
          style={{
            border: "1px solid black",
            paddingBlock: "50px",
            paddingInline: "50px"
          }}
        >
          {bucket1.map((item, index) =>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="checkbox"
                checked={item.selected}
                onChange={() => handleToggleSelectionBucket1(item)}
              />{" "}
              <p
                key={item.id}
                style={{
                  padding: "10px",
                  border: "1px solid black"
                }}
              >
                {item.name}
                {/* <button onClick={() => addSingleItem(item)}>Add</button> */}
              </p>
            </div>
          )}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          gap: "13px",
          margin: "auto"
        }}
      >
        <button
          onClick={addSelectedItems}
          style={{ padding: "10px 20px", background: "orange", border: "none" }}
        >
          Add
        </button>
        <button
          onClick={removeSelectedItems}
          style={{ padding: "10px 20px", background: "orange", border: "none" }}
        >
          Remove
        </button>
        <button
          onClick={addMultipleItem}
          style={{ padding: "10px 20px", background: "orange", border: "none" }}
        >
          Add All
        </button>
        <button
          onClick={removeAllItem}
          style={{ padding: "10px 20px", background: "orange", border: "none" }}
        >
          Remove All
        </button>
        <button
          onClick={() => navigate("/")}
          style={{ padding: "10px 20px", background: "orange", border: "none" }}
        >
          Back
        </button>
      </div>
      <div>
        <h2>Bucket 2</h2>
        <div
          style={{
            border: "1px solid black",
            paddingBlock: "50px",
            paddingInline: "50px"
          }}
        >
          {bucket2.map((item, index) =>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="checkbox"
                checked={item.selected}
                onChange={() => handleToggleSelectionBucket2(item)}
              />{" "}
              <p
                key={item.id}
                style={{
                  padding: "10px",
                  border: "1px solid black"
                }}
              >
                {item.name}
                {/* <button onClick={() => addSingleItem(item)}>Add</button> */}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Elementtransfer;
