import React from "react";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <div className={styles.friendItem}>
    <img className={styles.avatar} src={avatar} alt="Avatar" width="48" />
    <p className={isOnline ? styles.online : styles.offline}>{name}</p>
    <p>{isOnline ? "Online" : "Offline"}</p>
  </div>
);

export default FriendListItem;
