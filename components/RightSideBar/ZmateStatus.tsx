import React, { useEffect, useState } from "react";
import { ZmateStatusProps } from "./ZmateStatus.modal";

const ZmateStatus: React.FunctionComponent<ZmateStatusProps> = (props) => {
  const { zMate } = props;
  const [statusColor, setStatusColor] = useState("black");

  useEffect(() => {
    const newStatusColor =
      zMate.status === "online"
        ? "#7FBA00"
        : zMate.status === "away"
        ? "#ffd300"
        : "#bebebe";
    setStatusColor(newStatusColor);
  }, [zMate.status]);

  return (
    <li key={zMate.id}>
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
          src={zMate.image}
          alt={zMate.name}
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

export default ZmateStatus;
