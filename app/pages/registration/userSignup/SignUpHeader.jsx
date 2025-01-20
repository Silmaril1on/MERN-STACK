import Link from "next/link";

const SignUpHeader = () => {
  return (
    <div className="flex-center flex-col ">
      <h3 className="text-4xl font-bold uppercase">Sign Up</h3>
      <span className="font-primary font-light text-lightgray">
        Already have an account?
        <Link
          className="text-green font-normal px-1 hover:underline"
          href="/login"
        >
          Login
        </Link>
      </span>
    </div>
  );
};

export default SignUpHeader;
