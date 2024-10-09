import React from "react";
import { FooterSVG } from "./UtilitySVGs";

interface FooterProps {
  popupOpen: boolean;
}

const Footer: React.FC<FooterProps> = ({ popupOpen }) => {
  const widthClass = `w-full ${popupOpen ? "md:w-full" : "md:w-1/2"}`;
  const paddingClass = `p-4 ${popupOpen ? "md:p-16" : ""}`;
  const justifyClass = popupOpen ? "md:justify-between" : "";

  return (
    <footer
      className={`font-terminusBold uppercase text-[#FFFFFFBF] mt-4 ${widthClass} ${paddingClass} ${justifyClass} flex flex-wrap md:flex-nowrap md:items-center`}
    >
      <FooterSVG />
      <p className="md:ml-4">
        UTILIZING METAFI, UE5, AND WEB3 TECHNOLOGY TO CREATE A SOCIAL AND
        IMMERSIVE GAMING METAVERSE.
      </p>
      <div></div>
    </footer>
  );
};
export default Footer;
