import { useParams } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

import { useEffect, useState } from "react";
import BlogList from "./BlogList";

interface Blog {
  category: string;
}

const CatBlogs = () => {
  const { category } = useParams<{ category: string }>();
  const [blogs, setBlogs] = useState<Blog[] | null>(null);
  // const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchCategoryBlogs = async () => {
      try {
        const response = await fetch(`/api/blogs/categories/${category}`);
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchCategoryBlogs();
  }, [category]);

  // useEffect(() => {
  //   fetch(`/api/blogs`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data: Blog[]) => {
  //       setBlogs(data);
  //     });
  // }, []);

  // useEffect(() => {
  //   if (blogs) {
  //     setFilteredBlogs(
  //       blogs.filter((blog: any) => {
  //         return blog.category === category;
  //       })
  //     );
  //   }

  //   console.log(blogs);
  // }, [blogs, category]);

  return (
    <>
      <NavBar />
      <div className="sm:mx-40 sm:my-32">
        {blogs && <BlogList blogs={blogs} />}
      </div>
      <Footer />
    </>
  );
};

export default CatBlogs;
