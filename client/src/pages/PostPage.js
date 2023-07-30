import { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import { UserContext } from "../components/UserContext";
import { Link } from "react-router-dom";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import { LuEdit } from "react-icons/lu";
// import { MYSITE } from "../../../server/config/keys";

// const MYSITE = "http://localhost:4000";
const MYSITE = "http://k-bytes-server.vercel.app";

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    fetch(`${MYSITE}/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  if (!postInfo) return "";

  //delete

  async function deletePost(ev) {
    const response = await fetch(`${MYSITE}/post/${id}`, {
      method: "DELETE",
      // body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  }
  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-3">{postInfo.title}</h1>
      <time className="text-center text-gray-400 block p-2">
        {formatISO9075(new Date(postInfo.createdAt))}
      </time>
      <div className="text-center">by @{postInfo.author.username}</div>
      {userInfo.id === postInfo.author._id && (
        <div className="flex mt-6">
          <div className="py-2 bg-[#c8e8cb] rounded-md ">
            <Link
              className=" flex items-center px-1 gap-1 mx-1 "
              to={`/edit/${postInfo._id}`}
            >
              <LuEdit />
              Edit this post
            </Link>
          </div>
          <button
            className="mx-2  bg-[#e8cac8] p-2 rounded-md flex flex-row items-center gap-1"
            onClick={deletePost}
          >
            <MdOutlineRemoveCircleOutline /> Delete
          </button>
        </div>
      )}
      <div className="image">
        <img
          src={`${MYSITE}/${postInfo.cover}`}
          alt=""
          className="object-cover object-center max-h-72 w-full mb-2 mt-4"
        />
      </div>
      <div
        className="content my-7 leading-loose text-xl"
        dangerouslySetInnerHTML={{ __html: postInfo.content }}
      />
    </div>
  );
}
