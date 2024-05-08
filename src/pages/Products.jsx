import axios from "axios";
import React, { useEffect, useState } from "react";

function Products() {
  const [posts, setPosts] = useState([]);

  const fetchProducts = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
    console.log(res.data);
    setPosts(res.data);
    return res;
  };

  useEffect(() => {
    fetchProducts();
  });

  return (
    <>
      <div>Products</div>
      {/* <button onClick={fetchProducts}>Fetch Products</button> */}
      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <img src={post.url} alt={post.title} width={"120px"} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Products;
