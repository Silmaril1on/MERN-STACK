// Fetch All Artists
export const fetchAllArtists = async (token) => {
  try {
    const response = await fetch("http://localhost:3500/api/artists", {
      headers: {
        Authorization: `Bearer ${token}`,
        cache: "no-store",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch favorites");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching favorites:", error);
    throw error;
  }
};

// Fetch User's Favorite Artists
export const fetchUserFavorites = async (token) => {
  try {
    const response = await fetch("http://localhost:3500/api/user/favorites", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch favorites");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching favorites:", error);
    throw error;
  }
};

// Fetch recent favorite artists
export const fetchRecentFavorites = async (token) => {
  try {
    const response = await fetch(
      "http://localhost:3500/api/user/recentfavorites",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include token if required
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch recent favorites");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching recent favorites:", error.message);
    return null; // Return null to handle errors gracefully
  }
};

// Fetch recent rated artists
export const fetchRecentRates = async (token) => {
  try {
    const response = await fetch(
      "http://localhost:3500/api/user/recentlyrated",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch recent favorites");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching recent favorites:", error.message);
    return null;
  }
};

export const toggleFavorite = async (artistId, token) => {
  try {
    const response = await fetch(
      `http://localhost:3500/api/user/${artistId}/favorite`,
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
