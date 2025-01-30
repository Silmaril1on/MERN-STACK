// Fetch All Artists

// Fetch User's Favorite Artists
export const fetchUserFavorites = async (token) => {
  try {
    const response = await fetch(
      "http://localhost:3500/api/artists/favorites",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch favorites");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching favorites:", error);
    throw error;
  }
};

export const toggleFavorite = async (artistId, token) => {
  try {
    const response = await fetch(
      `http://localhost:3500/api/artists/${artistId}/favorite`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to toggle favorite");
    }
    return await response.json();
  } catch (error) {
    console.error("Error toggling favorite:", error);
    throw error;
  }
};

// Fetch User Profile Details
export const fetchUserDetails = async (token) => {
  try {
    const response = await fetch(`http://localhost:3500/api/user/details`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch User Details");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching details", error);
    throw error;
  }
};
