import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../src/assets/logonobg.png";
import { MdMenu } from "react-icons/md";
import { FiUser } from "react-icons/fi";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <section className="md:block hidden">
        <nav className="bg-white p-4 flex items-center justify-between ">
          {/* Logo */}
          <div className="flex items-center ml-4 ">
            <Image
              src={logo}
              alt="Logo"
              className=" mr-4"
              width={50}
              height={50}
            />
          </div>

          {/* Menu Items */}
          <ul className="flex items-center justify-center space-x-10">
            <li>
              <Link href="/" className=" text-gray-600 text-sm">
                Home
              </Link>
            </li>
            <li>
              <Link href="/vision" className="text-gray-600 text-sm">
                Our Vision
              </Link>
            </li>
            <li>
              <Link href="/order" className="text-gray-600 text-sm">
                Delivery
              </Link>
            </li>
            <li>
              <Link href="/reservations" className="text-gray-600 text-sm">
                Reservations
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-gray-600 text-sm
         "
              >
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 text-sm">
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Login/Signup Button */}
          <Link
            href="/login"
            className="bg-[#C56E33] text-white px-4 py-2 rounded-xl"
          >
            Login / Sign Up
          </Link>
        </nav>
      </section>
      <section className="md:hidden block">
        <nav className="md:hidden bg-white p-4 flex justify-between items-center">
          {/* Hamburger Menu */}
          <div className="flex items-center">
            <div className="cursor-pointer" onClick={toggleMenu}>
              <MdMenu size={40} className=" text-gray-600" />
            </div>
          </div>
          <div className="flex items-center text-[#c56e33] text-xl">
            RestOrder
          </div>{" "}
          {/* Text in between */}
          {/* Right Icon (e.g., User Icon) */}
          <div>
            <div className="p-2">
              <Image src={logo} alt="Logo" width={50} height={50} />
            </div>
          </div>
        </nav>
        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-white z-50 overflow-y-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col h-full w-1/2 bg-white border-r">
            {/* Logo */}
            <div className="p-4">
              <Image src={logo} alt="Logo" width={50} height={50} />
            </div>
            {/* Menu Items */}
            <ul className="flex flex-col space-y-4 p-4">
              <li>
                <Link href="/" className="text-gray-600 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/vision" className="text-gray-600 text-sm">
                  Our Vision
                </Link>
              </li>
              <li>
                <Link href="/order" className="text-gray-600 text-sm">
                  Delivery
                </Link>
              </li>
              <li>
                <Link href="/reservations" className="text-gray-600 text-sm">
                  Reservations
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-25"
            onClick={toggleMenu}
          />
        </div>
      </section>
      <hr />
      <hr />
    </>
  );
};

export default Navbar;
