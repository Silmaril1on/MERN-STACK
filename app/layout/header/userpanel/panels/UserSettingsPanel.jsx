import LinkComponent from "@/app/components/uicomponents/LinkComponent";
import { useLogout } from "@/app/hooks/useLogOut";
import { MdLogout } from "react-icons/md";
import { motion } from "framer-motion";
import { staggerOpacity } from "@/app/animations/motionValues";
import { CgProfile } from "react-icons/cg";
import WhiteSvg from "@/app/components/materialcomponents/WhiteSvg";

const UserSettingsPanel = ({ setActive }) => {
  const { logout } = useLogout();
  const handleMouseEnter = () => setActive(true);
  const handleMouseLeave = () => setActive(false);
  return (
    <motion.div
      variants={staggerOpacity}
      initial="hidden"
      animate="visible"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="absolute -bottom-[256px] p-2 z-10 right-0 h-64 w-44"
    >
      <div className="relative backdrop-blur-lg content-bg p-3 w-full h-full flex items-end flex-col">
        <WhiteSvg />
        <div className="relative z-[4] *:flex *:justify-end">
          <motion.div variants={staggerOpacity}>
            <LinkComponent href="/myprofile">
              <CgProfile />
              <span>My Profile</span>
            </LinkComponent>
          </motion.div>
          <motion.div variants={staggerOpacity}>
            <LinkComponent href="" onClick={logout}>
              <MdLogout />
              <span>Logout</span>
            </LinkComponent>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default UserSettingsPanel;
