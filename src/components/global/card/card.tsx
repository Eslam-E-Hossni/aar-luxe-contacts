import Image from "next/image";
import React from "react";
import { CardProps } from "./card-list";

const Card = ({ arText, enText, href, image }: CardProps) => {
  return (
    <div>
      <a
        href={href}
        target="_blank"
        className="!bg-white w-[400px] py-3 px-8 flex justify-between items-center rounded-lg border border-[#C6C6C6]"
      >
        <p className="text-text-gray text-center w-[80%]">
          <span className="block font-heading-arabic text-2xl font-medium">
            {arText}
          </span>
          <span className="block font-heading-en text-lg font-medium">
            {enText}
          </span>
        </p>
        {image.increaseWhatsapp ? (
          <Image src={image.src} width={50} height={50} alt={image.alt} />
        ) : (
          <Image src={image.src} width={40} height={40} alt={image.alt} />
        )}
      </a>
    </div>
  );
};

export default Card;
