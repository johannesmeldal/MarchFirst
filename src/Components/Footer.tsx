import React from "react";
import the_m_img from "../Images/MF_letter.png";
// import GoogleMaps from "./GoogleMaps";
import { BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <div className="bg-[#233F56] flex flex-col lg:flex-row justify-evenly pt-10 pb-10 items-center text-[#728DA8]">
        <img className="w-[10vw] object-cover" src={the_m_img} alt="M" />
        <div>
          <p className="border-b-2 border-[#728DA8] pb-3 lg:border-none mb-[8vh] mt-[3vh] lg:mb-0">
            Marchfirst Norway AS
          </p>
        </div>
        <div className="flex flex-row w-[80vw] lg:w-[30vw] justify-evenly ">
          <div className="flex flex-col gap-1 w-auto lg:border-l-2 pl-5 border-[#728DA8] justify-center items-center">
            <a className="hover:text-[#FFFFFF]" href="contact">
              Ta kontakt!
            </a>
            <a className="hover:text-[#FFFFFF]" href="/">
              Våre partnere
            </a>
            <p>
              <a
                className="hover:text-[#FFFFFF]"
                href="https://www.linkedin.com/company/marchfirst-norway-as"
              >
                <BsLinkedin />
              </a>
            </p>
          </div>
          <div className="flex flex-col lg:border-l-2 pl-5 border-[#728DA8]">
            <a className="hover:text-[#FFFFFF]" href="/">
              HOME
            </a>
            <a className="hover:text-[#FFFFFF]" href="services">
              SERVICES
            </a>
            <a className="hover:text-[#FFFFFF]" href="about">
              ABOUT US
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#0174BD] text-[#FFFFFF] h-[5vh] flex items-center justify-center">
        <p> © 2003 - 2024 Marchfirst Norway AS. All rights reserved.</p>
      </div>
    </>
  );
  // <div className="grid-item3">
  //       <GoogleMaps />
  //     </div>

  // <ul>
  //             <li>
  //               <p>Marchfirst Norway AS</p>
  //             </li>
  //             <li>
  //               <p>Org.nr: 980 705 617</p>
  //             </li>
  //             <li>
  //               <p>Telefon: +47 22 83 40 00</p>
  //             </li>
  //             <li>
  //               <p>
  //                 Besøksadresse:
  //                 <br />
  //                 <span>Drammensveien 130, 0277 Oslo</span>
  //               </p>
  //             </li>
  //             <li>
  //               <p>
  //                 Postadresse:
  //                 <br />
  //                 <span>Skjellestadåsen 16, 1389 Heggedal</span>
  //               </p>
  //             </li>
  //           </ul>
}
