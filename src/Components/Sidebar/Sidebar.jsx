import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import SidebarOption from "../SidebarOption/SidebarOption";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import CreateReactIcon from "@mui/icons-material/Create";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import db from "../../firebase";
import { useStateValue } from "../../StateProvider";

const Sidebar = () => {
  const [{ user }] = useStateValue();
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    // Connect to DB and list all the channels
    db.collection("rooms").onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      );
    });
  }, []);

  useEffect(() => {
    // Run this code whenever the channels variable changes
  }, [channels]);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Autogenbot</h2>
          <h3>
            <FiberManualRecordIcon className="green__icon" />{" "}
            {user?.displayName}
          </h3>
        </div>
        <CreateReactIcon className="editor__icon" />
      </div>
      <SidebarOption
        Icon={HomeIcon}
        title="Portfolio"
        url="https://www.ameennoushad.com"
      />
      <SidebarOption
        Icon={InboxIcon}
        title="Resume"
        url="https://bit.ly/3WR0QRD"
      />
      <SidebarOption
        Icon={LinkedInIcon}
        title="Linkedin"
        url="https://www.linkedin.com/in/ameen-noushad-888b79242/"
      />

      <SidebarOption
        Icon={GitHubIcon}
        title="Github"
        url="https://github.com/Ameen-Here"
      />

      <SidebarOption
        Icon={LanguageIcon}
        title="Asset Tracker Website"
        url="https://fierce-citadel-85684.herokuapp.com/"
      />

      <SidebarOption
        Icon={FileCopyIcon}
        title="Netflix Clone"
        url="https://netfli-website-delta.vercel.app/login"
      />

      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption
        Icon={AddIcon}
        title="Add Channel"
        addChannelOption={true}
      />
      <hr />
      {/* Connect to DB and list all the channels */}
      {/* SidebarOption */}
      {channels.map((channel) => (
        <SidebarOption title={channel.name} id={channel.id} />
      ))}

      {/* ... */}
    </div>
  );
};

export default Sidebar;
