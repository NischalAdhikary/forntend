import React, { useState } from "react";

export default function useModals(initialState = false) {
  const [isOpen, setisOpen] = useState(initialState);
  const openModal = () => {
    setisOpen(true);
  };
  const closeModal = () => {
    setisOpen(false);
  };
  const toggleModal = () => setisOpen((prev) => !prev);
  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal,
  };
}
