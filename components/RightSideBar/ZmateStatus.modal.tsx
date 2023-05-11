export type ZmateStatusProps = {
  zMate: {
    id: number;
    image: string;
    name: string;
    status: "online" | "away" | "offline";
  };
};
