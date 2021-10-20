import React from "react";
//import AnimLogo from "../components/AnimLogo";
import { Container } from "react-bootstrap";
import ProfileTile from "../components/ProfileTile";
import Background1 from "../assets/mills-untitled-shoot-615-211019.jpg";

const style = {
  position: "relative",
  zIndex: 2,
  textAlign: "center",
  marginBottom: "3em",
  paddingTop: "100px",
};

const groupData = [
  {
    login: "Millie Grey",
    avatar_url: "https://avatars.githubusercontent.com/u/83617863?v=4",
    html_url: "https://github.com/MillieGrey",
    name: "Heya,",
    bio: "I make stuff.",
  },
];

export default function Home() {
  return (
    <Container style={style}>
      <ProfileTile imgPath={Background1} isLeft={true} profile={groupData[0]} />
    </Container>
  );
}
