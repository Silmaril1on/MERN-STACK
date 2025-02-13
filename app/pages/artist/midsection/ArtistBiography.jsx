"use client";
import Title from "@/app/components/uicomponents/Title";
import { formatBirthdate, truncateBio } from "@/app/helpers/helper";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

const ArtistBiography = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const previewLength = 2000;
  const paragraphs = data.bio.replace(/\\n/g, "\n").split("\n\n");

  const fullBio = paragraphs.join("\n\n");
  const previewBio = truncateBio(fullBio, previewLength);

  return (
    <div className="py-10 text-black ">
      <div className="space-y-4 inline-flex flex-col py-5 pointer-events-none">
        <Title size={40} className="font-bold">
          artist biography
        </Title>
        <Title size={15}>Born • {formatBirthdate(data.birth)}</Title>
      </div>

      <div className="whitespace-pre-line font-secondary pointer-events-none text-sm">
        <ReactMarkdown>{isExpanded ? fullBio : previewBio}</ReactMarkdown>
      </div>

      {fullBio.length > previewLength && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 hover:underline"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default ArtistBiography;
