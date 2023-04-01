import { useContext } from "react";
import { UserAuthContext } from "../contexts/UserAuthContext";
import { useLocalStorage } from "./useLocalStorage";

//export interface User {
//  id: string;
//  name: string;
//  email: string;
//  authToken?: string;
//}

export const useUser = () => {
  const { user, setUser } = useContext(UserAuthContext);
  const { setItem } = useLocalStorage();

  const addUser = (user) => {
    setUser(user);
    setItem("user", JSON.stringify(user));
    setItem("token", user.token);
  };

  const removeUser = () => {
    setUser(null);
    setItem("user", "");
    setItem("token", "");
  };

  return { user, addUser, removeUser };
};
