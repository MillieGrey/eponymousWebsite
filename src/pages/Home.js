import React from "react";
import AnimLogo from "../components/AnimLogo";
import { Container, Jumbotron } from "react-bootstrap";

const style = {
  position: "relative",
  zIndex: 2,
  textAlign: "center",
  marginBottom: "3em",
};

export default function Home() {
  return <Container style={style}></Container>;
}
