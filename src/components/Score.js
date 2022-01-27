import React from "react";
import styled from "styled-components";
import { IoBarbell } from "react-icons/io5";
import { themeColor, hoverEffect } from "../utils";
import { totalScore } from "./MixedChart";

function Score() {
  return (
    <EarningsCard>
      <CardContent>
        <Chart>
          <IoBarbell />
        </Chart>
        <ScoreText>Total Score</ScoreText>
        <TotalScore>{totalScore.toFixed(2)}</TotalScore>
      </CardContent>
    </EarningsCard>
  );
}

const EarningsCard = styled.div`
  height: 100%;
  width: 30%;
  background-color: ${themeColor};
  padding: 1rem;
  border-radius: 1rem;
  color: white;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
  }
`;

const CardContent = styled.div`
  margin: 1rem;
`;

const Chart = styled.div`
  display: flex;
  justify-content: center;
  svg {
    height: 4rem;
    width: 4rem;
  }
`;

const ScoreText = styled.h3`
  text-align: center;
  font-weight: normal;
  padding: 0.4rem 0;
`;

const TotalScore = styled.h5`
  text-align: center;
  font-weight: normal;
  font-size: 3rem;
  width: 60%;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  border-radius: 2rem;
`;

export default Score;
