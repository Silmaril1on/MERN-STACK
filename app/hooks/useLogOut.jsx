"use client";
import { useDispatch } from "react-redux";
import { clearUser } from "../features/userSlice";

export const useLogout = () => {
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem("user");
    dispatch(clearUser());
  };

  return { logout };
};
