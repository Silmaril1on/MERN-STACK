"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setLoading } from "@/app/features/modalSlice";
import { getUser } from "@/app/features/userSlice";
import Link from "next/link";
import Spinner from "@/app/components/Spinner";
import UsernamePanel from "./UsernamePanel";

const UserPanel = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const { loading } = useSelector((store) => store.modal);

  useEffect(() => {
    dispatch(setLoading(true));
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(getUser(user));
    }
    dispatch(setLoading(false));
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      {user ? (
        <UsernamePanel />
      ) : (
        <div className="space-x-3">
          <Link href="/login">Login</Link>
          <Link href="/signup">Sign Up</Link>
        </div>
      )}
    </>
  );
};

export default UserPanel;
