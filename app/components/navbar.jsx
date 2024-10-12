// @flow strict
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const userName = "Masudur Rahman";
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 100) % 16];
    }
    return color;
  }

  return (
    <nav className="bg-transparent fixed z-50 top-0 w-full py-4">
      <div className="flex items-center justify-between mx-auto lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] px-6 sm:px-12">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/#home">
            <div className="relative">
              <div className="w-[80px] h-[80px] bg-violet-50 rounded-full absolute -top-20 left-12 sm:left-24 translate-x-1/2 filter blur-3xl opacity-50"></div>
              {userName &&
                userName.split("").map((letter, index) => (
                  <motion.span
                    className="text-3xl font-bold"
                    key={index}
                    initial={{
                      opacity: 0.5,
                      color: getRandomColor(),
                    }}
                    animate={{
                      opacity: 1,
                      color: getRandomColor(),
                    }}
                    transition={{
                      duration: 2,
                      ease: "easeIn",
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    {letter.toUpperCase()}
                  </motion.span>
                ))}
            </div>
          </Link>
        </div>

        {/* Hamburger icon for mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-white text-2xl" />
            ) : (
              <FaBars className="text-white text-2xl" />
            )}
          </button>
        </div>

        {/* Navbar links */}
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent p-4 md:p-0 transition-all duration-500`}
        >
          {[
            { name: "HOME", href: "/#home" },
            { name: "ABOUT", href: "/#about" },
            { name: "EXPERIENCE", href: "/#experience" },
            { name: "SKILLS", href: "/#skills" },
            { name: "EDUCATION", href: "/#education" },
            { name: "BLOGS", href: "/#blogs" },
            { name: "PROJECTS", href: "/#projects" },
            { name: "CONTACT", href: "/#contact" },
          ].map((item, index) => (
            <li key={index} className="mt-4 md:mt-0">
              <Link
                className="block px-2 py-2 no-underline outline-none hover:no-underline"
                href={item.href}
              >
                <div className="text-sm text-white bg-gradient-to-r from-pink-500 to-violet-600 hover:from-violet-500 hover:to-pink-500 py-1.5 px-3 transition-all duration-500 rounded-md hover:scale-110 hover:text-green-300 hover:shadow-xl">
                  {item.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Add a gap between the navbar and the content */}
      <div className="pt-24"></div>
    </nav>
  );
}

export default Navbar;
