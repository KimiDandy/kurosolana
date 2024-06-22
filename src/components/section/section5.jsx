export const SectionModel5 = () => {
  const media = [
    {
      icon: "media/Twitter1.png",
      judul: "TWITTER",
      url: "https://x.com/BonnyOnSol?t=vMoj0ria4KdTo0q7UhyLeg&s=09",
    },
    {
      icon: "media/Telegram.png",
      judul: "TELEGRAM",
      url: "https://t.me/BonnyOnSolana",
    },
  ];
  return (
    <div className="w-full mt-8 p-6 xl:p-8 relative h-auto font-poppins flex justify-center">
      <div className="--card-wrapper w-full lg:w-1/2 z-10 grid gap-4 grid-cols-2">
        {media.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="--card p-2 relative bg-white/70 rounded-[10px] shadow-shadow-11 flex flex-col items-center gap-2">
              <div className="--header">
                <img
                  className="-mt-12 rounded-full w-[80px] object-cover"
                  src={item.icon}
                  alt={item.judul}
                />
              </div>
              <div className="--body flex flex-col gap-1">
                <p className="text-[24px] font-bold uppercase">{item.judul}</p>
                <div className="bg-[#1D2B48] text-white text-[14px] font-medium p-2 rounded-[10px] text-center">
                  Join Now
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
