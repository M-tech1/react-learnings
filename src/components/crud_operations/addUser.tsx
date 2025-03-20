import React, { useState } from "react";
import { User } from "./type";
import axios from "axios";
import { toast } from "react-toastify";

interface UserProps {
  addUser: (user: User) => void;
}

const AddUser = ({ addUser }: UserProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const HandleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        { name, email }
      );
      addUser(response?.data);
      toast.success("data added to list");
      setName("");
      setEmail("");
    } catch (error) {
      console.error("see error here:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <h2>Add New Users</h2>
        <input
          className="border border-solid rounded p-1"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter Name"
          required
        />
        <input
          className="border border-solid rounded p-1"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          required
        />

        <button
          className="w-32 h-10 bg-slate-600 rounded text-white hover:cursor-pointer"
          onClick={HandleAddUser}
        >
          Add
        </button>
      </div>
    </>
  );
};
export default AddUser;
