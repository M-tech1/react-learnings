import React from "react";

type keyValuePair = {
  label: string;
  value: string;
};
interface DropdownProps {
  //   options: { label: string; value: string }[];
  options: keyValuePair[];
  value: string;
  onChange: (value: string) => void;
  placeHolder?: string;
}

export default function DropDown({
  options,
  value,
  onChange,
  placeHolder,
}: DropdownProps) {
  return (
    <>
      <div className="flex flex-col items-center w-40">
        <select
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="" disabled>
            {placeHolder}
          </option>

          {options.map((option) => (
            <option key={option.value} value={option.value}></option>
          ))}
        </select>
      </div>
    </>
  );
}
