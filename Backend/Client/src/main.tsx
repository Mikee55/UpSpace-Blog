import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import Categories from "./Categories.tsx";
import About from "./About.tsx";
import BlogDetail from "./BlogDetail.tsx";
import NewBlog from "./NewBlog.tsx";
import Contact from "./Contact.tsx";
import CatBlogs from "./CatBlogs.tsx";
import Signup from "./Signup.tsx";
import Login from "./Login.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/blog/:id",
    element: <BlogDetail />,
  },
  {
    path: "/categories/:category",
    element: <CatBlogs />,
  },
  {
    path: "/newblog",
    element: <NewBlog />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
