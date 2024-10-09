"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Footer from "./footer";
import { ImmersiveSVG, MetaverseSVG, PlayButtonSVG } from "./UtilitySVGs";

const MainSection: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="relative w-full bg-[url('/ultiverse-bg.png')] bg-auto bg-no-repeat p-16 font-terminus overflow-hidden">
      <div className="green-glow" />
      <ul className="list-none p-0 mt-8 md:mt-32 relative z-10">
        {["Map", "Missions", "Characters", "Loadouts", "Events"].map((item) => (
          <li
            key={item}
            className="flex items-center text-[#FFFFFF4D] text-2xl mb-4 hover:text-[#00FFE6] uppercase"
          >
            <svg
              width="12"
              height="33"
              viewBox="0 0 12 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <rect width="6" height="33" fill="currentColor" />
              <rect x="10" width="2" height="33" fill="currentColor" />
            </svg>
            {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap immersive-section relative">
        <div className="flex flex-col mt-8 grow">
          <div className="flex md:mt-8 md:ml-32 max-w-[710px]">
            <p className="text-[#FFFFFF4D] mr-4">001</p>
            <ImmersiveSVG />
          </div>
          <div className="flex mt-4 md:mt-8 md:ml-64 max-w-[710px]">
            <p className="text-[#FFFFFF4D] mr-4">002</p>
            <MetaverseSVG />
          </div>
        </div>
        <div className="relative md:ml-8 xl:-mt-32 mt-8 shrink">
          <div className="relative" onClick={handlePlayAudio}>
            <img
              src="/video-thumbnailonly.png"
              alt="Video Thumbnail"
              className="w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Link href="/demo">
                <PlayButtonSVG className="w-32 h-32" />
              </Link>
            </div>
          </div>
        </div>

        <audio ref={audioRef} src="/radarAudio.mp3" />

        <div
          className="
            absolute
            left-1/2
            transform -translate-x-1/2
            bottom-[-78vw]
            w-[100vw]
            h-[100vw]
            rounded-full
            border
            border-[#D9D9D940]
          "
        ></div>
      </div>
      <Footer popupOpen={false} />
    </div>
  );
};

export default MainSection;
