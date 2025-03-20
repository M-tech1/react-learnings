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
export default function Exercises() {
  const [user, setUser] = useState<IData | null>(null);
  return (
    <>
      <Button onClick={() => console.log("testing button")} />
      {/* <Table
                headers={ITableHead}
                body={ITableBody}
                title="User List"
                subTitle="Manage your users here"
                showSerialNumber={true}
                dropdownOptions={ITableDropdownOptions}
              /> */}

      <div className="content-center justify-center p-10">
        <TableComp columns={columns} data={dummyData} />
      </div>

      <UserList />
      {/* ********** Learning useCallBack *********** */}
      <FormWithCallBack userUpdate={setUser} />
      <div className="flex justify-self-center items-center ">
        {user && (
          <p>
            Updated User: {user.name}: {user.email}
          </p>
        )}
      </div>
      {/* ********** end useCallBack *********** */}
    </>
  );
}
