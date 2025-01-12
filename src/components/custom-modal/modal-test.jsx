import { useState } from "react";
import Modal from "./modal";

export default function ModalTest({}) {
  const [showModal, setShowModal] = useState(false);
  function handToggleModal() {
    setShowModal(!showModal);
  }

  function onClose() {
    setShowModal(false);
  }
  return (
    <>
      <div className="">
        <button
          onClick={handToggleModal}
          className="flex flex-col justify-self-center"
        >
          Open Modal PopUp
        </button>
        {showModal && (
          <Modal
            onCloseValue={onClose}
            body={<div>testing modal props with this values</div>}
          />
        )}
      </div>
    </>
  );
}
