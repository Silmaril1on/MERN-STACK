"use client";

import { useState } from "react";

const ArtistForm = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [stageName, setStageName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [label, setLabel] = useState("");
  const [bio, setBio] = useState("");
  const [flag, setFlag] = useState("");
  const [birth, setBirth] = useState("");
  const [genres, setGenres] = useState([""]);
  const [profiles, setProfiles] = useState([{ name: "", link: "" }]);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sex, setSex] = useState("");

  const handleAddGenre = () => {
    setGenres([...genres, ""]);
  };

  const handleGenreChange = (index, value) => {
    const updatedGenres = [...genres];
    updatedGenres[index] = value;
    setGenres(updatedGenres);
  };

  const handleAddProfile = () => {
    setProfiles([...profiles, { name: "", link: "" }]);
  };

  const handleProfileChange = (index, field, value) => {
    const updatedProfiles = [...profiles];
    updatedProfiles[index][field] = value;
    setProfiles(updatedProfiles);
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const artistData = {
        name,
        desc,
        stageName,
        country,
        city,
        label,
        bio,
        flag,
        birth,
        genre: genres,
        profiles,
        image,
      };

      const response = await fetch("http://localhost:3500/api/artists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(artistData),
      });

      if (response.ok) {
        // Reset form
        setName("");
        setDesc("");
        setStageName("");
        setCountry("");
        setCity("");
        setLabel("");
        setBio("");
        setFlag("");
        setBirth("");
        setGenres([""]);
        setProfiles([{ name: "", link: "" }]);
        setImage(null);
        setImagePreview(null);
        console.log("New artist added", await response.json());
      } else {
        const error = await response.json();
        console.log("Error:", error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-center flex-col bg-blue p-5">
      <h2 className="text-3xl font-bold">Create Artist</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        {/* Artist Name */}
        <div className="w-full space-y-2">
          <label className="block text-green">Artist Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
          />
          {imagePreview && (
            <div className="mt-2">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-32 h-32 object-cover rounded"
              />
            </div>
          )}
        </div>

        <input
          id="artist name"
          name="artist name"
          type="text"
          placeholder="Artist Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          id="artist sex"
          name="artist sex"
          type="text"
          placeholder="Artist Sex"
          value={sex}
          onChange={(e) => setSex(e.target.value)}
        />
        {/* Artist Description */}
        <input
          id="desc"
          name="desc"
          type="text"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        {/* Stage Name */}
        <input
          id="stage name"
          name="stage name"
          type="text"
          placeholder="Stage Name"
          value={stageName}
          onChange={(e) => setStageName(e.target.value)}
        />
        {/* Country */}
        <input
          id="country"
          name="country"
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        {/* City */}
        <input
          id="city"
          name="city"
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        {/* Label */}
        <input
          id="lable"
          name="label"
          type="text"
          placeholder="Label"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
        {/* Biography */}
        <input
          id="bio"
          name="bio"
          type="text"
          placeholder="Biography"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <input
          id="flag"
          name="flag"
          type="text"
          placeholder="Flag URL"
          value={flag}
          onChange={(e) => setFlag(e.target.value)}
        />
        {/* Birth Date */}
        <input
          id="birth"
          name="birth"
          type="date"
          placeholder="Birth Date"
          value={birth}
          onChange={(e) => setBirth(e.target.value)}
        />

        {/* Genres */}
        <div className="w-full space-y-2">
          <h3 className="text-green text-3xl">Genres</h3>
          {genres.map((genre, index) => (
            <div key={index} className="space-y-2">
              <input
                id="genre"
                name="genre"
                type="text"
                placeholder="Genre"
                value={genre}
                onChange={(e) => handleGenreChange(index, e.target.value)}
              />
            </div>
          ))}
          <button className="green-btn" type="button" onClick={handleAddGenre}>
            Add Genre
          </button>
        </div>

        {/* Profiles */}
        <div className="space-y-2">
          <h3 className="text-green text-3xl">Profiles</h3>
          {profiles.map((profile, index) => (
            <div key={index} className="space-y-2">
              <input
                id="platform"
                name="platform"
                type="text"
                placeholder="Platform"
                value={profile.name}
                onChange={(e) =>
                  handleProfileChange(index, "name", e.target.value)
                }
              />
              <input
                id="link"
                name="link"
                type="text"
                placeholder="Link"
                value={profile.link}
                onChange={(e) =>
                  handleProfileChange(index, "link", e.target.value)
                }
              />
            </div>
          ))}
          <button
            className="green-btn"
            type="button"
            onClick={handleAddProfile}
          >
            Add Profile
          </button>
        </div>
        <button disabled={loading} className="green-btn" type="submit">
          {loading ? "Creating Artist..." : "Create Artist"}
        </button>
      </form>
    </div>
  );
};

export default ArtistForm;
