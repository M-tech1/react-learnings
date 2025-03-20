import React, { useState } from "react";

export interface IData {
  name: string;
  email: string;
}

const FormWithCallBack = ({
  userUpdate,
}: {
  userUpdate: (user: IData) => void;
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-10 pb-3">
        <form
          className="flex flex-col justify-center items-center p-10 gap-4 bg-red-100 rounded-sm"
          onSubmit={(e) => {
            e.preventDefault();
            userUpdate({ name, email });
          }}
        >
          <input
            className="border border-solid shadow-lg  p-1 rounded-lg"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border border-solid shadow-lg p-1 rounded-lg"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="w-32 bg-slate-400 rounded-md " type="submit">
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default FormWithCallBack;
