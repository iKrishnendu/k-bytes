import React from "react";
import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

const PostCard = ({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) => {
  return (
    <div className="">
      <div className="post shadow-lg bg-[#F3F3F2] shadow-blue-100 rounded-lg p-2 h-96 overflow-hidden">
        {/* <div className="h-80"> */}
        <div className="overflow-hidden rounded-lg">
          <Link to={`/post/${_id}`}>
            <img
              src={"http://localhost:4000/" + cover}
              alt=""
              className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-48"
            />
          </Link>
        </div>

        <div className="info pt-2 block">
          <div className="category gap-2 items-center">
            {/* <small className="bg-green-200 rounded-full px-2 py-1 cursor-pointer ">
              dog
            </small> */}
            <time className="font-light">
              {formatISO9075(new Date(createdAt))}
            </time>
            <small className="text-base">{" @" + author.username}</small>
          </div>
        </div>
        <Link to={`/post/${_id}`}>
          <h2 className="font-bold text-xl cursor-pointer h-14 overflow-hidden">
            {title.slice(0, 50)}
            {title.length >= 50 ? ".." : null}
          </h2>
        </Link>
        <p
          className={`font-normal text-gray-500 transition mt-2 overflow-hidden ${
            summary.length > 80 ? "bg-opacity-10" : null
          }`}
        >
          {summary.slice(0, 100)}
          {summary.length > 100 ? "..." : null}
        </p>
      </div>
      <p
        className="text-center mt-3  py-2 w-full object-none object-bottom rounded-b-2xl"
        // style={{
        //   height: "200px",
        //   backgroundImage: "linear-gradient(to bottom, white, gray)",
        // }}
      >
        {/* <a href="" className="bg-gray-300  my-2  p-1 px-2 rounded-full">
            Read More
          </a> */}
      </p>
      {/* </div> */}
    </div>
  );
};

export default PostCard;
