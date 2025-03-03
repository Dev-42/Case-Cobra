import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side - Copyright */}
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Dev Bhattacharya. All rights reserved.
          </p>

          {/* Right Side - Social Links */}
          <div className="flex space-x-6 mt-3 md:mt-0">
            <Link
              href="https://github.com/Dev-42"
              target="_blank"
              className="text-gray-600 hover:text-red-500 transition duration-300"
            >
              <FaGithub size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/dev42/"
              target="_blank"
              className="text-gray-600 hover:text-red-500 transition duration-300"
            >
              <FaLinkedin size={20} />
            </Link>
            <Link
              href="https://devbhattacharya.netlify.app/"
              target="_blank"
              className="text-gray-600 hover:text-red-500 transition duration-300"
            >
              <FaGlobe size={20} />
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
