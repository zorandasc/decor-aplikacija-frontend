import jwt_decode from "jwt-decode";

import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get("/refresh", {
      withCredentials: true,
    });
    setAuth((prev) => {
      const accessToken = response?.data?.accessToken;
      const decoded = accessToken ? jwt_decode(accessToken) : undefined;
      const roles = decoded?.UserInfo?.roles || [];
      const username = decoded?.UserInfo?.username;
      return {
        ...prev,
        username,
        roles,
        accessToken,
      };
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
