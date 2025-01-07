import Footer from "./Footer";
import NavBar from "./NavBar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useEffect, useState } from "react";

import BlogList from "./BlogList";
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const BlogDetail = () => {
  const [blogs, setBlogs] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/blogs/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  }, [id]);

  const handleClick = () => {
    fetch(`/api/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      toast.success("Blog deleted succesfully!", {
        hideProgressBar: true,
      });
      setTimeout(() => {
        navigate("/");
      }, 1000);
    });
  };
  return (
    <>
      <NavBar />
      <div className="sm:mx-40 mt-32">
        {blogs && <BlogList blogs={[blogs]} isSingleBlog={true} />}
      </div>
      <div className="flex justify-center m-10">
        <button
          onClick={handleClick}
          className="p-1 px-3 rounded-2xl bg-slate-300"
        >
          Delete
        </button>
      </div>

      <Footer />
      <ToastContainer />
    </>
  );
};

export default BlogDetail;
