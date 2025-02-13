// "use client";
// import { useDispatch } from "react-redux";
// import { clearUser } from "../features/userSlice";

// export const useLogout = () => {
//   const dispatch = useDispatch();

//   const logout = () => {
//     localStorage.removeItem("user");
//     dispatch(clearUser());
//   };

//   return { logout };
// };

"use client";
import { useDispatch } from "react-redux";
import { clearUser } from "../features/userSlice";
import { deleteCookie } from "../utils/cookies";

export const useLogout = () => {
  const dispatch = useDispatch();

  const logout = () => {
    // Clear localStorage
    localStorage.removeItem("user");

    // Clear cookie
    deleteCookie("user");

    dispatch(clearUser());
  };

  return { logout };
};
