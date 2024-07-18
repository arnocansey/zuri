import { NavLink } from "react-router-dom";
import twitter from "./twitter.svg";
import facebook from "./facebook.svg";
import linkedin from "./linkedin.svg";

export default function Footer() {
  return (
    <>
      <footer className="bg-red-950  p-12 ">
        <section>
          <div className="flex flex-col text-center gap-10 justify-self-center">
            <p className="text-red-500">Get started</p>
            <h1 className="font-black text-white text-5xl">
              Hire Top Rated Professional
              <br /> Talents On Demand
            </h1>
            <button className="bg-red-500 rounded max-w-64 p-4 m-auto mb-7  text-white">
              Build Your Dream Team
            </button>
          </div>
          <hr />
        </section>
        <section className="flex flex-row columns-2 my-20 justify-between">
          <div className="columns-3 justify-between  p-4 gap-32">
            <div className="text-white flex flex-col">
              <h1 className="font-black">Companies</h1>
              <a href="#">For Businesses</a>
              <a href="#">For NGOs</a>
              <a href="#">Training</a>
              <a href="#">Team</a>
            </div>
            <div className="text-white flex flex-col">
              <h1 className="font-black">Links</h1>
              <a href="#">Partner With Us </a>
              <a href="#">Recruit Talent</a>
              <a href="#">Partner to train</a>
              <a href="#">Tracks</a>
            </div>
            <div className="text-white flex flex-col">
              <h1 className="font-black">Resources</h1>
              <a href="#">Articles</a>
              <a href="#">Our Why</a>
              <a href="#">FAQ</a>
              <a href="#">YouTube Playlist</a>
            </div>
          </div>
          <div>
            <h1 className="text-white mb-4">Newsletter</h1>
            <form className="border p-1 rounded bg-white">
              <input
                type="email"
                placeholder="Enter your email here"
                className="p-4 rounded"
              />
              <button className="text-white bg-red-500 rounded p-3">
                Subscribe
              </button>
            </form>
            <div className="columns-2 mt-6 justify-between">
              <div className="text-white">
                <h2>Helpdesk</h2>
                <a href="#">help-desk.zuri.team</a>
              </div>
              <div className="text-white">
                <h2>Email Us</h2>
                <a href="#">hello@zuri.team</a>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section className="flex columns-2 justify-between text-white my-20">
          <div>
            <p>Copyright 2024, All Rights Reserved</p>
          </div>
          <div className="flex gap-5">
            <img src={twitter} className="" />
            <img src={facebook} />
            <img src={linkedin} />
          </div>
        </section>
        <hr />
        <div className="text-white text-center my-20">
          <p>
            Disclaimer: The roles listed on this website are based on real
            positions, but any images or photographs used on this site are stock
            photos and do not depict the actual individuals holding these
            positions. We have taken this measure to protect the privacy and
            identities of the real people represented on this site.
          </p>
        </div>
      </footer>
    </>
  );
}
