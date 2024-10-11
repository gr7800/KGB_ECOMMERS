import { useEffect, useState } from "react";
import BlogCard from "../component/Cards/BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../redux/slices/blogSlice";
import Pagination from "../component/Pagination";
import { useLocation, useNavigate } from "react-router-dom";

const Blog = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page = parseInt(queryParams.get("page")) || 1;
  const [pageIndex, setPageIndex] = useState(page - 1 || 0);
  const { blogs, singleblogData, isLoading, error } = useSelector(
    (state) => state.blogs
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  function gotoPage(currePageIndex) {
    setPageIndex(currePageIndex);
    queryParams.set("page", currePageIndex + 1);
    navigate(`${location.pathname}?${queryParams.toString()}`);
  }

  useEffect(() => {
    setPageIndex(page - 1);
  }, [page]);

  return (
    <section className="bg-light-pink-1 w-full py-8 px-4 flex-col justify-center items-center">
      <div className="flex flex-wrap w-full justify-center gap-5">
        {blogs &&
          blogs.length > 0 &&
          blogs
            .slice(pageIndex * 10, pageIndex * 10 + 10)
            .map((blog) => <BlogCard key={blog.id} {...blog} />)}
      </div>
      {blogs.length > 1 && (
        <div className="flex justify-center pr-5">
          {" "}
          <Pagination
            pageIndex={pageIndex}
            gotoPage={gotoPage}
            pageCount={Math.floor(blogs.length / 10)}
          />
        </div>
      )}
    </section>
  );
};

export default Blog;
