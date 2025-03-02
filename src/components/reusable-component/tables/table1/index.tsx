import React from "react";
import { columns } from "./data";

export interface Columns {
  key: string;
  header: string;
}

export interface tableDataProps {
  data: Record<string, any>[];
  columns: Columns[];
}

// interface tableProps {
//   data: { id: number; name: string; email: string; role: string }[];
// }

export default function TableComp({ data, columns }: tableDataProps) {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-200 m-auto">
              {columns.map((column) => (
                <th key={column.key}>{column.header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="border border-solid border-black">
                {columns.map((column) => (
                  <td
                    className="m-auto border border-solid border-black "
                    key={column.key}
                  >
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
