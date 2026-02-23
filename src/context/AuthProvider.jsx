import { useState } from "react";
import { AuthContext } from "./AuthContext";

// 假資料使用者
const FAKE_USERS = [
  { id: 1, name: "王小明", email: "ming@test.com", password: "123456" },
  { id: 2, name: "李小花", email: "hua@test.com", password: "123456" },
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState("");

  const login = (email, password) => {
    const found = FAKE_USERS.find(
      u => u.email === email && u.password === password
    );
    if (found) {
      setUser({ id: found.id, name: found.name, email: found.email });
      setAuthError("");
      return true;
    } else {
      setAuthError("帳號或密碼錯誤");
      return false;
    }
  };

  const register = (name, email, password) => {
    const exists = FAKE_USERS.find(u => u.email === email);
    if (exists) {
      setAuthError("此信箱已被註冊");
      return false;
    }
    const newUser = { id: FAKE_USERS.length + 1, name, email, password };
    FAKE_USERS.push(newUser);
    setUser({ id: newUser.id, name: newUser.name, email: newUser.email });
    setAuthError("");
    return true;
  };

  const logout = () => {
    setUser(null);
    setAuthError("");
  };

  return (
    <AuthContext.Provider value={{ user, authError, setAuthError, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}