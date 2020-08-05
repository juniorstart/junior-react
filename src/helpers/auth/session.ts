import decode from 'jwt-decode';

export const setToken = (token: string): void => {
  localStorage.setItem('token', token);
};

export const getToken = (): string | null => {
  return localStorage.getItem('token') || null;
};

export const isTokenValid = (token?: string): boolean => {
  const checkedToken = token || getToken();

  if (checkedToken) {
    const { exp } = decode(checkedToken);
    return Date.now() <= exp * 1000;
  }
  return false;
};

export const removeToken = (): void => {
  localStorage.removeItem('token');
};
