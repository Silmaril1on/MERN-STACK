import Title from "@/app/components/uicomponents/Title";

const GalleryHeadline = ({ data, active }) => {
  const displayName = data.stageName || data.name;
  const gallery = data.gallery.length;

  return (
    <div className="absolute left-0 top-0 flex-center h-full pl-5">
      <div className="flex flex-col">
        <Title size={30} third>
          {displayName}
        </Title>
        <span className="text-4xl text-lightgray">PHOTO</span>
        <span className="text-4xl text-lightgray">GALLERY</span>
        <div className="space-x-2 my-2 font-tetriary text-2xl">
          <span className="text-green w-4 inline-flex justify-center">
            {active + 1}
          </span>
          <span>/</span>
          <span>{gallery}</span>
        </div>
      </div>
    </div>
  );
};

export default GalleryHeadline;
