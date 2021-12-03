import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import ScreenShotsModal from "../Modal/ScreenShotsModal";


function ProjectSection({
  id,
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
  icon,
  images, 
  link,
  arrow
}) {
  return (
    <Wrap bgImage={backgroundImg} className="projectItem" id={id}>
      <TextContainer>
        <Fade bottom>
          <ItemText>
            {icon && <IconImg src={icon} />}
            <h1>{title}</h1>
            <p>{description}</p>
          </ItemText>
        </Fade>
      </TextContainer>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton >
              <a href={link} rel="noopener noreferrer" target="_blank">{leftBtnText}</a>
              </LeftButton>
            <ScreenShotsModal images={images}>
              {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
            </ScreenShotsModal>
          </ButtonGroup>
        </Fade>
        {arrow && <DownArrow src="images/white-arrow-down.png" />}
      </Buttons>
    </Wrap>
  );
}

export default ProjectSection;

const Wrap = styled.div`
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-image: url("/images/bg-sky.png");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("images/backgrounds/${props.bgImage}")`};
`;

const TextContainer = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20vh;
  border-radius: 50px;
`;

const IconImg = styled.img`
  height: 50px;
  margin-bottom: 10px;

  @media (max-width: 580px) {
    height: 30px;
  }
`;

const ItemText = styled.div`
  width: 30vw;
  text-align: center;

  h1 {
    padding-bottom: 1vh;
    font-size: 30px;

    @media (max-width: 580px) {
      font-size: 20px;
    }
  }

  p {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    width: 50vw;
  }

  @media (max-width: 580px) {
    width: 90vw;
  }

`;

const Buttons = styled.div``;

const ButtonGroup = styled.div`
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
  a {
    color: white;
  }
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
