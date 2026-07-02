import SecondWidthWrapper from "./SecondWidthWrapper";
import { IoMdCheckmark } from "react-icons/io";

const WhatWeDoCards = ({ item, bgColor }) => {
  return (
    <div
    id={item?.id}
      style={{ backgroundColor: bgColor }}
      className={`${bgColor} h[100dvh] xl:h-screen  pt-12 scroll-mt-12 lg:scroll-mt-22`}
    >
      <SecondWidthWrapper>
        <div className="flex flex-col gap-12 xl:gap-16">
          {/* top section */}
          <div className="flex flex-row gap-5">
            <span className="text-8xl font-bold font-sora text-primary-color">
              0{item?.id}
            </span>
            <div className="flex flex-col gap-2">
              <h2 className="text-black">
                {item?.title?.split(" ")[0]}{" "}
                <span className="top-bottom-gradient text-transparent bg-clip-text">
                  {item?.title?.split(" ").slice(1).join(" ")}
                </span>
              </h2>
              <p className="text-text-secondary-color">
                {item?.desc?.split(",")[0]},{" "}
                <br className="hidden lg:block leading-9" />{" "}
                {item?.desc?.split(",").slice(1).join(",")}
              </p>
            </div>
          </div>

          {/* /top section */}

          {/* bottom section */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-2 xl:gap-5  overflow-hidden">
            {item?.cards?.map((card) => (
              <div className="bg-text-quarternary-color px-4 py-4 xl:px-5 xl:py-5 flex flex-col gap-5 rounded-4xl">
                {/* for icon */}
                <div className="w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16 rounded-2xl">
                  {card?.icon && <card.icon className="w-full h-full " />}
                </div>
                {/* /for icon */}
                {/* title */}
                <h3 className="font-semibold font-sora">{card?.title}</h3>
                {/* /title */}

                {/* if card has list */}
                {
                  (card?.lists) &&
                    <ul className="flex flex-col gap-2 xl:gap-3">
                  {card?.lists?.map((list, i) => (
                    <li
                      key={i}
                      className="text-base flex flex-row items-center gap-2"
                    >
                      <IoMdCheckmark className="text-text-primary-color text-xl" />
                      <span className="text-text-sixth-color text-base xl:text-base">
                        {list}
                      </span>
                    </li>
                  ))}
                </ul>
                }
              
                {/* if card has desc */}

                {card?.desc && (
                  <p className="text-text-sixth-color  text-base xl:text-base ">{card?.desc}</p>
                )}

                <div className="w-full h-max rounded-2xl overflow-hidden">
                  <img
                    src={card?.image}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* /bottom section */}
        </div>
      </SecondWidthWrapper>
    </div>
  );
};

export default WhatWeDoCards;
