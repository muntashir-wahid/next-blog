import BlogCard from "components/Cards/BlogCard";
import { fetchAllBlogs } from "./../blogs-data";

export default function Page() {
  const blogs = fetchAllBlogs();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </section>
  );
}
