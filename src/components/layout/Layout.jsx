import { useState } from "react";
import Image from "next/image";

const Layout = ({ children }) => {
  const [wd, setWd] = useState(0);
  const [ref, setRef] = useState("0");

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-blue-100 lg:px-32 drop-shadow-lg">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <Image
            src="/assets/icon-dice.svg"
            alt={"icon-dice"}
            width={30}
            height={30}
          />

          <p className="flex-1 px-2 mr-2 text-amber-500 tracking-widest text-2xl font-semibold mb-2">
            go-blog
          </p>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal text-black gap-x-10">
              <div
                className="relative"
                onMouseEnter={() => {
                  setWd(200);
                  setRef("1");
                }}
                onMouseLeave={() => {
                  setWd(0);
                  setRef("0");
                }}
              >
                <li>
                  <a href="/">Home</a>
                </li>
                <div
                  style={{ maxWidth: ref == "1" ? `${wd}px` : "0px" }}
                  className="h-[1px] bg-red-500 transition-all transition-max-width duration-200"
                ></div>
              </div>

              <div
                className="relative"
                onMouseEnter={() => {
                  setWd(200);
                  setRef("2");
                }}
                onMouseLeave={() => {
                  setWd(0);
                  setRef("0");
                }}
              >
                <li>
                  <a href="/about">About Us</a>
                </li>
                <div
                  style={{ maxWidth: ref == "2" ? `${wd}px` : "0px" }}
                  className="h-[1px] bg-red-500 transition-all transition-max-width duration-200"
                ></div>
              </div>
              <div
                className="relative"
                onMouseEnter={() => {
                  setWd(200);
                  setRef("3");
                }}
                onMouseLeave={() => {
                  setWd(0);
                  setRef("0");
                }}
              >
                <li>
                  <a href="/products">Products</a>
                </li>
                <div
                  style={{ maxWidth: ref == "3" ? `${wd}px` : "0px" }}
                  className="h-[1px] bg-red-500 transition-all transition-max-width duration-200"
                ></div>
              </div>
            </ul>
          </div>
        </div>
        <main>{children}</main>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-gray-100 text-gray-800">
          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/products"> Products</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Layout;
