import BlogList from "../components/blog/Bloglist";


const Home=()=>{
  return (
    <div className="p-6">
      <h1 className="text-2xl underline-offset-4 underline font-bold mb-4 text-center">Blogs List</h1>
      <BlogList />
    </div>
  );
}




export default Home;