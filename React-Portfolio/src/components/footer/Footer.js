import React from "react";
import SocialIcons from "../common/socialIcons/SocialIcons";
import { BiChevronRightCircle, BiPhoneCall } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import { FaHeart } from "react-icons/fa";
import { RiMapPinUserFill } from "react-icons/ri";

const pageLinks = [
  { link: "Home" },
  { link: "Skills", path: "#skill" },
  { link: "Education", path: "#education" },
  { link: "Work", path: "#project" },
  { link: "About", path: "#about" },
  { link: "contact", path: "#contact" },
];

const contactLinks = [
  {
    icon: <BiPhoneCall size={20} className="text-secondary" />,
    link: "+91 639-670-4951",
    url: "tel:+61433216461",
  },
  {
    icon: <TfiEmail size={20} className="text-secondary" />,
    link: "ansh2018gupta@gmail.com",
    url: "mailto:ansh2018gupta@gmail.com.au",
  },
  {
    icon: <RiMapPinUserFill size={20} className="text-secondary" />,
    link: "Agra,India-282006",
  },
];

function Footer() {
  const handleCheck = (value) => {
    console.log(value);
    if (value === "Home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <div id="footer">
      <footer className="footer py-10 text-neutral-content px-8 sm:justify-evenly">
        <div className="">
          <span className="font-bold pb-2 font-poppins text-2xl ">
            Ansh's Portfolio
          </span>
          <p className="text-lg font-playflair text-dimWhite">
            Thank you for visiting my personal portfolio website.
          </p>
          <p className="text-lg font-playflair text-dimWhite">
            Connect with me over socials.
          </p>

          <br />
          <p className="text-lg font-playflair text-dimWhite">
            Keep Rising 🚀. Connect with me over live chat!
          </p>
        </div>
        <div className="">
          <span className="font-bold pb-2 font-poppins text-2xl ">
            Quick Links
          </span>
          {pageLinks.map((links, index) => {
            return (
              <a
                href={links.path}
                className="link link-hover text-[17px] flex gap-1 items-center text-dimWhite"
                key={index}
                onClick={() => {
                  handleCheck(links.link);
                }}
              >
                <BiChevronRightCircle className=" text-neutral-content" />
                {links.link}
              </a>
            );
          })}
        </div>

        <div className="">
          <span className="font-bold pb-2 font-poppins text-2xl ">
            Contact Info
          </span>
          {contactLinks.map((links, index) => {
            return (
              <a
                href={links.url}
                className="link link-hover text-[17px] py-1 flex gap-3 items-center text-dimWhite "
                key={index}
              >
                {links.icon}
                {links.link}
              </a>
            );
          })}

          <SocialIcons />
        </div>
      </footer>
      <footer className="footer footer-center p-4 text-base-content ">
        <div>
          <p className="font-akronim text-xl flex flex-row gap-2 items-center">
            Built With <FaHeart className="text-secondary" /> By
            <span className="text-secondary">Ansh Kumar</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
