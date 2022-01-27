import React from "react";
import styled from "styled-components";

import { cardShadow, hoverEffect } from "../utils";
import MixedChart from "./MixedChart";

function ProjectRecommendation() {
  return (
    <RecommendProject>
      <MixedChart />
    </RecommendProject>
  );
}

const RecommendProject = styled.div`
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  resize: both;
  height: 32rem;
  padding: 1rem;
  background-color: white;
  width: 100%;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 80%;
    margin: 2rem 0;
  }
`;

export default ProjectRecommendation;
