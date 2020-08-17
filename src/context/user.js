import React, {
  useState, createContext,
} from 'react';

export const UserContext = createContext();

function UserProvider({ children }) {
  const [data, setData] = useState(
    {
      login: '',
      name: '',
      avatar_url: '',
      followers: '',
      following: '',
      publicRepository: '',
      repositories: [],

    },

  );

  return (
    <UserContext.Provider value={{ data, setData }}>

      {children}

    </UserContext.Provider>

  );
}
export default UserProvider;
