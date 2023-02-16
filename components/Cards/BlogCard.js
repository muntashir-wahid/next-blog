import Link from "next/link";
import React from "react";

const BlogCard = (props) => {
  const { title, author, publishedDate, _id, picture } = props.blog;

  const readableDate = new Date(publishedDate).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="bg-blue-100 rounded-md shadow-md flex flex-col gap-4 p-3">
      <figure>
        <img className="w-full h-96 rounded-md" src={picture} alt={title} />
      </figure>
      <h3 className="text-2xl font-semibold text-center">{title}</h3>
      <div className="font-medium">
        <p>Published: {readableDate}</p>
        <p>Author: {author}</p>
      </div>
      <div className="w-full flex justify-end">
        <Link
          className="px-4 py-2 bg-blue-800 text-white font-medium rounded-md"
          href={`/blogs/${_id}`}
        >
          Read More
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
