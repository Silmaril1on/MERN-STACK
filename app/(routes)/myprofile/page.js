import MyProfile from "@/app/pages/userprofile/MyProfile";
import { cookies } from "next/headers";

export async function generateMetadata() {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get("user")?.value;
  let username = "My Profile"; // Default title

  if (userCookie) {
    try {
      const user = JSON.parse(userCookie);
      username = `${user.username}'s Profile`;
    } catch (error) {
      console.error("Error parsing user cookie:", error);
    }
  }

  return {
    title: `DJDB - ${username}`,
  };
}

const ProfilePage = async () => {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get("user")?.value; // Get user data from cookie

  if (!userCookie) {
    return <p>Unauthorized. Please log in.</p>;
  }

  const user = JSON.parse(userCookie); // Parse stored user data
  const token = user.token; // Extract token from user data

  let userData = null;
  try {
    const response = await fetch("http://localhost:3500/api/user/details", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // Send token in Authorization header
        "Content-Type": "application/json",
      },
      cache: "no-store", // Ensure fresh data on each request
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user details");
    }

    userData = await response.json();
  } catch (error) {
    console.error("Error fetching user details:", error);
  }

  return <MyProfile data={userData} />;
};

export default ProfilePage;
