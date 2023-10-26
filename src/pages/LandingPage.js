import { Box } from "@chakra-ui/react";
import React from "react";
import "./LandingPage.css";
import videoBg from "../assets/videoBg.mp4";

export default function LandingPage() {
  return (
    <Box m="0" p="0" w="100%" h="100%">
      <video src={videoBg} autoPlay loop muted />
    </Box>
  );
}
