import React, { useState } from "react";
import "./index.css";
import Modal from "./Modal/Modal";

const Index = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <h1>Hey, click on the button to open modal</h1>
      <button
        className="openModalBtn"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Open
      </button>
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
};

export default Index;
