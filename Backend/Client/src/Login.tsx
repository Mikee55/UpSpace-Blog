import React from "react";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const user = { email, password };

    try {
      const response = await fetch("api/user/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        console.log(response);

        const userData = await response.json();
        console.log(userData);
        login(userData);
        toast.success("Welcome", {
          hideProgressBar: true,
        });

        setTimeout(() => {
          navigate("/");
        }, 1500);
      }

      const json: any = await response.json();

      if (!response) {
        alert("Please input correct credentials");
        setError(json.error);
      }
    } catch (error) {
      console.error({ message: "Error logging in" }, error);
    }
  };
  return (
    <>
      <NavBar />
      <div className="mt-32 flex flex-col justify-center items-center">
        <h3 className="text-3xl">Log in</h3>

        <div className="">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:p-10 sm:px-64"
          >
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
                Log in
              </button>
            </div>

            <div>
              <h1>
                Sign up{" "}
                <Link to={"/signup"} className="text-sky-700 underline">
                  here
                </Link>{" "}
                if you do not have an account.
              </h1>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />

      <Footer />
    </>
  );
};

export default Login;
