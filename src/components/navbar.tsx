'use client';
import Image from "next/image";
import { FormEvent } from "react";

const NavigationBar = () => {
  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchQuery = (event.target as HTMLFormElement).elements.search.value;
    const searchUrl = `https://duckduckgo.com/?q=${encodeURIComponent(
      searchQuery
    )}`;
    window.open(searchUrl, "_blank");
  };

  return (
    <div className="navbar bg-base-100">
      {/* Left Portion */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      {/* Center Portion */}
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">My ToolKit</a>
      </div>
      {/* right Portion */}
      <div className="navbar-end">
        {/* Saerch Bar */}
        <div className="form-control">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="search"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </form>
        </div>
        {/* Right Side Menu */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <Image
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                height={10}
                width={10}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
