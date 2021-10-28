import React from "react";
import Content from "../../Content.js";
import { homeContent } from "./Data";

function Home() {
  return (
    <>
      <Content {...homeContent} />
    </>
  );
}

export default Home;
