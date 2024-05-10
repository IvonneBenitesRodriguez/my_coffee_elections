import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/Products.css";

function Products() {
  const [posts, setPosts] = useState([]);

  const fetchProducts = async () => {
    const res = await axios.get("https://api.sampleapis.com/coffee/hot");
    console.log(res.data);
    setPosts(res.data);
    return res;
  };

  useEffect(() => {
    fetchProducts();
  });

  return (
    <>
      <div className="menu">
        <h1 className="menuTitle">Products</h1>
      </div>
      {/* <button onClick={fetchProducts}>Fetch Products</button> */}
      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>
            <h3 className="apiTitle">{post.title}</h3>
            <p className="apiParagraph">{post.description}</p>
            <img
              src={post.image}
              className="apiImage"
              alt={post.title}
              width={"140px"}
            />
            <span className="apiSpan">{post.ingredients}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Products;
