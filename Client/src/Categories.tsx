import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ArchImg from "./assets/Architecture.jpg";
import IntImg from "./assets/Interior.jpg";
import LandImg from "./assets/Landscape.jpg";
import ConImg from "./assets/Construction.jpg";
import MoreImg from "./assets/More.jpg";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-1 sm:grid-cols-3 grid-rows-2 mt-36 m-20 sm:m-32 gap-7">
        <div className="p-28 relative overflow-hidden">
          <img
            src={ArchImg}
            alt="Architecture"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <Link to="/categories/Architecture">
            <div className="absolute inset-0 flex justify-center items-center ">
              <h1 className="p-5 cursor-pointer text-white bg-sky-700 bg-opacity-60 hover:bg-orange-600">
                Architecture
              </h1>
            </div>
          </Link>
        </div>
        <div className="p-28 relative overflow-hidden">
          <img
            src={IntImg}
            alt="Interior"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <Link to="/categories/Interior">
            <div className="absolute inset-0 flex justify-center items-center ">
              <h1 className="p-5 cursor-pointer text-white bg-sky-700 bg-opacity-60  hover:bg-orange-600">
                Interior
              </h1>
            </div>
          </Link>
        </div>
        <div className="p-28 relative bg-slate-200">
          <div className="absolute inset-0 flex flex-col justify-center items-center  font-bold text-sky-700 text-opacity-70 ">
            <h1 className="min-w-max text-center"> Reimagine</h1>
            <h1 className="min-w-max text-center"> Recreate</h1>
            <h1 className="min-w-max text-center"> Revitalize</h1>
          </div>
        </div>
        <div className="p-28 relative overflow-hidden">
          <img
            src={LandImg}
            alt="Landscape"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <Link to="/categories/Landscape">
            <div className="absolute inset-0 flex justify-center items-center ">
              <h1 className="p-5 cursor-pointer text-white bg-sky-700 bg-opacity-60  hover:bg-orange-600">
                Landscape
              </h1>
            </div>
          </Link>
        </div>
        <div className="p-28 relative overflow-hidden">
          <img
            src={ConImg}
            alt="construction"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <Link to="/categories/Construction">
            <div className="absolute inset-0 flex justify-center items-center ">
              <h1 className="p-5 cursor-pointer text-white bg-sky-700 bg-opacity-60  hover:bg-orange-600">
                Construction
              </h1>
            </div>
          </Link>
        </div>
        <div className="p-28 relative overflow-hidden">
          <img
            src={MoreImg}
            alt="Additional"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <Link to="/categories/Other">
            <div className="absolute inset-0 flex justify-center items-center ">
              <h1 className="p-5 cursor-pointer text-white bg-sky-700 bg-opacity-60  hover:bg-orange-600">
                More +
              </h1>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Categories;
