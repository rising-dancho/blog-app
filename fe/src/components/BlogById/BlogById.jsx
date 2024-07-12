import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const BlogById = () => {
  const [blog, setBlog] = useState({});
  const [comments, setComments] = useState([]);
  const { blogId } = useParams();

  const commentsList = comments.map((comment) => {
    return (
      <li key={comment._id}>
        <div className="flex justify-between">
          <span>{comment.userId.username}</span>
          <span className="text-xs italic">
            {moment(comment.createdAt).format("MMMM Do YYYY, h:mm a")}
          </span>
        </div>
        <div>{comment.content}</div>
      </li>
    );
  });

  useEffect(() => {
    (async () => {
      const {
        data: { data },
      } = await axios.get(`http://localhost:8080/api/v1/blogs/${blogId}`);

      setBlog(data.blog);
      setComments(data.comments);
    })();
  });
  return (
    <div className="w-1/2 m-1 p-2 bg-slate-800">
      <h1>{blog.title}</h1>
      <div className="flex justify-between">
        <p>{blog.userId?.username}</p>
        <p className="text-xs italic">
          {moment(blog.createdAt).format("MMMM Do YYYY, h:mm a")}
        </p>
      </div>
      <div>
        <img src={blog.image?.path} alt={blog.title} />
      </div>
      <div>{blog.content}</div>
      <h2 className="mt-4 text-2xl">Comments</h2>
      <ul>{comments.length ? commentsList : <li>No Comments</li>}</ul>
    </div>
  );
};

export default BlogById;
