import decode from 'jwt-decode';

export const setToken = (token: string): void => {
  localStorage.setItem('token', token);
};

export const getToken = (): string | null => {
  return localStorage.getItem('token') || null;
};

export const isTokenValid = (token: string): boolean => {
  const { exp } = decode(token);
  return Date.now() <= exp * 1000;
};

export const removeToken = (): void => {
  localStorage.removeItem('token');
};

export const isAuthenticated = (): boolean => {
  const token = getToken();

  return Boolean(token && isTokenValid(token));
};
