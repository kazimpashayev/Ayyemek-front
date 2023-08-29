import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AuthUser() {
  const navigate = useNavigate();

  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const getUser = () => {
    const userString = sessionStorage.getItem('user');
    const user = JSON.parse(userString);
    return user;
  };

  const [token, setToken] = useState(getToken());
  const [user, setUser] = useState(getUser());

  const saveToken = (userData, accessToken) => {
    sessionStorage.setItem('token', JSON.stringify(accessToken));
    sessionStorage.setItem('user', JSON.stringify(userData));

    setToken(accessToken);
    setUser(userData);

    navigate('/dashboard/profile');
  };

  const logout = () => {
    sessionStorage.clear();
    navigate('/login');
  };

  const http = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return {
    token,
    user,
    http,
    logout,
    saveToken,
  };
}

export default AuthUser;
