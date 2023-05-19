import React from "react";
import classes from "./Header.module.css";
import { Avatar } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useStateValue } from "../../StateProvider";

const Header = () => {
  const [{ user }] = useStateValue();
  return (
    <div className={classes.header}>
      <div className={classes.header__left}>
        {/* Avatar for logged in user */}
        <div>
          <Avatar
            className={classes.header__avatar}
            alt={user?.displayName}
            src={user?.photoURL}
          />
        </div>

        {/* Time Icon */}
        <AccessTimeIcon />
      </div>
      <div className={classes.header__search}>
        {/* search icon */}
        <SearchIcon />
        {/* Search Input */}
        <input placeholder="Search Autogenbot" />
      </div>
      <div className={classes.header__right}>
        {/* Help Icon */}
        <HelpOutlineIcon className={classes.helper__icon} />
      </div>
    </div>
  );
};

export default Header;
