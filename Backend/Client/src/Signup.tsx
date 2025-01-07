import { useEffect, useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "./contexts/AuthContext";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const user = { userName, email, password };

    try {
      const response = await fetch("api/user/signup", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        console.log("User Added");
        const userData = await response.json();
        console.log(userData);
        login(userData);
        toast.success("User added successfully", {
          hideProgressBar: true,
        });

        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        const json = await response.json();
        setError(json.error || "An error occured during signup.");
        toast.error(error, {
          hideProgressBar: true,
        });
      }
    } catch (error) {
      console.error("Fetch error", error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="mt-32 flex flex-col justify-center items-center">
        <h3 className="text-3xl">Sign Up</h3>

        <div className="">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:p-10 sm:px-64"
          >
            <label htmlFor="">User Name</label>
            <input
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              className="border-2 rounded-lg px-24"
            />

            <label htmlFor="">Email</label>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="border-2 rounded-lg"
            />

            <label htmlFor="">Password</label>
            <input
              type="text"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="border-2 rounded-lg"
            />

            <div className="flex justify-center m-2">
              <button className="m-2 p-2 w-40 rounded-lg bg-orange-400">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />

      <Footer />
    </>
  );
};

export default Signup;
