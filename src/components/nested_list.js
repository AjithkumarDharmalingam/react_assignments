import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NestedList = () => {
  const navigate = useNavigate();
  const [nestedData, setNestedData] = useState([
    {
      id: 1,
      name: "Users",
      children: [
        {
          id: 11,
          name: "Guest",
          children: [
            { id: 111, name: "Desktop", children: [] },
            { id: 112, name: "Documents", children: [] },
            { id: 113, name: "Downloads", children: [] },
            { id: 114, name: "Movies", children: [] },
            { id: 115, name: "Music", children: [] },
            { id: 116, name: "Pictures", children: [] },
            { id: 117, name: "Public", children: [] }
          ]
        },
        {
          id: 12,
          name: "Admin",
          children: [
            { id: 121, name: "App Data", children: [] },
            { id: 122, name: "Local", children: [] },
            { id: 123, name: "Program Files", children: [] },
            { id: 122, name: "Program Data", children: [] }
          ]
        }
      ],
      isOpen: false
    },
    {
      id: 2,
      name: "Gadgets",
      children: [
        {
          id: 21,
          name: "Watchs",
          children: [
            { id: 211, name: "Sonata", children: [] },
            { id: 212, name: "Titan", children: [] },
            { id: 213, name: "Fastrack", children: [] },
            { id: 214, name: "HMT Watch", children: [] },
            { id: 215, name: "Rolex", children: [] }
          ]
        },
        {
          id: 22,
          name: "Mobiles",
          children: [
            { id: 221, name: "Samsung", children: [] },
            { id: 222, name: "Nokia", children: [] },
            { id: 223, name: "Oppo", children: [] },
            { id: 224, name: "Vivo", children: [] },
            { id: 222, name: "Poco", children: [] }
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
            <br />
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
