import { useBlogs } from "@/features/blogs/hook";
import { useNavigate } from "react-router-dom";
import BlogCard from "./Blogcard";




const BlogList = () => {

  const navigate=useNavigate();
  const { data, isLoading, isError } = useBlogs();

  if (isLoading) 
    return <p className="text-gray-400">Loading blogs...</p>;
  if (isError) 
    return <p className="text-red-500">Failed to load blogs</p>;

  if (!data?.length) {
    return <p className="text-gray-500">No blogs found</p>;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((blog) => (
        <div
          key={blog.id}
          onClick={() => navigate(`/blogs/${blog.id}`)}
          className="cursor-pointer"
        >
          <BlogCard blog={blog} />
        </div>
      ))}
    </div>
  );
};

export default BlogList;