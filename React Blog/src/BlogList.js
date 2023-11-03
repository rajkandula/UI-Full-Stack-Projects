import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({ blogs, title }) => {
  //   const blogs = props.blogs;
  //   const title = props.title;
  //   console.log(props, blogs);
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blog/${blog.id}`}>
            <h1>{blog.title}</h1>
            <p> {blog.body}</p>

            <p className="alignRight">Written by {blog.author}</p>
          </Link>

          {/* <button onClick={() => handleDelete(blog.id)}> Delete Blog</button> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
