import React, { useEffect, useState } from "react";
import { FriendStatusProps } from "./FriendStatus.modal";

const FriendStatus: React.FunctionComponent<FriendStatusProps> = (props) => {
  const { friend } = props;
  const [statusColor, setStatusColor] = useState("black");

  useEffect(() => {
    const newStatusColor =
      friend.status === "online"
        ? "#7FBA00"
        : friend.status === "away"
        ? "#ffd300"
        : "#bebebe";
    setStatusColor(newStatusColor);
  }, [friend.status]);

  return (
    <li key={friend.id}>
      <div
        style={{
          display: "inline-block",
          position: "relative",
          width: "50px",
          height: "50px",
        }}
      >
        <img
          style={{
            height: "auto",
            maxWidth: "100%",
            borderRadius: "100%",
            overflowClipMargin: "content-box",
            overflow: "clip",
          }}
          src={friend.image}
          alt={friend.name}
        />
        <div
          style={{
            background: statusColor,
            borderRadius: "50%",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: "11px",
            width: "11px",
            position: "relative",
            bottom: "20px",
          }}
        >
          <span
            style={{
              background: "white",
              height: "2px",
              width: "6px",
              paddingLeft: "7px",
            }}
          />
        </div>
      </div>
    </li>
  );
};

export default FriendStatus;
