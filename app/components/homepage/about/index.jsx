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
      className="my-12 lg:my-24 relative pt-4 md:pt-8 "
    >
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl font-semibold rounded-md whitespace-nowrap">
            ABOUT ME
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
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
