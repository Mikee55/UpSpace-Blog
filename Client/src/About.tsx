import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const About = () => {
  return (
    <>
      <NavBar />
      <div className="mt-20 m-10 justify-center text-center">
        <h1 className="m-3 text-xl font-bold">
          UpSpace: Your Partner in Every Space
        </h1>
        <p className="text-base">
          Whether you're dreaming of a new home, a stunning office, a luxurious
          restaurant, or a beautifully landscaped garden, UpSpace is your
          partner in every space.
        </p>
        <h1 className="text-left text-lg m-3 font-bold">
          On UpSpace, you can:
        </h1>
        <ul className="list-disc text-left">
          <li>
            Find the perfect professionals: Connect with architects, interior
            designers, builders, landscapers, and more.
          </li>
          <li>
            Explore endless possibilities: Browse through a vast selection of
            materials, finishes, and design ideas.
          </li>
          <li>
            Get cost estimates: Get a realistic idea of project costs and
            compare quotes from different professionals.
          </li>
          <li>
            Find inspiration: Discover stunning projects and get inspired for
            your own vision.
          </li>
          <li>
            Manage your project with ease: Connect with your team, track
            progress, and stay on budget.
          </li>
        </ul>
        <p className="text-left mt-3">
          UpSpace is the go-to platform for anyone looking to create exceptional
          spaces. From small renovations to large-scale construction projects,
          we're here to help you bring your vision to life.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
