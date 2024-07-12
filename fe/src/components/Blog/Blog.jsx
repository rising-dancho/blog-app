import moment from "moment";
import { Link } from "react-router-dom";

const Blog = ({ blogId, date, imageUrl, username, title }) => {
  return (
    <Link to={`/blog/${blogId}`} className="w-1/4 m-1 p-2 bg-slate-800">
      <h1>{title}</h1>
      <div className="flex justify-between">
        <div>{username}</div>
        <div className="text-xs italic">
          {moment(date).format("MMMM Do YYYY, h:mm a")}
        </div>
      </div>
      <div>
        <img src={imageUrl} alt={title} />
      </div>
    </Link>
  );
};

export default Blog;
