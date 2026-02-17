import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setLoginSuccess,
  setAuthChecked,
} from "../Redux/Auth/AuthReducer";
import { jwtDecode } from "jwt-decode";

export default function AuthInitializer({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("start");

    if (!token) {
      dispatch(setAuthChecked());
      return;
    }

    try {
      const decoded = jwtDecode(token);

      // ⏰ expiry check
      if (decoded.exp * 1000 < Date.now()) {
        localStorage.removeItem("start");
        dispatch(setAuthChecked());
        return;
      }

      dispatch(
        setLoginSuccess({
          user: decoded.id,
          type: decoded.roleId,
          name: decoded.name,
          email: decoded.email,
        })
      );
    } catch {
      localStorage.removeItem("start");
      dispatch(setAuthChecked());
    }
  }, [dispatch]);

  return children;
}
