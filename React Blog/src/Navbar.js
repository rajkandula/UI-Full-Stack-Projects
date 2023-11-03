import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Chan Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#f1365d",
            borderRadius: "8px",
          }}
        >
          New Blog
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
