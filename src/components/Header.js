import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { selectProject } from "../features/project/projectSlice";
import { useSelector } from "react-redux";

function Header() {
  const [cvStatus, setCvStatus] = useState(false);
  const projects = useSelector(selectProject);

  return (
    <Container id="nav-bar">
      <a>
        <HeaderLogo>
          <a
            onClick={() => {
              const anchor = document.getElementById("profile");
              anchor.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            Olof Hammar
          </a>
        </HeaderLogo>
      </a>
      <Menu>
        <a
          onClick={() => {
            const anchor = document.getElementById("pizza-bird");
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
        >
          Pizza Bird
        </a>
        <a
          onClick={() => {
            const anchor = document.getElementById("onboarder");
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
        >
          Onboarding Manager
        </a>
        <a
          onClick={() => {
            const anchor = document.getElementById("chef-notes");
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
        >
          Chef Notes
        </a>
        <a
          onClick={() => {
            const anchor = document.getElementById("movie-store");
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
        >
          Movie Store
        </a>
      </Menu>
      <RightMenu>
        <CvButton onClick={() => setCvStatus(true)}>Cv</CvButton>
      </RightMenu>
      <BurgerNav show={cvStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setCvStatus(false)} />
        </CloseWrapper>
        <h2>Utbildning</h2>
        <li>
          <h3>Applikationsutvecklare</h3>
          <h4>IT-Högskolan | 2020-2022</h4>
        </li>
        <li>
          <h3>Programmering 2</h3>
          <h4>NTI-Skolan | 2020</h4>
        </li>
        <li>
          <h3>Programmering 1</h3>
          <h4>Åsövuxengymnasium | 2020</h4>
        </li>
        <li>
          <h3>Gymnasie inriktning musik</h3>
          <h4>Fryshusets Gymnasium | 2000-2003</h4>
        </li>

        <h2>Arbetslivserfarenhet</h2>
        <li>
          <h3>Food and beverage manager</h3>
          <h4>FNB Concepts | 2019</h4>
        </li>
        <li>
          <h3>Assisterande Restaurangchef</h3>
          <h4>Brasserie Godot | 2015-2018</h4>
        </li>
        <li>
          <h3>Servitör</h3>
          <h4>39 Wäst | 2014-2015</h4>
        </li>
        <li>
          <h3>Servitör</h3>
          <h4>Grupp F12 | 2005-2014</h4>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  @media (max-width: 600px) {
    margin-right: 0vw;
    font-size: 12px;
  }
`;

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-left: 10px;
    cursor: pointer;
    padding: 10px;
    flex-wrap: no-wrap;
    :hover {
      background-color: rgba(220, 220, 220, 0.4);
      border-radius: 10px;
    }
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 11vw;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 10px;
    flex-wrap: no-wrap;
    cursor: pointer;
    :hover {
      background-color: rgba(220, 220, 220, 0.4);
      border-radius: 10px;
    }
  }
  @media (max-width: 768px) {
    margin-right: 0vw;
  }

  @media (max-width: 500px) {
    margin-right: 0vw;
    visibility: hidden;
    width: 0%;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: no-wrap;
  }
`;

const CvButton = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  padding: 10px;
  :hover {
    background-color: rgba(220, 220, 220, 0.4);
    border-radius: 10px;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 400px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;

  h2 {
    font-weight: 600;
    text-transform: uppercase;
    padding-top: 20px;
  }

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    h3 {
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 600;
    }

    h4 {
      font-size: 12px;
      font-weight: 400;
      padding-top: 4px;
    }
  }

  @media (max-width: 500px) {
    margin-right: 0vw;
    width: 90%;
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
