import React from "react";
import "./Sidebar.css";
import SidebarOption from "../SidebarOption/SidebarOption";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateReactIcon from "@mui/icons-material/Create";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Autogenbot</h2>
          <h3>
            <FiberManualRecordIcon className="green__icon" /> Ameen Noushad
          </h3>
        </div>
        <CreateReactIcon className="editor__icon" />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} title="Add Channel" />
      <hr />
      {/* Connect to DB and list all the channels */}
      {/* SidebarOption */}
      {/* ... */}
    </div>
  );
};

export default Sidebar;
