import React from "react";
import "./SidebarOption.css";
import { useHistory } from "react-router-dom";
import db from "../../firebase";

const SidebarOption = ({ Icon, title, id, addChannelOption, url }) => {
  const history = useHistory();
  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");
    if (channelName) {
      // Connect to DB and add the channel
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };
  const selectChannel = () => {
    if (url) {
      window.open(url, "_blank");
    } else {
      if (id) {
        history.push(`/room/${id}`);
      } else {
        history.push(title);
      }
    }
  };
  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash">#</span> {title}
        </h3>
      )}
    </div>
  );
};

export default SidebarOption;
