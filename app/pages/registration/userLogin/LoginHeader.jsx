import Link from "next/link";

const LoginHeader = () => {
  return (
    <div className="flex-center flex-col ">
      <h3 className="text-4xl font-bold uppercase">Log In</h3>
      <span className="font-primary font-light text-lightgray text-sm lg:text-lg">
        Dont have an account?{" "}
        <Link
          className="text-green font-normal px-1 hover:underline"
          href="/signup"
        >
          Sign Up
        </Link>
      </span>
    </div>
  );
};

export default LoginHeader;
