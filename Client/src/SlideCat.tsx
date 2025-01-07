import { Link } from "react-router-dom";
import "./SlidCat.css";

import Architecture from "./iconComponenets/Architecture";

import Interior from "./iconComponenets/Interior";

import Landscape from "./iconComponenets/Landscape";

import Construction from "./iconComponenets/Construction";

import Additional from "./iconComponenets/Additional";

const SlideCat = () => {
  return (
    <div className="slider  bg-gray-100  sm:flex justify-evenly">
      <div className="slide">
        <div className="p-8 ">
          <Link to="/categories/:categories">
            <div className="">
              <Architecture className="h-28 fill-red-600 hover:h-32" />
            </div>
            <span className="flex justify-center">Architecture</span>
          </Link>
        </div>
      </div>
      <div className="slide">
        <Link to="">
          <div className="p-8">
            <Interior className="h-28 stroke-red-600 hover:h-32" />
            <span className="flex justify-center">Interior</span>
          </div>
        </Link>
      </div>
      <div className="slide">
        <div className="p-8">
          <Landscape className="h-28 stroke-red-600 hover:h-32" />
          <span className="flex justify-center">Landscape</span>
        </div>
      </div>
      <div className="slide">
        <div className="p-8">
          <Construction className="h-28 stroke-red-600 hover:h-32" />
          <span className="flex justify-center">Construction</span>
        </div>
      </div>
      <div className="slide">
        <div className="p-8">
          <Additional className="h-28 stroke-red-600 hover:h-32" />
          <span className="flex justify-center">Additional</span>
        </div>
      </div>
    </div>
  );
};

export default SlideCat;
