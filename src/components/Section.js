import React from "react";
import styled from "styled-components";
import AboutModal from "../Modal/AboutModal";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import GitHubIcon from "@mui/icons-material/GitHub";

function Section({ id }) {
  return (
    <Wrap className="projectItem" id={id}>
      <ItemText>
        <h1> OLOF HAMMAR</h1>
        <h3>STUDERANDE APPLIKATIONSUTVECKLARE</h3>
        <InfoContainer>
          <EmailIcon />
          <h4>olof.hammar@iths.se</h4>
          <PhoneIphoneIcon />
          <h4>0734347058</h4>
          <GitHubIcon />
          <h4>olofHammar</h4>
        </InfoContainer>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <AboutModal>
            <LeftButton>Om mig</LeftButton>
          </AboutModal>
        </ButtonGroup>
        <DownArrow src="/images/white-arrow-down.png" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-image: url("/images/backgrounds/bg-home.png");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 38vh;
  text-align: center;

  h1 {
    padding-bottom: 2.5vh;
  }

  h3 {
    padding-bottom: 2.5vh;
  }
`;

const Buttons = styled.div``;

const ButtonGroup = styled.div`
  z-index: 10;
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;

  h4 {
    padding-left: 1vh;
    padding-right: 4vh;
  }

  @media (max-width: 580px) {
    display: none;
  }
`;
