import React, { useState } from "react";
import FormWithCallBack, {
  IData,
} from "./components/passing-data-around/callBack";
import { AuthProvider } from "./components/hooks/useContext";
import Tutorials from "./categories/tutorial";
import Exercises from "./categories/exercises";
import DropDown from "./components/drop-down";
import RegistrationForm from "./components/reach-hook-form";

export default function App() {
  return (
    <>
      <AuthProvider>
        {/* <Tutorials /> */}
        <Exercises />
      </AuthProvider>
    </>
  );
}
