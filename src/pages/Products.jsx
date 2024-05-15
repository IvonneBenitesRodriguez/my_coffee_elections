import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/Products.css";

function Products() {
  const [posts, setPosts] = useState([]);

  const fetchProducts = async () => {
    const res = await axios.get("https://fake-coffee-api.vercel.app/api");
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
            <h3 className="apiTitle">{post.name}</h3>
            <p className="apiParagraph">{post.description}</p>

            <span className="apiSpan">${post.price}</span>
            <div className="apiInfo">
              <img
                src={post.image_url}
                className="apiImage"
                alt={post.title}
                width={"340px"}
              />
            </div>
            <span className="apiFlavor_profile">
              Flavor:{post.flavor_profile}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Products;
