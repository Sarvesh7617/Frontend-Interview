import { useBlog } from "@/features/blogs/hook";
import { useParams } from "react-router-dom";



const BlogDetail=()=>{
  const {id}=useParams<{id:string}>();
  
  const { data: blog, isLoading, isError } = useBlog(id as string);

  if (isLoading) 
    return <p>Loading blog...</p>;
  if (isError) 
    return <p>Error loading blog</p>;
  if (!blog) 
    return <p className="flex h-full font-extrabold text-4xl items-center justify-center">No blog found</p>;

  return (
    <div className="p-6 border rounded shadow">
      <h1 className="text-center text-lg font-bold underline underline-offset-4 mb-6">Blog Description</h1>
      <img
        src={blog.coverImage}
        alt={blog.title}
        className="w-full h-60 object-cover rounded mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{blog.title}</h1>
      <p className="text-gray-600 mb-2">{blog.description}</p>
      <p className="text-xs text-gray-400 mb-4">
        {new Date(blog.date).toLocaleDateString()}
      </p>
      <div className="flex gap-2 flex-wrap">
        {blog.category.map((cat) => (
          <span
            key={cat}
            className="px-3 py-1 text-xs bg-slate-200 rounded-full"
          >
            {cat}
          </span>
        ))}
      </div>
      <div className="prose max-w-none">{blog.content}</div>
    </div>
  );
}



export default BlogDetail;