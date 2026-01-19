import BlogForm from "@/components/blog/Blogform";


const BlogCreate = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Create New Blog</h1>
      <BlogForm/>
    </div>
  );
};

export default BlogCreate;
