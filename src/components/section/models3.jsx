export const SectionModel3 = () => {
  const dataCard = [
    {
      img: "cat/chibi1.jpg",
      judul: "Total Supply",
      subJudul: "<b>1 Billion $Chibi Tokens</b>",
    },
    {
      img: "cat/chibi2.jpg",
      judul: "Taxes",
      subJudul: "<b>0% Taxes</b>",
    },
    {
      img: "cat/chibi3.jpg",
      judul: "Join Chibi Family",
      subJudul:
        "Join the Chibi family, buy and hold, we will go to the moon together, and we will be trending on dex. If you sell you will regret it for the rest of your life",
    },
  ];

  return (
    <div className="w-full p-6 xl:p-8 relative h-auto overflow-hidden font-poppins">
      <h1 className="text-[40px] sm:text-[50px] text-center font-black text-white">
        CAT INFORMATION
      </h1>
      <div className="--wrpper-card grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
        {dataCard.map((item, index) => (
          <div
            key={index}
            className="--card bg-white/70 p-2 shadow-shadow-11 rounded-[30px]"
          >
            <img
              className="rounded-[20px] w-full max-h-[300px] object-cover"
              src={item.img}
              alt=""
            />
            <p className="text-[24px] font-black mt-2">{item.judul}</p>
            <p
              className="p-1 text-[18px] font-medium"
              dangerouslySetInnerHTML={{ __html: item.subJudul }}
            ></p>
          </div>
        ))}
      </div>
    </div>
  );
};
