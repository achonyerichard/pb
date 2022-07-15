import Link from "next/link";
import { useState } from "react";
import Logo from "../assets/images/plugbay.png"
import Image from "next/image";
import Logo2 from "../assets/images/logo2.png";

export const Navbar = ({navbar}) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav
        className={
          !navbar
            ? "z-10 sticky top-0 bg-nav bg-cover bg-no-repeat  flex items-center flex-wrap  py-3 md:px-20 px-5  border-b border-primary backdrop-blur-xs"
            : "z-10 sticky top-0 bg-footer_bg flex items-center flex-wrap  py-4 md:px-24 px-5   backdrop-blur-xs"
        }
      >
        <Link href="/">
          {!navbar ? (
            <a className="inline-flex items-center  mr-4 ">
              <Image src={Logo} width={180} height={60} alt="" />
            </a>
          ) : (
            <a className="inline-flex items-center  mr-4 ">
              <Image src={Logo2} width={120} height={50} alt="" />
            </a>
          )}
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6 fill-primary"
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
                  className={
                    !navbar
                      ? " text-lg bg-secondary text-white rounded-lg px-5 py-2"
                      : " text-lg bg-primary text-red-500 rounded-lg px-5 py-2"
                  }
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
