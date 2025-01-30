"use client";
import { useState } from "react";

const ArtistBiography = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const previewLength = 2000;
  const paragraphs = data.bio.replace(/\\n/g, "\n").split("\n\n");

  const truncateBio = (text, limit) => {
    if (text.length <= limit) return text;
    return text.slice(0, limit) + "...";
  };

  const fullBio = paragraphs.join("\n\n");
  const previewBio = truncateBio(fullBio, previewLength);

  return (
    <div className="py-10 text-black">
      <div className="space-y-4 flex flex-col py-5 font-tetriary pointer-events-none">
        <h1 className="text-4xl font-bold">Artist Biography</h1>
        <span className="text-xl font-medium">Born {data.birth}</span>
      </div>

      <div className="whitespace-pre-line pointer-events-none text-sm">
        {isExpanded ? fullBio : previewBio}
      </div>

      {fullBio.length > previewLength && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 font-tetriary hover:underline"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default ArtistBiography;
