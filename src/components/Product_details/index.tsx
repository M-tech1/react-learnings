import React, { useState } from "react";

interface ItemProps {
  id: number;
  name: string;
  description: string;
}

const Product: ItemProps[] = [
  { id: 1, name: "martins", description: "Great destiny..." },
  { id: 2, name: "Laptop", description: "A powerful laptop" },
  { id: 3, name: "Tablet", description: "A lightweight tablet" },
];
export default function ProductView() {
  const [selectedProduct, setSelectedProduct] = useState<ItemProps | null>(
    null
  );

  const [openModal, setOpenModal] = useState(false);

  function CloseModal() {
    setOpenModal(false);
    setSelectedProduct(null);
  }

  function handleProduct(product: ItemProps) {
    setSelectedProduct(product);
    setOpenModal(true);
  }

  return (
    <>
      <div className="p-8">
        <h2 className="text-2xl font-boldx">Products</h2>
        <ul className="">
          {Product.map((product) => (
            <li
              key={product.id}
              className="p-2 border rounded cursor-pointer hover:bg-gray-100"
              //   onClick={() => console.log("testing", product.id)}
              onClick={() => handleProduct(product)}
            >
              {product.name}
            </li>
          ))}
        </ul>
      </div>

      {openModal && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h3 className="text-xl font-bold mb-2">{selectedProduct.name}</h3>
            <p className="mb-4">{selectedProduct.description}</p>
            <button
              onClick={CloseModal}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
