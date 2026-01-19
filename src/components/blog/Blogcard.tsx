import type { BlogProps } from "../../types/blog";




interface Props{
    blog:BlogProps
}



const BlogCard=({blog}:Props)=>{
    return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition hover:scale-103 transition-transform duration-300 mb-5">
        <img
            src={blog.coverImage}
            alt={blog.title}
            className="h-96 border-black border-2 rounded-md w-full object-cover"
        />


      <h2 className="text-xl font-bold mt-2">{blog.title}</h2>
      <p className="text-gray-600">{blog.description}</p>
      <p className="text-sm text-gray-400 mt-1">{new Date(blog.date).toDateString()}</p>
    </div>
  );
}



export default BlogCard;