import { AxiosInstance } from "@/lib/axios";
import type { BlogProps } from "@/types/blog";


const getBlogs = async (): Promise<BlogProps[]> => {
  const { data } = await AxiosInstance.get("/blogs");
  return data;
};

const getBlogById = async (id: string): Promise<BlogProps> => {
  const { data } = await AxiosInstance.get(`/blogs/${id}`);
  return data;
};

const createBlog = async (blog: Omit<BlogProps, "id">): Promise<BlogProps> => {
  const { data } = await AxiosInstance.post("/blogs", blog);
  return data;
};



export {getBlogById,getBlogs,createBlog};