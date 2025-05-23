import toast from "react-hot-toast";

export const useApiErrorHandler = () => {
  const handleError = (error) => {
    const status = error?.response?.data.status;

    switch (status) {
      case 400:
        toast.error("Bad request. Check your input.");
        break;
      case 401:
        toast.error("Incorrect credentials.");
        break;
      case 403:
        toast.error("Access denied.");
        break;
      case 404:
        toast.error("Resource not found.");
        break;
      case 429:
        toast.error("Too many attempts. Slow down.");
        break;
      case 500:
        toast.error("Internal server error.");
        break;
      default:
        toast.error(error?.response?.data?.message || "Unexpected error.");
        break;
    }
  };

  return { handleError };
};
