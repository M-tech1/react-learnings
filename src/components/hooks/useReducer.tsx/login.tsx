import React from "react";
import { useAuth } from "../useContext";
export default function Context_Login() {
  const { user, login, logout } = useAuth();
  return (
    <>
      <div className="flex  justify-center items-center p-10">
        {user ? (
          <>
            <p>Welcome, {user}!</p>
            <button
              className="bg-slate-600 text-white p-2 hover:cursor-pointer rounded-md"
              onClick={logout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              className="bg-red-300 rounded-md  text-white p-2 hover:cursor-pointer"
              onClick={() => login("Martins")}
            >
              Login
            </button>
          </>
        )}
      </div>
    </>
  );
}
