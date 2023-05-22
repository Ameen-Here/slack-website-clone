import React from "react";
import "./ChatInput.css";

import Button from "@mui/material/Button";
import { useState } from "react";
import db from "../../firebase";
import { useStateValue } from "../../StateProvider";
import firebase from "firebase";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const ChatInput = ({ channelName, channelId }) => {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();
  const sendMessage = (e) => {
    e.preventDefault();
    if (channelId) {
      console.log("here");
      console.log(user.photoURL);
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userimage: user.photoURL,
      });
    }
    setInput("");
  };
  return (
    <div className="chatInput">
      <form>
        <input
          placeholder={`Message #${channelName}`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </div>
  );
};

export default ChatInput;
