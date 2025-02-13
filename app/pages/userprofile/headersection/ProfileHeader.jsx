import UserActivities from "./UserActivities";
import UserInfo from "./userinfo/UserInfo";

const ProfileHeader = ({ data }) => {
  return (
    <div className="flex-center *:w-2/4 py-5 bg-neutral-900 px-[10%]">
      <UserInfo data={data} />
      <UserActivities data={data} />
    </div>
  );
};

export default ProfileHeader;
