import React, { useState } from "react";
import Button from "../../components/reusable-component/button";
import TableComp from "../../components/reusable-component/tables/table1";
import {
  columns,
  dummyData,
} from "../../components/reusable-component/tables/table1/data";
import Table from "../../components/reusable-component/tables/table2";
import {
  ITableHead,
  ITableBody,
  ITableDropdownOptions,
} from "../../components/reusable-component/tables/table2/data";
import user from "../../components/github-profile-finder/user";
import FormWithCallBack, {
  IData,
} from "../../components/passing-data-around/callBack";
import UserList from "../../components/crud_operations/userList";
import Context_Login from "../../components/hooks/useReducer.tsx/login";
import DropDown from "../../components/drop-down";
import RegistrationForm from "../../components/reach-hook-form";
import { Card } from "../../components/card";
import { Status, Colors } from "../../Variables-KeyValuePairs";
import { Search } from "../../components/search-component";
// import DynamicForm from "../../components/custom-form/dynamicForm";
import { Search_data } from "../../components/search-component/data";
import ProductView from "../../components/Product_details";
import MultiInputForm from "../../components/MultipleInputForm";

const options = [
  { label: "React", value: "react" },
  { label: "TypeScript", value: "typescript" },
  { label: "Tailwind CSS", value: "tailwind" },
  { label: "Programing", value: "data types" },
];

export default function Exercises() {
  const [user, setUser] = useState<IData | null>(null);
  const [selectedOption, setSelectedOption] = useState("");

  function formatKey(value?: string, options?: any): string {
    if (!value) return "";
    value = value.split("_").join(" ");
    if (options?.capitalizeFirst) {
      value = value.charAt(0).toUpperCase() + value.slice(1);
    }

    return value;
  }

  return (
    <>
      {/* <Button onClick={() => console.log("testing button")} /> */}
      {/* <Table
                headers={ITableHead}
                body={ITableBody}
                title="User List"
                subTitle="Manage your users here"
                showSerialNumber={true}
                dropdownOptions={ITableDropdownOptions}
              /> */}

      {/* <div className="content-center justify-center p-10">
        <TableComp columns={columns} data={dummyData} />
      </div> */}

      {/* <UserList /> */}
      {/* ********** Learning useCallBack *********** */}
      {/* <FormWithCallBack userUpdate={setUser} /> */}
      {/* <div className="flex justify-self-center items-center ">
        {user && (
          <p>
            Updated User: {user.name}: {user.email}
          </p>
        )}
      </div> */}
      {/* ********** end useCallBack *********** */}
      {/* <Context_Login /> */}

      {/* <div className="p-6 flex flex-col justify-self-center items-center ">
        <h2 className="text-lg font-semibold mb-2">Select a Topic:</h2>
        <DropDown
          options={options}
          value={selectedOption}
          onChange={setSelectedOption}
        />
        <p className="mt-4">You selected: {selectedOption || "None"}</p>
      </div> */}

      {/* <RegistrationForm /> */}

      {/* <div className="flex flex-row w-full gap-5 p-5">
        {Object.keys(Status)?.map((key: string, index: number) => (
          <Card
            key={index}
            bgColor={Colors?.[key]}
            amount={Status?.[key]}
            title={key.toUpperCase()}
            increase=""
          />
        ))}
      </div> */}
      {/* <DynamicForm
        fields={[]}
        onSubmit={function (data: Record<string, string | boolean>): void {
          throw new Error("Function not implemented.");
        }}
      /> */}

      {/* <Search data={Search_data} /> */}

      {/* <ProductView /> */}
      <MultiInputForm />
    </>
  );
}
