import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useApiErrorHandler } from "../hooks/useToast";
import toast from "react-hot-toast";
import API from "../libs/axios";
const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const {handleError}=useApiErrorHandler()
  const [loading, setLoading] = useState(true);

  const verifyToken = async () => {
    console.log("hello form verifytoken");
    try {
      setLoading(true);
     
      // const response = await axios.get(
      //   "https://backend-1bee.onrender.com/api/user/verify",
      //   { withCredentials: true }
      // );
const response= await API.get('/user/verify')
      setUser(response.data.user);
      
    } catch (err) {
      console.error("Token verification failed:", err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
   
    
    try {
    
      const response = await API.post('/user/login', {
        email,
        password,
      });

      if (response.status === 200) {
        toast.success(response.data.message);
        setUser(response.data.user);
        return true
      }


    } catch (err) {
      console.log(err);
      
      handleError(err)
    }
  };

  const logout = async () => {

    try {
    
      await API.get('/user/logout')
      setUser(null)
    } catch (err) {
      console.log(err);
    }
      
    
    
  };

  const setUserdata = (data) => {
    console.log("hello form setuserdata");
    
    setUser(data);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, setUserdata, verifyToken, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContextProvider };
export default AuthContext;
