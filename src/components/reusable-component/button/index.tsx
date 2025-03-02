import React from "react";

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  disable?: boolean;
}

export default function Button({ disable, ...props }: IButtonProps) {
  return (
    <>
      <button className="bg-gray-800 w-20 h-10 text-yellow-50" {...props}>
        click
      </button>
    </>
  );
}
