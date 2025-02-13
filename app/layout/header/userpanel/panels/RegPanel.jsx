import Link from "next/link";

const RegPanel = () => {
  return (
    <div className="space-x-3">
      <Link href="/login">Login</Link>
      <Link href="/signup">Sign Up</Link>
    </div>
  );
};

export default RegPanel;
