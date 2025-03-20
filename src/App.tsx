import React, { useState } from "react";

import FormWithCallBack, {
  IData,
} from "./components/passing-data-around/callBack";
import Login from "./components/hooks/useReducer.tsx/login";
import { AuthProvider } from "./components/hooks/useContext";
import Tutorials from "./categories/tutorial";
import Exercises from "./categories/exercises";

export default function App() {
  return (
    <>
      <AuthProvider>
        <Tutorials />
        <Exercises />
        <Login />
      </AuthProvider>
    </>
  );
}
