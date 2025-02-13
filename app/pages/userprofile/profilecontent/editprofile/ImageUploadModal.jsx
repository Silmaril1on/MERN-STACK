"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { modalAnimation } from "@/app/animations/motionValues";
import Image from "next/image";
import Title from "@/app/components/uicomponents/Title";
import Close from "@/app/components/uicomponents/Close";
import WhiteSvg from "@/app/components/materialcomponents/WhiteSvg";
import PinkSvg from "@/app/components/materialcomponents/PinkSvg";
import Button from "@/app/components/uicomponents/Button";

const ImageUploadModal = ({ onClose, currentImage }) => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(currentImage);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useSelector((store) => store.user);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:3500/api/user/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ image }),
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }
      window.location.reload();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      variants={modalAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex-center z-20"
    >
      <div className="bg-blue/40 backdrop-blur-3xl p-8 rounded-lg relative">
        <PinkSvg />
        <Close className="absolute top-2 right-2 text-pink" onClick={onClose} />
        <form
          onSubmit={handleSubmit}
          className="space-y-4 form-container w-full relative z-[4]"
        >
          <Title>Upload Profile Image</Title>
          {preview && (
            <div className="w-32 h-32 mx-auto">
              <Image
                src={preview}
                alt="Preview"
                width={128}
                height={128}
                className="rounded-full object-cover"
              />
            </div>
          )}

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="input-pink"
          />
          {error && <p className="text-red-500">{error}</p>}
          <Button
            type="submit"
            disabled={loading || !image}
            className="pink-btn"
          >
            {loading ? "Uploading..." : "Upload Image"}
          </Button>
        </form>
      </div>
    </motion.div>
  );
};

export default ImageUploadModal;
