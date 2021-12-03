import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Backdrop } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import styled from "styled-components";
import profileDescription from "../descriptions";
import aboutDescription from "../aboutDescription";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    padding: 0,
  },
  paper: {},
}));

export default function ScreenShotsModal({ children }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(0);
  const [trailerUrl, setTrailerUrl] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        className="row"
        style={{ cursor: "pointer" }}
        color="inherit"
        onClick={handleOpen}
      >
        {children}
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Slide in={open} transition={Slide} direction="up" timeout={500}>
          <div className={classes.paper} className="aboutBodyContainer">
            <ButtonCloseContainer>
              <CustomClose onClick={handleClose}>X</CustomClose>
            </ButtonCloseContainer>
            <AboutContainer>
              <h2>Hur kom jag hit?</h2>
              <h4>{profileDescription}</h4>
              <h2>Vem är jag som person?</h2>
              <h4>{aboutDescription}</h4>
            </AboutContainer>
          </div>
        </Slide>
      </Modal>
    </>
  );
}

const ButtonCloseContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  padding-top: 35px;
  padding-right: 10px;
  justify-content: flex-end;
  align-items: bottom;
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
  position: fixed;
  top: 2%;
  right: 21%;
  margin-top: 35px;
  background-color: rgba(0, 0, 0, 0);
  width: 30px;
  height: 30px;
  font-size: 20px;
  font-weight: 600;
  border: none;

  @media (max-width: 580px) {
    right: 10%;
  }
`;

const AboutContainer = styled.div`
  dispay: flex;
  width: 100%;
  height: 100%;
  justify-content: center: 
  align-items: center;
  margin-top: 40px;
  margin-bottom: 30px;
  padding: 40px;
  h2 {
    font-weight: 600;
    text-transform: uppercase;
    padding-top: 20px;
  }
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

  @media (max-width: 750px) {
    padding: 10px;
    margin-top: 10px;

    h2 {
      font-size: 12px;
    }
  }
`;
