import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Score from "./Score";

import ProjectRecommendation from "./ProjectRecommendation";

function MainContent() {
  return (
    <Container>
      <Navbar />
      <SubContainer className="container">
        <Score />
        <ProjectRecommendation className="container" />
      </SubContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  margin: 1rem 8rem 1rem 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;

const SubContainer = styled.div`
  margin: 0 auto;
  position: relative;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
  }
`;

export default MainContent;
