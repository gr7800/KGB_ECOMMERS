import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ id, title }) => {
  const description =
    " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora autem labore consequatur esse error veritatis, alias, saepe aspernatur quisquam repellat quasi sit nesciunt praesentium voluptate perferendis. Veniam fugit labore architecto.";
  return (
    <Link to={`/blog/${id}`}>
      <div className="flex flex-col bg-rose-300 w-96 max-w-64 h-64 p-4 rounded cursor-pointer hover:bg-[#fef4f2] max-sm:bg-[#fef4f2] transition shadow-xl">
        <p className="bg-rose-900 p-2 rounded-full w-10 text-center text-white font-bold">
          {id}
        </p>
        <p className="py-1 font-bold text-xl text-rose-900 line-clamp-2 overflow-ellipsis">
          {title}
        </p>

        <p className="text-white font-semibold overflow-ellipsis">
          {description.split(" ").slice(0, 15).join(" ") + "..."}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
