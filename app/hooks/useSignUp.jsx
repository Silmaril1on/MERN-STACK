"use client";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../features/userSlice";
import { setError, setLoading } from "../features/modalSlice";

export const useSignUp = () => {
  const dispatch = useDispatch();
  const { error, loading } = useSelector((store) => store.modal);

  const signup = async (email, username, password) => {
    dispatch(setError(null));
    dispatch(setLoading(true));
    try {
      const response = await fetch("http://localhost:3500/api/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, username }),
      });
      const userData = await response.json();
      if (!response.ok) {
        dispatch(setLoading(false));
        dispatch(setError(userData.error));
        return;
      }
      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(userData));
        dispatch(getUser(userData));
        dispatch(setLoading(false));
        return true;
      }
    } catch (err) {
      dispatch(setLoading(false));
      dispatch(setError("An error occurred. Please try again."));
      return false;
    }
  };

  return { signup, loading, error };
};
