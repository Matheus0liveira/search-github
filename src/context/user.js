import React, {
  useState, createContext, useContext,
} from 'react';

const UserContext = createContext();

export default function UserProvider({ children }) {
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

export const useUsers = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUsers must be used within a UsersProviders');

  const { data, setData } = context;

  return { data, setData };
};
