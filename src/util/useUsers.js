import { useContext } from 'react';
import { UserContext } from '../context/user';

function useUsers() {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUsers must be used within a UsersProviders');

  const { data, setData } = context;

  return { data, setData };
}

export default useUsers;
