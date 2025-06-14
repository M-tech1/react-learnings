import React from "react";

export interface IproductProps {
  bgColor: string;
  amount: number;
  title: string;
  increase: string;
}

export function Card({ bgColor, amount, title, increase }: IproductProps) {
  return (
    <div
      className="w-full rounded-[10px] flex flex-col items-center p-[14px] gap-[0.3125rem] m-0"
      style={{ backgroundColor: bgColor }}
    >
      <h2 className="text-white font-sans text-3xl font-bold">{amount}</h2>
      <h3 className="text-white">{title}</h3>
      <h4 className="">{increase}</h4>
    </div>
  );
}
