import { useState } from "react";
import copy from "clipboard-copy";

export const SectionModel2 = () => {
  const [copied, setCopy] = useState("");

  const copyToClipboard = () => {
    const textToCopy = "0x642e993Fa91FFE9FB24d39a8eB0e0663145f8e92";
    copy(textToCopy);
    setCopy(true);

    setTimeout(() => {
      setCopy(false);
    }, 3000);
  };
  return (
    <div
      id="section-2"
      className="w-full p-6 sm:p-8 flex flex-col-reverse gap-6 lg:grid lg:grid-cols-2 lg:gap-6 relative lg:h-screen overflow-hidden font-poppins"
    >
      <div className="--component1 relative">
        <div className="flex justify-center lg:justify-normal lg:flex-none">
          <video
            className="2xl:w-[650px] sm:w-[450px] w-[300px] 2xl:max-h-[700px] max-h-[550px] object-cover lg:ml-6 rounded-[50px]"
            src="video/kurovid.mp4"
            alt=""
            autoPlay
            loop
            muted
            controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
          ></video>
        </div>
        <img
          className="2xl:w-[300px] sm:w-[150px] w-[100px] object-cover bottom-10 absolute lg:bottom-20 rounded-[30px]"
          src="cat/kuro1.jpg"
          alt=""
        />
        <img
          className="2xl:w-[260px] sm:w-[150px] w-[100px] object-cover absolute right-0 2xl:bottom-16 2xl:right-0 sm:right-4 bottom-6 lg:right-4 lg:bottom-6 xl:right-20 xl:bottom-0 lg:-z-10 rounded-[30px]"
          src="cat/kuro5.jpg"
          alt=""
        />
      </div>
      <div className="--component2 flex flex-col gap-4">
        {/* text-[#1D2B48]  */}
        <div className="--heading font-black text-white text-[40px] lg:text-left text-center sm:text-[50px]">
          INTRODUCING CAT
        </div>
        <div className="--body flex flex-col gap-4">
          <p className="text-[18px] text-white font-medium lg:text-left text-center">
            Once upon a time in a cozy town, roamed a cat named Kuro.
            With his soft and cute fur, Kuro captures the hearts of everyone
            who sees him. Her humorous demeanor and graceful movements captivate
            even the most stoic of souls.
          </p>
        </div>
        <div className="--footer">
          {/* bg-[#FFD33B]/50 */}
          <div className="--contract p-4 bg-white/70 rounded-[20px] sm:flex sm:items-center lg:items-start gap-2">
            <img
              className="w-[100px] h-[100px] object-cover rounded-[20px]"
              src="cat/kuro3.jpg"
              alt=""
            />
            <div className="--title">
              <p className="text-[34px] font-bold">Official Contract</p>
              <p className="text-[18px] font-medium">
                {/* <span className="">Coming Soon</span>{" "} */}
                <i
                  className={`bi ${
                    copied ? "bi-check-circle-fill" : "bi-clipboard-fill"
                  } cursor-pointer`}
                  onClick={copyToClipboard}
                ></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
