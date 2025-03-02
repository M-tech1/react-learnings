import React, { ReactNode } from "react";

export interface ITableHead {
  name: string;
  label?: string | ReactNode;
}

export interface ITableBody {
  id: string;
  [key: string]: string | ReactNode | any;
}

export interface ITableDropdownOptions {
  label: string;
  action: (row: ITableBody) => void;
  loading?: boolean;
}

interface TableProps {
  headers?: ITableHead[];
  body?: ITableBody[];
  title?: string;
  subTitle?: string;
  loading?: boolean;
  showSerialNumber?: boolean;
  dropdownOptions?: ITableDropdownOptions[];
}

export default function Table({
  headers = [],
  body = [],
  title,
  subTitle,
  loading = false,
  showSerialNumber = false,
  dropdownOptions = [],
}: TableProps) {
  return (
    <div className="w-full overflow-x-auto bg-primary-0 mb-2">
      <div className="w-full py-2 justify-between flex border-b border-primary-50 pb-4 flex-col sm:flex-row items-start gap-5">
        <div className="flex flex-col sm:justify-start text-left">
          <h2 className="text-sm font-semibold text-primary-300">{title}</h2>
          <h3 className="text-xs font-normal text-primary-200">{subTitle}</h3>
        </div>
      </div>
      <table className="table-auto w-full min-w-[30rem]">
        <thead className="text-left text-neut-400">
          <tr>
            {showSerialNumber && (
              <th className="py-4 pr-4 align-top text-sm bg-prim-500 pl-2 text-base-light">
                S/N
              </th>
            )}
            {headers.map((header, i) => (
              <th
                key={i}
                className="py-4 pr-4 text-[.95rem] align-top text-sm bg-prim-500 pl-2 text-base-light"
              >
                {header.label || header.name}
              </th>
            ))}
            {dropdownOptions.length > 0 && (
              <th className="py-4 pr-4 text-sm bg-prim-500 pl-2 text-base-light">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className="text-left text-primary-200">
          {loading ? (
            <tr>
              <td
                colSpan={headers.length + (showSerialNumber ? 2 : 1)}
                className="py-4 text-center"
              >
                Loading...
              </td>
            </tr>
          ) : body.length > 0 ? (
            body.map((row, idx) => (
              <tr key={row.id} className="relative border-b border-primary-50">
                {showSerialNumber && (
                  <td className="pt-4 pr-4 text-sm align-top pl-2">
                    {idx + 1}
                  </td>
                )}
                {headers.map((header, idx2) => (
                  <td
                    key={idx2}
                    className={`py-4 pr-4 text-sm align-top break-words text-neut-300 pl-2 ${
                      header.name.toLowerCase().includes("email")
                        ? "lowercase"
                        : "capitalize"
                    }`}
                  >
                    {row[header.name] || "-"}
                  </td>
                ))}
                {dropdownOptions.length > 0 && (
                  <td className="py-4 pr-4 text-sm align-top pl-2 flex gap-2">
                    {dropdownOptions.map((option, i) => (
                      <button
                        key={i}
                        onClick={() => option.action(row)}
                        className="text-blue-500 hover:underline"
                        disabled={option.loading}
                      >
                        {option.loading ? "Processing..." : option.label}
                      </button>
                    ))}
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={headers.length + (showSerialNumber ? 2 : 1)}
                className="py-4 text-center"
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
