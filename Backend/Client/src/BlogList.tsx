import FirstPost from "./assets/Salon.jpeg";
import SocialInteraction from "./socialInteraction";
import { Link } from "react-router-dom";

const BlogList = (props: any) => {
  const blogs = props.blogs;
  const isSingleBlog = props.isSingleBlog;

  return (
    <div>
      {blogs.map((blog: any) => (
        <div
          className="m-10 border rounded-3xl shadow overflow-hidden"
          key={blog._id}
        >
          {isSingleBlog ? (
            <img
              src={blog.image}
              alt="Post 1"
              className="w-full object-cover"
            />
          ) : (
            <Link to={`/blog/${blog._id}`}>
              <img
                src={blog.image}
                alt="Post 1"
                className="w-full object-cover"
              />
            </Link>
          )}

          <div className="mx-5 p-2">
            <div className="text-xs text-slate-500 px-2">
              <p>{blog.author}</p>
              <p>{blog.date}</p>
            </div>
            {isSingleBlog ? (
              <h2 className="py-2 text-xl">{blog.title}</h2>
            ) : (
              <Link to="/blog/:id">
                <h2 className="py-2 text-xl">{blog.title}</h2>
              </Link>
            )}

            <p className="text-sm ">{blog.shortDescription}</p>
          </div>

          <hr className="mx-4" />

          <SocialInteraction postId={blog._id} />
        </div>
      ))}
    </div>
  );
};

export default BlogList;
