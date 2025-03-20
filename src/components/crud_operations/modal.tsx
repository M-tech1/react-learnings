import React from "react";

interface ModalProps {
  open: boolean;
  close: () => void;
  children: React.ReactNode;
}

export default function Modal({ open, close, children }: ModalProps) {
  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        // onClick={close}
      >
        <div className="bg-white p-4 rounded shadow-lg w-64 h-64">
          <button
            className=" justify-end float-right text-red-600"
            onClick={close}
          >
            X{" "}
          </button>
          {children}
        </div>
      </div>
    </>
  );
}
