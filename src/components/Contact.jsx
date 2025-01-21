import Image from "next/image";
import React from "react";
import { SlPhone } from "react-icons/sl";
import { FaLinkedinIn,FaGithub,FaInstagram } from "react-icons/fa";




const Contact = () => {
  return (
    <section id="contact" className="bg-[#191919]">
      <div className="container">
        <div className=" mx-auto py-10 text-white flex flex-col gap-4 md:items-start md:flex-col md:flex md:gap-3  rounded-t-md">
          <div className="text-white font-bold text-[24px]">Contact me</div>
          <div className="text-[15px] text-[#C5C5C5] md:max-w-2xl">
            Seasoned Full Stack Software Engineer with over 8 years of hands-on
            experience in designing and implementing robust, scalable, and
            innovative web solutions. Adept at leveraging a comprehensive skill
            set encompassing front-end and back-end technologies
          </div>
          <div className="flex gap-2 align-middle">
            <Image src="/email.svg" width={20} height={20} alt="email" />
            <div>elakotisrinu48@gmail.com</div>
          </div>
          <div className="flex gap-2 align-middle">
            <SlPhone />
            <div>+91 9014781995</div>
          </div>
          <div className="flex gap-4">
            <FaInstagram fontSize={20} />
            <FaLinkedinIn fontSize={20} />
            <FaGithub fontSize={20} />
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
