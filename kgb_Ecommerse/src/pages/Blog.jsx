import BlogCard from "../component/Cards/BlogCard";

const Blog = () => {
  const blogs = [1, 2, 3, 4, 5, 6, 7, 7, 7]
  return (
    <section className='bg-light-pink-1 w-full py-8 px-4 flex justify-center items-center'>
      <div className="flex flex-wrap w-full justify-center gap-6">
        {blogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
}

export default Blog;
