import { useState } from "react";

export const SectionModel4 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const checkpoint = [
    {
      checkpoint: "CHECKPOINT 1 | STEP ONE",
      explanation: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, aut?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officia quam non iusto velit quibusdam",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ex repellat iste?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam.",
      ],
    },
    {
      checkpoint: "CHECKPOINT 2 | STEP TWO",
      explanation: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, aut?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officia quam non iusto velit quibusdam",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ex repellat iste?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam.",
      ],
    },
    {
      checkpoint: "CHECKPOINT 3 | STEP ",
      explanation: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, aut?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officia quam non iusto velit quibusdam",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ex repellat iste?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam.",
      ],
    },
  ];
  return (
    <div className="w-full p-6 xl:p-8 relative h-auto overflow-hidden font-poppins">
      <h1 className="text-center text-[50px] sm:text-[50px] font-black">
        ROADMAP
      </h1>
      <div className="w-full sm:flex sm:justify-center">
        <div className="--roadmap-wrapper flex flex-col w-full gap-4 sm:justify-center">
          {checkpoint.map((item, index) => (
            <div key={index} className="--wrapper-roadmap-item w-full">
              <div
                className="--roadmap-item cursor-pointer p-4 rounded-[10px] bg-[#00A1D5]"
                onClick={() => handleToggle(index)}
              >
                <div className="--heading flex items-center justify-between">
                  <p className="text-white font-bold text-[18px]">
                    {item.checkpoint}
                  </p>
                  <div className="min-w-[40px] min-h-[40px] flex justify-center items-center rounded-full bg-[#FFD33B] transition-transform duration-300">
                    <i
                      className={`mt-1 bi ${
                        openIndex === index
                          ? "bi-caret-up-fill"
                          : "bi-caret-down-fill"
                      }`}
                    ></i>
                  </div>
                </div>
              </div>
              <div
                className={`--explanation overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "h-auto p-4" : "h-0"
                }`}
              >
                <ul className="flex flex-col gap-4">
                  {item.explanation.map((explanation, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="min-w-[30px] min-h-[30px] flex justify-center items-center rounded-full bg-[#FFD33B]">
                        <i className="text-[20px] bi bi-check-lg"></i>
                      </div>
                      <p className="text-[16px] font-medium">{explanation}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
