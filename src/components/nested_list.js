import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NestedList = () => {
  const navigate = useNavigate();
  const [nestedData, setNestedData] = useState([
    {
      id: 1,
      name: "Folder 1",
      children: [
        {
          id: 11,
          name: "Folder 1.1",
          children: [
            { id: 111, name: "Sub-child 1.1.1", children: [] },
            { id: 112, name: "Sub-child 1.1.2", children: [] }
          ]
        },
        {
          id: 12,
          name: "Folder 1.2",
          children: [
            { id: 121, name: "Sub-child 1.2.1", children: [] },
            { id: 122, name: "Sub-child 1.2.2", children: [] }
          ]
        }
      ],
      isOpen: false
    },
    {
      id: 2,
      name: "Folder 2",
      children: [
        {
          id: 21,
          name: "Folder 2.1",
          children: [
            { id: 211, name: "Sub-child 2.1.1", children: [] },
            { id: 212, name: "Sub-child 2.1.2", children: [] }
          ]
        },
        {
          id: 22,
          name: "Folder 2.2",
          children: [
            { id: 221, name: "Sub-child 2.2.1", children: [] },
            { id: 222, name: "Sub-child 2.2.2", children: [] }
          ]
        }
      ],
      isOpen: false
    }
  ]);

  // Function to handle toggling of children visibility
  const toggleChildren = node => {
    const updatedData = nestedData.map(item => {
      if (item.id === node.id) {
        return { ...item, isOpen: !item.isOpen };
      } else if (item.children) {
        return {
          ...item,
          children: toggleChildrenInTree(item.children, node.id)
        };
      }
      return item;
    });
    setNestedData(updatedData);
  };

  // Function to toggle children visibility recursively
  const toggleChildrenInTree = (tree, nodeId) => {
    return tree.map(item => {
      if (item.id === nodeId) {
        return { ...item, isOpen: !item.isOpen };
      } else if (item.children) {
        return {
          ...item,
          children: toggleChildrenInTree(item.children, nodeId)
        };
      }
      return item;
    });
  };

  // Recursive function to render nested list
  const renderNestedList = nodes => {
    return (
      <ul>
        {nodes.map(node =>
          <li key={node.id}>
            <div onClick={() => toggleChildren(node)}>
              {node.name}
            </div>
            {node.isOpen && node.children && renderNestedList(node.children)}
          </li>
        )}
      </ul>
    );
  };

  return (
    <div
      style={{
        width: "fit-content",
        marginTop: "100px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: "20px",
        border: "1px solid black",
        paddingBlock: "30px",
        paddingInline: "90px"
      }}
    >
      <h1>Nested List</h1>
      {renderNestedList(nestedData)}
      <button
        onClick={() => navigate("/")}
        style={{ padding: "10px 20px", background: "orange", border: "none" }}
      >
        Back
      </button>
    </div>
  );
};

export default NestedList;
