import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Backdrop } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import styled from "styled-components";
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

export default function ScreenShotsModal({ children, images }) {
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
          <div className={classes.paper} className="screenShotsBodyContainer">
            <ButtonCloseContainer>
              <CustomClose onClick={handleClose}>X</CustomClose>
            </ButtonCloseContainer>
            <GalleryContainer>
              <ImageContainer>
                <LargeImage src={images[selectedImage]} />
              </ImageContainer>

              <ThumbnailContainer>
                {images.map((image, i) => (
                  <Thumbnail
                    key={i}
                    src={image}
                    onClick={() => setSelectedImage(i)}
                  />
                ))}
              </ThumbnailContainer>
            </GalleryContainer>
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
  top: 20;
  right: 20;
  margin-top: 10px;
  background-color: rgba(0, 0, 0, 0);
  width: 30px;
  height: 30px;
  font-size: 20px;
  font-weight: 600;
  border: none;
`;

const GalleryContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 90%;
  height: 90%;
  justify-content: center;
  align-items: center;
`;

const LargeImage = styled.img`
  height: 100%;
  border: 2px solid white;
  background-size: contain;
  box-shadow: 5px 5px 10px #888888;
  border-radius: 10px;
`;

const ThumbnailContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20%;
  grid-template-rows: repeat(2, 100px);
  row-gap: 0px;
  width: 100%;
  height: 35%;
  justify-content: center;
  align-items: center;
`;

const Thumbnail = styled.img`
  display: flex;
  height: 80px;
  display: flex;
  border: 1px solid black;
  cursor: pointer;
`;
