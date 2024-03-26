import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";

const InfiniteScrollPage = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setTimeout(() => {
      const newItems = Array.from(
        { length: 10 },
        (_, index) => `Item ${items.length + index + 1}`
      );
      setItems([...items, ...newItems]);
      setHasMore(items.length < 100);
    }, 1500);
  };

  return (
    <div>
      <h1>Infinite Scroll Page</h1>
      <button
        onClick={() => navigate("/")}
        style={{ padding: "10px 20px", background: "orange", border: "none" }}
      >
        Back
      </button>

      <InfiniteScroll
        dataLength={items.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more items to load</p>}
      >
        {items.map((item, index) =>
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              margin: "10px 0"
            }}
          >
            {item}
          </div>
        )}
      </InfiniteScroll>
    </div>
  );
};

export default InfiniteScrollPage;
