import React, { useState } from "react";
import axios from "axios";
import { User } from "./type";
import { toast } from "react-toastify";

interface Props {
  user: User;
  UpdateUser: (user: User) => void;
}

export default function EditUser({ user, UpdateUser }: Props) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const HandleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${user.id}`,
        { name, email }
      );
      UpdateUser(response.data);
      toast.success(response.status);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <form onSubmit={HandleUpdate}>
        <input
          className="border border-solid rounded p-1"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border border-solid rounded p-1"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="w-32 h-10 bg-slate-600 rounded text-white hover:cursor-pointer"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
}
