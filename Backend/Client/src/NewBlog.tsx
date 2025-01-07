import { useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./contexts/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState<any>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // const blog = { title, description, category, author, date, image };

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("author", author);
    formData.append("date", date);
    formData.append("image", image);

    try {
      const response = await fetch("/api/blogs", {
        method: "POST",
        // headers: { "content-Type": "application/json" },
        // body: JSON.stringify(blog),
        body: formData,
      });
      console.log("new blog added");
      toast.success("Blog added succesfully!", {
        hideProgressBar: true,
      });
      setTimeout(() => {
        navigate("/");
      }, 1500);

      const json = await response.json();

      if (!response) {
        setError(json.error);
      }
    } catch (error) {
      console.error("Fetch error");
    }
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    setImage(file);
    setImageUrl(URL.createObjectURL(file)); // For preview
  };

  return (
    <>
      <NavBar />
      <div className="m-24 sm:m-32">
        <h2 className="flex justify-center">Add a New Blog</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:p-10 sm:px-64"
        >
          <label className="p-2">Blog title</label>
          <input
            type="text"
            className="border-2 rounded-lg"
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <label className="p-2">Category</label>
          <select
            id="category"
            name="category"
            className="border-2 rounded-lg"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="">Please choose a category</option>
            <option value="Architecture">Architecture</option>
            <option value="Interior">Interior</option>
            <option value="Construction">Construction</option>
            <option value="Landscape">Landscape</option>
            <option value="Other">Other</option>
          </select>

          <label className="p-2">Description</label>
          <textarea
            className="border-2 rounded-lg"
            required
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>

          <label className="p-2">Author</label>
          <input
            type="text"
            className="border-2 rounded-lg"
            required
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />

          <label className="p-2">Date</label>
          <input
            type="date"
            className="border-2 rounded-lg text-slate-500"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />

          <label className="p-2">Image</label>
          <input
            type="file"
            placeholder="select image"
            className="border-2 rounded-lg"
            onChange={handleImageChange}
          />

          <div className="flex justify-center m-2">
            <button className="m-2 p-2 w-40 rounded-lg bg-orange-400">
              Add Blog
            </button>
          </div>
        </form>
      </div>

      <Footer />
      <ToastContainer />
    </>
  );
};

export default NewBlog;
