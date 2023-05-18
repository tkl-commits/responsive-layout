export type FriendStatusProps = {
  friend: {
    id: number;
    image: string;
    name: string;
    status: "online" | "away" | "offline";
  };
};
