"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="text-white  flex items-center justify-between border-[0.5px] border-[#FFFFFF80] font-terminus h-[70px] m-16 mb-0">
        <div className="flex items-center">
          <Link href={"/"}>
            <img
              src="ultiverse-logo.svg"
              alt="Ultiverse Logo"
              className="h-10 px-2"
            />
          </Link>
        </div>
        <div className="flex bg-[#FFFFFF]/10 h-[70px] grow">
          <div className="bg-[#00FFE6] flex-1"></div>
          <div className="flex-1"></div>
          <div className="flex-1"></div>
          <div className="flex-1"></div>
        </div>
        <div className="hidden md:flex flex-1">
          <div className="flex flex-auto flex-col justify-center border-[0.5px] border-[#FFFFFF80] h-[70px] hover:text-[#00FFE6]">
            <div className="flex justify-center">
              <a href="#">
                <p className="text-base uppercase">About</p>
              </a>
            </div>
            <div className="flex justify-start">
              <p className="text-xs text-[#FFFFFF]/50 px-1">001</p>
            </div>
          </div>

          <div className="flex flex-col flex-1 justify-center border-[0.5px] border-[#FFFFFF80] h-[70px] hover:text-[#00FFE6]">
            <a href="#" className="hover:text-[#00FFE6]">
              {" "}
              <div className="flex justify-center">
                <img
                  src="/discord-icon.svg"
                  alt="Discord"
                  className="h-6 w-6"
                />
              </div>
            </a>
            <div className="flex justify-start">
              <p className="text-xs text-[#FFFFFF]/50 px-1">002</p>
            </div>
          </div>

          <div className="flex flex-col flex-1 justify-center border-[0.5px] border-[#FFFFFF80] h-[70px] hover:text-[#00FFE6]">
            <a href="#" className="hover:text-[#00FFE6]">
              <div className="flex justify-center">
                <img src="/x-icon.svg" alt="Twitter" className="h-6 w-6" />
              </div>
            </a>
            <div className="flex justify-start">
              <p className="text-xs text-[#FFFFFF]/50 px-1">003</p>
            </div>
          </div>

          <div className="flex flex-auto flex-col justify-center border-[0.5px] border-[#FFFFFF80] h-[70px] hover:text-[#00FFE6]">
            <a href="#">
              <div className="flex justify-center">
                <p className="text-base uppercase">Launch Ultiverse</p>
              </div>
            </a>
            <div className="flex justify-start">
              <p className="text-xs text-[#FFFFFF]/50 px-1">004</p>
            </div>
          </div>
        </div>
        <div className="flex px-2 items-center border-[0.5px] border-[#FFFFFF80] h-[70px] hover:text-[#00FFE6]">
          <button onClick={toggleMenu} className="focus:outline-none">
            <img src="/menu-vector.svg" alt="Twitter" className="" />
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden flex flex-col font-terminus mx-16">
          <div className="flex flex-auto flex-col justify-center border-[0.5px] border-[#FFFFFF80] h-[70px] py-2 hover:text-[#00FFE6]">
            <div className="flex justify-center">
              <a>
                <p className="text-base uppercase">About</p>
              </a>
            </div>
            <div className="flex justify-start">
              <p className="text-xs text-[#FFFFFF]/50 px-1">001</p>
            </div>
          </div>

          <div className="flex flex-col flex-1 justify-center border-[0.5px] border-[#FFFFFF80] h-[70px] py-2 hover:text-[#00FFE6]">
            <a href="#">
              {" "}
              <div className="flex justify-center">
                <img
                  src="/discord-icon.svg"
                  alt="Discord"
                  className="h-6 w-6 "
                />
              </div>
            </a>
            <div className="flex justify-start">
              <p className="text-xs text-[#FFFFFF]/50 px-1">002</p>
            </div>
          </div>

          <div className="flex flex-col flex-1 justify-center border-[0.5px] border-[#FFFFFF80] h-[70px] py-2 hover:text-[#00FFE6]">
            <a href="#">
              <div className="flex justify-center">
                <img src="/x-icon.svg" alt="Twitter" className="h-6 w-6" />
              </div>
            </a>
            <div className="flex justify-start">
              <p className="text-xs text-[#FFFFFF]/50 px-1">003</p>
            </div>
          </div>

          <div className="flex flex-auto flex-col justify-center border-[0.5px] border-[#FFFFFF80] h-[70px] py-2 hover:text-[#00FFE6]">
            <a href="#">
              <div className="flex justify-center">
                <p className="text-base uppercase">Launch Ultiverse</p>
              </div>
            </a>
            <div className="flex justify-start">
              <p className="text-xs text-[#FFFFFF]/50 px-1">004</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
