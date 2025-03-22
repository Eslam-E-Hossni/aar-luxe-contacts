import React from "react";
import Card from "./card";
import BranchCard from "../branch-card";

export interface CardProps {
  image: {
    src: string;
    alt: string;
    increaseWhatsapp?: boolean;
  };
  href: string;
  arText: string;
  enText: string;
}

export interface BranchCardProps {
  arText: string;
  enText: string;
}

interface CardListProps {
  branchText: BranchCardProps;
  cards: CardProps[];
}

const CardList = ({ branchText, cards }: CardListProps) => {
  return (
    <div>
      <div className="">
        <div className="flex justify-center mb-2.5">
          <BranchCard {...branchText} />
        </div>
        {cards.map((card, idx) => {
          return (
            <div className="mb-1.5" key={idx}>
              <Card {...card} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardList;
