import React from "react";
import { BranchCardProps } from "./card/card-list";

const BranchCard = ({ arText, enText }: BranchCardProps) => {
  return (
    <div className="bg-primary py-3 px-4 w-fit rounded-[8px]" dir="rtl">
      <p className="text-white flex justify-center items-center gap-x-1">
        <span className="font-heading-arabic">{arText}</span>-
        <span className="font-heading-en">{enText}</span>
      </p>
    </div>
  );
};

export default BranchCard;
