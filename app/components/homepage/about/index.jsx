"use client";
import { motion } from "framer-motion";
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: "100vh" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      id="about"
      className=" my-12 lg:my-16 relative"
    >
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-2xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] !text-3xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 !text-xl lg:text-lg">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2 mr-8">
          <Image
            src={personalData.profile}
            width={350}
            height={350}
            alt="Abu Said"
            className="rounded-lg transition-all duration-1000 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default AboutSection;
