import React, { useState } from "react";
import styled from "styled-components";
import { urlFor } from "../sanityClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Arrow, ArrowTooltip } from "./ProjectBanner";
import { motion } from "framer-motion";
import { device } from "../utils/breakpoints";

const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
  align-items: center;
  justify-content: center;
  /* animation: fade 0.5s ease; */
  user-select: none;
  /* 
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  } */
  display: none;
  @media ${device.tablet} {
    display: flex;
  }
`;

const Image = styled.img`
  width: 100%;
  vertical-align: top;
`;

const Wrapper = styled(motion.div)`
  position: relative;
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: center;
  /* animation: zoom 0.5s ease; */
  border: 4px solid white;
  z-index: 101;
  /* overflow: hidden; */

  /* @keyframes zoom {
    from {
      transform: scale(0.1);
    }
    to {
      transform: scale(1);
    }
  } */
`;

const Blur = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: zoom-out;
`;

const CurrentImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 8px;
  color: #fff;
`;

const Button = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 46px;
  color: white;
  padding: 8px;
  display: flex;
  align-items: center;
  overflow: hidden;
  transition: all 250ms ease;

  cursor: pointer;
  &:hover {
    color: #000;
    background-color: #fff;
  }
`;

const Lightbox = ({ setShow, imgs, index }) => {
  const [currentIndex, setCurrentIndex] = useState(index);
  const lastIndex = imgs.length - 1;

  const changeImg = (dir) => {
    switch (dir) {
      case "next":
        if (currentIndex < lastIndex) {
          setCurrentIndex(currentIndex + 1);
        } else {
          setCurrentIndex(0);
        }
        break;
      case "prev":
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        } else {
          setCurrentIndex(lastIndex);
        }
        break;

      default:
        break;
    }
  };

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Blur onClick={() => setShow(false)} />
      <Wrapper
        initial={{ scale: 0.1 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        <CurrentImg>{`${currentIndex + 1} / ${lastIndex + 1}`}</CurrentImg>

        <Button onClick={() => setShow(false)}>
          <FontAwesomeIcon icon={faXmark} size="3x" />
        </Button>
        <Arrow left onClick={() => changeImg("prev")}>
          <FontAwesomeIcon icon={faChevronLeft} size="5x" />
          <ArrowTooltip>Poprzednie Zdjęcie</ArrowTooltip>
        </Arrow>
        <Image src={urlFor(imgs[currentIndex]).url()} />
        <Arrow right onClick={() => changeImg("next")}>
          <FontAwesomeIcon icon={faChevronRight} size="5x" />
          <ArrowTooltip right>Następne Zdjęcie</ArrowTooltip>
        </Arrow>
      </Wrapper>
    </Container>
  );
};

export default Lightbox;
