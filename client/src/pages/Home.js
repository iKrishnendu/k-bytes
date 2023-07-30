import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
// import { MYSITE } from "../../../server/config/keys";

// const MYSITE = "http://localhost:4000";

const MYSITE = "http://k-bytes-server.vercel.app";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(MYSITE + "/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <>
      <div>
        <p className="text-2xl text-center mt-10 mb-16">
          Welcome to our Blog <br></br>
          <span>
            <b>
              K-Bytes. <span className="text-pink-500">♥️</span>
            </b>
          </span>
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center ">
        {posts.length > 0 && posts.map((post) => <PostCard {...post} />)}
      </div>
    </>
  );
};

export default Home;
