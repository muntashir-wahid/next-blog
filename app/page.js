import { fetchAllBlogs } from "./../blogs-data";

export default function Page() {
  const blogs = fetchAllBlogs();

  console.log(blogs);

  return <h1 className="text-4xl font-bold">We have {blogs.length} blogs</h1>;
}
