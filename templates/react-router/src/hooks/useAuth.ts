import { useEffect, useState } from "react";

export const useAuth = () => {
  const [user, setUser] = useState<{ name: string } | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (user && token) {
      setUser(JSON.parse(user));
      setToken(token);
    }
  }, []);

  return {
    user,
    token,
  };
};
