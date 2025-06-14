import React, { useEffect, useState } from "react";
import { KeyValuePair } from "./data";

interface Products {
  id?: number;
  product_type?: string;
  brand_name?: string;
  // atc_code?: {
  //   code_identifier?: string;
  //   code_title?: string;
  //   readable_name?: string;
  // };
  nafdac_no?: string;
  [key: string]: any;
}

interface ProductProps {
  data: Products[];
}

// export default function Search({ data }) {
export const Search: React.FC<ProductProps> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterData, setFilterData] = useState<Products[]>(data);

  useEffect(() => {
    const searchFilter = data.filter((product) => {
      const mysearch = searchTerm.toLowerCase();
      return (
        product.brand_name?.toLowerCase().includes(mysearch) ||
        product.product_type?.toLowerCase().includes(mysearch) ||
        product.nafdac_no?.includes(mysearch)
      );
    });
    setFilterData(searchFilter);
  }, [searchTerm, data]);
  return (
    <>
      <div className="flex flex-col justify-center p-5">
        <div className="p-5">
          <input
            className="border px-3 py-2 w-full mb-4 rounded"
            type="text"
            placeholder="Search by Product Type, Brand"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <ul className="space-y-4 ">
          {filterData.map((product) => (
            <li
              key={product.id}
              className="border p-4 rounded shadow-sm flex flex-col"
            >
              <p className="font-bold">
                <strong>Brand Name: </strong>
                {product.brand_name}
              </p>
              <p>
                <strong>Product Type:</strong> {product.product_type}
              </p>
              <p>
                <strong>Nafdac No.:</strong> {product.nafdac_number}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
