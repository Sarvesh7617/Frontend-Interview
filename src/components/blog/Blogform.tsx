import { useCreateBlog } from "@/features/blogs/hook";
import { useForm } from "react-hook-form";
import { Button} from "../ui/button";
import type { BlogProps } from "@/types/blog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useNavigate } from "react-router-dom";


type BlogFormInput=Omit<BlogProps,"id" | "date" | "category"> & {
    category:string;
};

const BlogForm=()=>{
  
    const {register,handleSubmit,reset,formState:{errors}}=useForm<BlogFormInput>();
    const mutation = useCreateBlog();
    const navigate=useNavigate();
    
    const formSubmit = (data:BlogFormInput) => {
        mutation.mutate({
        ...data,
        category:data.category.split(",").map(c=>c.trim()).filter(Boolean),
        date: new Date().toISOString(),
        coverImage: data.coverImage || "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
        });
        reset()
    };


    return (
    <>
    <div className="flex flex-wrap items-center justify-evenly mb-5 gap-3">
        {mutation.isError && <p className="text-red-500 text-center text-2xl">Error creating blog</p>}
        {mutation.isSuccess && <p className="text-green-500 text-center text-2xl">Blog created!</p>}
        {mutation.isSuccess && <Button className="hover:cursor-pointer" onClick={()=>navigate('/')}>Go to List</Button>}
    </div>
        <form onSubmit={handleSubmit(formSubmit)} className="space-y-4 p-4 border border-2 rounded">
            <Label>Title*</Label>
            <Input
                type="text"
                placeholder="title"
                {...register("title",{
                    required:"Title is required"
                })}
                className="border p-2 w-full"
            />
            {errors.title && <p className="text-red-400 text-sm">{errors.title.message}</p>}
            <Label>Category(comma separated)*</Label>
            <Input
                type="text"
                placeholder="TECH, FINANCE"
                {...register("category",{
                    required:"category is required"
                })}
                className="border p-2 w-full"
            />
            {errors.category && <p className="text-red-400 text-sm">{errors.category.message}</p>}
            <Label>Description*</Label>
            <Input
                type="text"
                placeholder="description"
                {...register("description",{
                    required:"description is required"
                })}
                className="border p-2 w-full"
            />
            {errors.description && <p className="text-red-400 text-sm">{errors.description.message}</p>}
            
            <Label>Blog Content*</Label>
            <Textarea
                placeholder="full blog content"
                {...register("content",{
                    required:"blog content is required"
                })}
                className="border p-2 w-full"
            />
            {errors.content && <p className="text-red-500 text-sm">{errors.content.message}</p>}
            <Label>Image URL</Label>
            <Input 
                placeholder="cover Image URL" 
                {...register("coverImage",{required:false})} 
                className="border p-2 w-full" 
            />
            <Button
                type="submit"
                className="bg-blue-500 hover:cursor-pointer"
            >
                {mutation.isPending ? "Creating..." : "Create Blog"}
            </Button>
        </form>
    </>
    );
}



export default BlogForm;