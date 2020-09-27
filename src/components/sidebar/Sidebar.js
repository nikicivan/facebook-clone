import React from "react";
import SidebarRow from "../sidebar-row/SidebarRow";
import "./sidebar.css";

// import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
// import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
// import PeopleIcon from "@material-ui/icons/People";
// import ChatIcon from "@material-ui/icons/Chat";
// import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const loginUser = useSelector((state) => state.loginUser);
  const { user } = loginUser;

  return (
    <div className="sidebar">
      <SidebarRow
        src={user.photoURL}
        title={user.displayName}
      />
      <SidebarRow
        src="https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/squBo4GNUfh.png"
        title="COVID-19 Information Center"
      />
      <SidebarRow
        src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/i7hepQ2OeZg.png"
        title="Pages"
      />
      <SidebarRow
        src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png"
        title="Friends"
      />
      <SidebarRow
        src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/kQ3g3UYcS_k.png"
        title="Messenger"
      />
      <SidebarRow
        src="https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/U_sRIAvZ0k2.png"
        title="Jobs"
      />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="See more" />
    </div>
  );
};

export default Sidebar;
