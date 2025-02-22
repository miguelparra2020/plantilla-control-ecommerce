// helpers/storage.ts
export const getToken = () => localStorage.getItem("googleToken");
export const setToken = (token: string) => localStorage.setItem("googleToken", token);
export const removeToken = () => localStorage.removeItem("googleToken");

export const getUser = () => {
  const user = localStorage.getItem("googleUser");
  return user ? JSON.parse(user) : null;
};
export const setUser = (user: object) => localStorage.setItem("googleUser", JSON.stringify(user));
export const removeUser = () => localStorage.removeItem("googleUser");
