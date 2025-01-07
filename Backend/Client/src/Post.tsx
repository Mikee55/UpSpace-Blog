import { useEffect, useState } from "react";

import BlogList from "./BlogList";

const Post = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <div className="sm:mx-40 my-32">
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Post;
