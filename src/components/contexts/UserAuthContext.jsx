import { createContext, useState} from 'react';

//interface UserAuthContext {
//  user: User | null;
//  setUser: (user: User | null) => void;
//}

export const UserAuthContext = createContext({
  user: {},
  setUser: () => {},
});

const UserAuthContextProvider = ({children}) =>{

  const [user, setUser] = useState({})
  
  return <UserAuthContext.Provider
  value={{user, setUser}}>
    {children}
  </UserAuthContext.Provider>
}


export default UserAuthContextProvider;