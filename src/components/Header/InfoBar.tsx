import React from "react";
import {
  IoLocationOutline,
  IoMailOutline,
  IoCallOutline,
} from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const InfoBar = () => {
  return (
    <div className="bg-accent text-accent-foreground py-2 px-5 ">
      <div className="flex justify-between items-center">
        {/* Contact Information */}
        <div className="flex space-x-6">
          <div className="flex items-center">
            <span className="mr-2">
              <IoCallOutline />
            </span>
            <a
              href="tel:+1234567890"
              className="hover:text-secondary text-label-medium">
              +123 456 7890
            </a>
          </div>
          <div className="flex items-center">
            <span className="mr-2">
              <IoMailOutline />
            </span>
            <a
              href="mailto:info@yourwebsite.com"
              className="hover:text-secondary text-label-medium">
              info@yourwebsite.com
            </a>
          </div>
          <div className="flex items-center">
            <span className="mr-2">
              <IoLocationOutline />
            </span>
            <span className="hover:text-secondary text-label-medium cursor-pointer">
              Nairobi, Kenya
            </span>
          </div>
        </div>
        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            className="hover:text-secondary text-label-medium"
            target="_blank"
            rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            className="hover:text-secondary text-label-medium"
            target="_blank"
            rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            className="hover:text-secondary text-label-medium"
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
