import React from "react";
import useTask from "./taskhooks";
import useModals from "./modals.hooks";
export default function useTaskActions() {
  const { addtodo, deletetodo, edittodo } = useTask();
  const { closeModal } = useModals();

  const updateTask = async (id, title, description) => {
    await edittodo(id, title, description);
    closeModal();
  };
  const deleteTask = async (id) => {
    await deletetodo(id);
  };
  const addTask = async (title, description) => {
    await addtodo(title, description);
    closeModal();
  };
  return { updateTask, deleteTask, addTask };
}
