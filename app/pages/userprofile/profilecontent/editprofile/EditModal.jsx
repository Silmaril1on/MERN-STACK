"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { modalAnimation } from "@/app/animations/motionValues";
import Close from "@/app/components/uicomponents/Close";
import Title from "@/app/components/uicomponents/Title";
import Button from "@/app/components/uicomponents/Button";
import PinkSvg from "@/app/components/materialcomponents/PinkSvg";

const EditModal = ({ field, onClose, currentValue }) => {
  const [value, setValue] = useState(currentValue || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useSelector((store) => store.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:3500/api/user/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ [field.name]: value }),
      });
      if (!response.ok) {
        throw new Error("Failed to update profile");
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
      <div className="bg-blue/40 backdrop-blur-3xl relative form-container">
        <PinkSvg />
        <div>
          <Close
            className="absolute text-pink top-3 right-3"
            onClick={onClose}
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="relative space-y-4 flex-col z-[4] w-full"
        >
          <Title third>Edit {field.label}</Title>
          <input
            className="input-pink bg-pink/20"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={`Enter your ${field.label.toLowerCase()}`}
          />
          {error && <p className="text-red-500">{error}</p>}
          <Button className="pink-btn" type="submit" disabled={loading}>
            {loading ? "Updating..." : "Update"}
          </Button>
        </form>
      </div>
    </motion.div>
  );
};

export default EditModal;
