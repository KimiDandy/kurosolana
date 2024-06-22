export const SectionModel1 = () => {
  // list logo
  const images = [
    {
      src: "logo/Protocol Icon (4).png",
      styles: "",
      animation: "animate-bounce-up-down",
    },
    {
      src: "logo/Frame 8 (1).png",
      styles: "",
      animation: "animate-bounce-up-down-slow",
    },
  ];

  return (
    // container
    <div className="w-full flex items-center justify-center h-screen p-6 sm:p-6 sm:h-[1100px] md:p-8 md:h-[1000px] relative lg:h-screen overflow-hidden font-poppins bg-[#00A1D5]/50">
      {/* title content */}
      <div>
        <div className="flex">
          {images.map((image, index) => (
            <img
              key={index}
              className={`relative 2xl:w-[120px] w-[60px] sm:w-[80px] object-cover ${image.styles} ${image.animation}`}
              src={image.src}
              alt=""
            />
          ))}
        </div>
        <div className="--title text-white text-center">
          <div className="--heading font-black text-[40px] sm:text-[70px] md:text-[90px] lg:text-[110px] tracking-wide">
            SOLANA <span className="text-[#FFD33B]">BONNY</span>
          </div>
          <div className="--sub-heading text-[18px] sm:text-[34px] font-medium flex flex-col">
            <span className="text-[#FFD33B] font-black">Join The Family!</span>
            <span className="sm:-mt-2">
              Together, we&apos;ll get rich. $BONNY Leads the way!
            </span>
          </div>
        </div>

        {/* button */}
        <div className="--button mt-10 flex justify-center">
          <a
            href="#section-2"
            className="lg:text-[20px] text-center flex items-center justify-center w-[200px] h-[200px] text-white font-bold py-3 px-6 sm:py-3 sm:px-6 rounded-[10px] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('cat/kuro4.jpg')",
            }}
          >
            About This, Click Here!
          </a>
        </div>
      </div>
    </div>
  );
};
