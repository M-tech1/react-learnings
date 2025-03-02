import React from "react";
export interface ITableColumn<T> {
  key: T;
  label: string;
}

export interface ITablProps<T> {
  column: ITableColumn<T>[];
  data: T[];
}

export default function Table<T extends Record<string, any>>({
  column,
  data,
}: ITablProps<T>) {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              {column.map((columnData) => (
                <th key={String(columnData.key)} className="p-2">
                  {columnData.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-t border-gray-500">
                {column.map((columnData) => (
                  <td key={String(columnData.key)} className="p-2 text-center">
                    {columnData.label}
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
