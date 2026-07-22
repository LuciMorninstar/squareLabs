"use client";

import { assetSrc } from "@/lib/assets";

const MeetTheTeamCard = ({ team }) => {
  return (
    <div className="bg-background-color px-4 py-5 flex flex-col gap-4 h-[450px]">
      {/* profilePic */}
      <div className="size-20 sm:size-22 lg:size-24 xl:size-30 rounded-full overflow-hidden">
        <img
          src={assetSrc(team?.profilePic)}
          alt="profilePic"
          className="w-full h-full object-cover object-center"
        />
      </div>
      {/* / profilePic ends */}

      {/* name and position */}
      <div className="flex flex-col gap-0">
        <h4 className="text-text-quarternary-color font-semibold font-sora">
          {team?.name}
        </h4>
        <span className="text-xs sm:text-sm lg:text-base text-text-secondary-color font-outfit">
          {team?.position}
        </span>
      </div>
      {/* /name and position ends */}

      {/* description */}
      <p className="text-base lg:text-lg text-justify text-text-secondary-color font-outfit line-clamp-7 leading-7">
        {team?.desc}
      </p>
      {/* /description ends */}
    </div>
  );
};

export default MeetTheTeamCard;