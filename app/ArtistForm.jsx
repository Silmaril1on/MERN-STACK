"use client";
import { useState } from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";

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
  const [gallery, setGallery] = useState([]);
  const [galleryPreviews, setGalleryPreviews] = useState([]);
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

  const handleGalleryImageChange = async (e) => {
    const files = Array.from(e.target.files);
    if (gallery.length + files.length > 6) {
      alert("Maximum 6 images allowed in gallery");
      return;
    }

    const newImages = [];
    const newPreviews = [];

    for (const file of files) {
      const reader = new FileReader();
      reader.onloadend = () => {
        newImages.push(reader.result);
        newPreviews.push(reader.result);
        if (newImages.length === files.length) {
          setGallery([...gallery, ...newImages]);
          setGalleryPreviews([...galleryPreviews, ...newPreviews]);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const removeGalleryImage = (index) => {
    setGallery(gallery.filter((_, i) => i !== index));
    setGalleryPreviews(galleryPreviews.filter((_, i) => i !== index));
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
        gallery,
        sex,
      };

      const response = await fetch("http://localhost:3500/api/artists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(artistData),
      });

      if (response.ok) {
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
        setGallery([]);
        setGalleryPreviews([]);
        setSex("");
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
        {/* Artist Image */}
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

        {/* Gallery Section */}
        <div className="w-full space-y-2">
          <label className="block text-green">Gallery Images (Max 6)</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleGalleryImageChange}
            className="w-full"
            disabled={gallery.length >= 6}
          />
          <div className="grid grid-cols-3 gap-2 mt-2">
            {galleryPreviews.map((preview, index) => (
              <div key={index} className="relative">
                <img
                  src={preview}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-24 object-cover rounded"
                />
                <button
                  type="button"
                  onClick={() => removeGalleryImage(index)}
                  className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1 text-white hover:bg-red-600"
                >
                  <IoMdClose size={16} />
                </button>
              </div>
            ))}
          </div>
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
        {/* Rest of the form fields */}
        <input
          id="desc"
          name="desc"
          type="text"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          id="stage name"
          name="stage name"
          type="text"
          placeholder="Stage Name"
          value={stageName}
          onChange={(e) => setStageName(e.target.value)}
        />
        <input
          id="country"
          name="country"
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          id="city"
          name="city"
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          id="lable"
          name="label"
          type="text"
          placeholder="Label"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
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
        <div className="space-y-2 w-full">
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
