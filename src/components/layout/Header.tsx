import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="h-14 border-b flex items-center justify-between px-6 z-10 bg-purple-500">
      <Link to="/" className="text-xl font-bold text-slate-800">
        CA Monk Blogs
      </Link>

      <Link to="/create">
        <Button className="bg-green-600 hover:cursor-pointer">Create Blog</Button>
      </Link>
    </header>
  );
};

export default Header;