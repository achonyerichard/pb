import Link from "next/link";
import { useState } from "react";
import Logo from "../assets/images/plugbay.png"
import Image from "next/image";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="z-10 sticky  flex items-center flex-wrap  py-2   border-b border-primary backdrop-blur-xs">
        <Link href="/">
          <a className="inline-flex items-center  mr-4 ">
            <Image src={Logo} width={200} height={70} alt="" />
          </a>
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-primary font-bold items-center justify-center hover:bg-secondary hover:text-primary ">
                About
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-primary font-bold items-center justify-center hover:bg-secondary hover:text-primary">
                Memberships
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-primary font-bold items-center justify-center hover:bg-secondary hover:text-primary">
                How it works
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-primary font-bold items-center justify-center hover:bg-secondary hover:text-white">
                Blogs
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-primary font-bold items-center justify-center hover:bg-secondary hover:text-white">
                <button
                  type="text"
                  className=" text-lg bg-secondary text-white rounded-lg px-5 py-2"
                >
                  Login/Sign up
                </button>
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
