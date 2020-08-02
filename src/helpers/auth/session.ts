import decode from 'jwt-decode';

export const setToken = (token: string): void => {
  localStorage.setItem('token', token);
};

export const getToken = (): string | null => {
  return localStorage.getItem('token') || null;
};

export const isTokenValid = (token?: string): boolean => {
  const checkedToken = getToken() || token;

  if (checkedToken) {
    const { exp } = decode(checkedToken);
    return Date.now() <= exp * 1000;
  }
  return false;
};

export const logout = (): void => {
  localStorage.removeItem('token');
};
