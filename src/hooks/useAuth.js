import { useState, useContext, createContext } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import endPoints from '@services/api/';
import { useRouter } from 'next/router';

const AuthContext = createContext();


export function AuthProvider({ children }) {
  const auth = useAuthProvider();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useAuthProvider() {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const { data: access_token } = await axios.post(endPoints.auth.login, { email, password }, options);
    // console.log(access_token);
    if (access_token) {
      const token = access_token.access_token
      Cookies.set('token', token, { expires: 5 });

      axios.defaults.headers.Authorization = `Bearer ${token}`;
      const { data: user } = await axios.get(endPoints.auth.profile);
      setUser(user);

    }
  };

  const logOut = () => {

    Cookies.remove('token');
    setUser(null);
    delete axios.defaults.headers.Authorization;
    // const router = useRouter();
    // router.push('/')
    window.location.href = '/login';
  }

  return {
    user,
    signIn,
    logOut
  };
}
