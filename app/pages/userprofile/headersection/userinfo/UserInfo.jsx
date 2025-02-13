import UserAvatar from "./UserAvatar";
import UserDetails from "./UserDetails";

const UserInfo = ({ data }) => {
  return (
    <div className="space-y-3 inline-flex flex-col py-1">
      <section className="flex">
        <UserAvatar data={data} />
        <UserDetails data={data} />
      </section>
    </div>
  );
};

export default UserInfo;
