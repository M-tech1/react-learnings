import React from "react";
interface Iprops {
  name: string;
  title: string;
}

export default function Props({ name, title }: Iprops) {
  return (
    <>
      <div className="flex flex-col justify-center items-center align-middle">
        Learning Props properly
        <div className="flex flex-col justify-center justify-self-center align-middle">
          <p>{title}</p>
          <h2>{name}</h2>
        </div>
      </div>
    </>
  );
}
