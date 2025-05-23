import { useContext } from "react";
import TaskContext from "../context/taskcontext";
const useTask = () => {
  return useContext(TaskContext);
};
export default useTask;
