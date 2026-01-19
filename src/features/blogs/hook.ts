import type { BlogProps } from "@/types/blog";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog, getBlogById, getBlogs } from "./api";



// Get all blogs
const useBlogs=() =>{
  return useQuery<BlogProps[]>({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });
}

// Get single blog by ID
const useBlog=(id?: string)=> {
  return useQuery<BlogProps>({
    queryKey: ["blog", id],
    queryFn: () => getBlogById(id as string),
    enabled: !!id,
  });
}

// Create new blog
const useCreateBlog=()=> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (blog: Omit<BlogProps, "id">) =>createBlog(blog),
    onSuccess: () => {
      // invalidate blogs list so it refetches
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
}



export {useBlog,useCreateBlog,useBlogs};