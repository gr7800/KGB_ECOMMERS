import BlogCard from "../component/Cards/BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBlogs } from "../redux/slices/blogSlice";

const Blog = () => {
  const { blogs, singleblogData, isLoading, error } = useSelector((state) => state.blogs);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [])

  return (
    <section className='bg-light-pink-1 w-full py-8 px-4 flex justify-center items-center'>
      <div className="flex flex-wrap w-full justify-center gap-16">
        {blogs && blogs.length > 0 && blogs.map(blog => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </section>
  );
}

export default Blog;
