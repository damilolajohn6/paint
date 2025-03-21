//import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 text-black py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/">
            <h2 className="text-xl font-semibold mt-2">Gaius</h2>
          </Link>
          <p className="text-sm mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis facere mollitia, fugiat officia modi fugit repellat!
            Laboriosam molestias et tenetur reiciendis quo omnis eligendi sed
            nostrum. Ipsum voluptates nam officiis!
          </p>
          <p className="font-semibold mt-4">Stay Connected</p>
          <div className="flex space-x-4 mt-2">
            <FaLinkedin className="text-blue-500 cursor-pointer text-xl" />
            <FaXTwitter className="text-blue-400 cursor-pointer text-xl" />
            <FaInstagram className="text-pink-500 cursor-pointer text-xl" />
            <FaFacebook className="text-blue-600 cursor-pointer text-xl" />
          </div>
        </div>

        {/* Center Section (Links) */}
        <div className="flex flex-col md:flex-row space-x-10">
          <div className="flex flex-col items-center">
            <p className="font-bold mb-2">Quick Links</p>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Services", "Portfolio", "Contact"].map(
                (link) => (
                  <a href="#" key={link}>
                    <li className="cursor-pointer hover:underline">{link}</li>
                  </a>
                )
              )}
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold mb-2">Socials Links</p>
            <ul className="space-y-2 text-sm">
              <li className="cursor-pointer hover:underline">Instagram</li>
              <li className="cursor-pointer hover:underline">Linkedin</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-start">
          <p className="font-bold mb-2">Colors By Anita</p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
            illum, recusandae repudiandae ipsam fuga aspernatur laboriosam
            perspiciatis fugit quos repellendus eveniet earum culpa rerum error
            reiciendis inventore ratione, veritatis soluta!
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="text-center text-[#3f3b3a] text-sm mt-8">
        © 2025 Gaius. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
