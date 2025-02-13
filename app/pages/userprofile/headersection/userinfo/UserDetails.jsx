"use client";
import Button from "@/app/components/uicomponents/Button";
import Paragraph from "@/app/components/uicomponents/Paragraph";
import Title from "@/app/components/uicomponents/Title";
import { setProfileToggle } from "@/app/features/modalSlice";
import { formatBirthdate } from "@/app/helpers/helper";
import { IoCalendarNumber } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

const UserDetails = ({ data }) => {
  const dispatch = useDispatch();
  const { username, createdAt } = data;
  const { profileToggle } = useSelector((store) => store.modal);

  const handleEdit = () => {
    dispatch(setProfileToggle(!profileToggle));
  };

  return (
    <div className="flex flex-col justify-between ml-3">
      <div className="flex flex-col space-y-3">
        <Title size={60}>{username}</Title>
        <div className="inline-flex items-center space-x-2 flex-row text-lightgray">
          <IoCalendarNumber size={25} />
          <Paragraph>
            Joined <span>{formatBirthdate(createdAt)}</span>
          </Paragraph>
        </div>
      </div>
      <Button className="pink-btn" onClick={handleEdit}>
        {profileToggle ? "edit profile" : "my activities"}
      </Button>
    </div>
  );
};

export default UserDetails;
