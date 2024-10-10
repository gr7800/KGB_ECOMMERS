import { useEffect, useState } from "react";
import BlogCard from "../component/Cards/BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../redux/slices/blogSlice";
import Pagination from "../component/Pagination";

const Blog = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const { blogs, singleblogData, isLoading, error } = useSelector(
    (state) => state.blogs
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  function gotoPage(currentPageIndex) {
    setPageIndex(currentPageIndex);
  }


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
