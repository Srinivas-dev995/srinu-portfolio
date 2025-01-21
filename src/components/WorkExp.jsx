import Image from "next/image";
import React from "react";

const WorkExp = () => {
  return (
    <section id="workexp">
      <div className="container relative ">
        <div className="overflow-hidden absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#DC00D3] to-[#12B4B4] blur-[200px] "></div>
        <div className="mb-7 font-bold text-[35px] bg-gradient-to-r from-[#5BADFF] to-[#1373D1] bg-clip-text text-transparent dark:from-[#FF5C8A] dark:to-[#D62463] text-center">
          EXPERIENCE
        </div>
        <div className="flex flex-col gap-5 items-center justify-center  align-middle mx-auto">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between items-center align-middle ">
              <div className="flex gap-3 align-middle items-center">
                <Image src="/google.svg" width={20} height={20} alt="syntrino" />
                <div className="text-white font-bold text-[20px]">
                  Frontend Developer
                </div>
              </div>
              <div className="text-[15px] text-[#8491A0]">Mar 2024 - Present</div>
            </div>
            <div className="text-[15px] text-[#8491A0]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vel ante non elit tincidunt dapibus. Ut ac nunc nec nisl ultricies
              ultricies. Nullam vel ante non elit tincidunt dapibus. Ut ac nunc
              nec nisl ultricies ultricies.
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between items-center align-middle ">
              <div className="flex gap-3 align-middle items-center">
                <Image src="/google.svg" width={20} height={20} alt="oasis infobyte" />
                <div className="text-white font-bold text-[20px]">
                  Web Developer
                </div>
              </div>
              <div className="text-[15px] text-[#8491A0]">Aug 2022 - Feb 2023</div>
            </div>
            <div className="text-[15px] text-[#8491A0]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vel ante non elit tincidunt dapibus. Ut ac nunc nec nisl ultricies
              ultricies. Nullam vel ante non elit tincidunt dapibus. Ut ac nunc
              nec nisl ultricies ultricies.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExp;
