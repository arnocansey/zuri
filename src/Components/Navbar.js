import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./index.css";
import myImage from "./Zuri team logo1.svg";
import Image from "./Zuri Team Logo.svg";

export default function Navbar() {
  return (
    <>
      <BrowserRouter>
        <header className=" p-10 flex columns-3 justify-between justify-items-center ">
          <img src={Image} className="bg-contain" />
          <nav className="flex flex-row  gap-6 text-xl ">
            <NavLink
              to="/"
              className="hover:decoration-solid hover:text-red-700 hover:underline-offset-4"
            >
              For Business
            </NavLink>
            <NavLink to="ngo" className="hover:text-red-700 ">
              For NGOs
            </NavLink>
            <NavLink to="training" className="hover:text-red-700">
              Training
            </NavLink>
            <NavLink to="resources" className="hover:text-red-700 ">
              Resources
            </NavLink>
          </nav>
          <div className="flex space-x-4">
            <button className="border-2 border-black p-2 rounded-xl">
              Partner With Us
            </button>
            <button className="p-2 border-r-4 bg-red-500 text-white rounded-xl">
              Start Learning
            </button>
          </div>
        </header>
      </BrowserRouter>
      <div className="flex justify-between">
        <h1 className="font-medium text-5xl m-32">
          <b>Our Resources</b>
        </h1>
        <img src={myImage} className="pr-32" />
      </div>
      <form>
        <label className="block justify-center ml-32">
          <input
            type="text"
            value="Search"
            className="mt-1 block w-10/12 px-20 py-5 border border-black rounded-md text-sm bg-yellow-50 "
          />
        </label>
      </form>
    </>
  );
}
