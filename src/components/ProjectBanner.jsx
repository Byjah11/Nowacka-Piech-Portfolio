import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { device } from "../utils/breakpoints";

const ImageBanner = styled.div`
  height: calc(100vh - 94px);
  overflow: hidden;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 16px;
  display: none;
  @media ${device.tablet} {
    display: flex;
  }
  @media ${device.laptopL} {
    padding: 62px;
    box-shadow: inset 0px 0px 16px 31px #fff;
  }
`;

const Image = styled.img`
  position: absolute;
  z-index: -1;
  object-fit: cover;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid #fff;
  position: relative;
  display: flex;
  align-items: center;
`;

const BannerText = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: visible;
  white-space: nowrap;
  color: #fff;
`;

const BannerTitle = styled.div`
  font-size: 4rem;
  z-index: 1;
  padding: 8px 32px;
  display: inline;
  color: #000;
  background-color: #fff;
  @media ${device.laptopL} {
    font-size: 5rem;
  }
`;
const BannerSubtitle = styled.div`
  font-size: 32px;
  z-index: 1;
`;

export const ArrowTooltip = styled.div`
  position: absolute;
  right: ${(p) => !p.right && 0};
  left: ${(p) => p.right && 0};
  transform: translate(${(p) => (p.right ? "-150%, 0" : "150%, 0")});
  white-space: nowrap;
  background-color: #fff;
  color: #000 !important;
  padding: 8px;
  opacity: 0;
  pointer-events: none;
  user-select: none;
  transition: all 0.5s ease;
`;

export const Arrow = styled.div`
  position: absolute;
  right: ${(p) => p.right && 0};
  left: ${(p) => p.left && 0};
  color: #fff !important;
  padding: 16px 8px;
  transition: all 0.5s ease;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    color: #000 !important;
    background-color: #fff;
  }

  &:hover ${ArrowTooltip} {
    opacity: 1;
    transform: translate(${(p) => (p.right ? "-110%, 0" : "110%, 0")});
  }
`;

const DownArrow = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);
  color: #fff !important;
  padding: 16px;
  animation: bounce 2s ease infinite;

  @keyframes bounce {
    0% {
      opacity: 0;
      transform: translate(-50%, -15%);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;

      transform: translate(-50%, 15%);
    }
  }
`;

const ProjectBanner = ({ img, title, subtitle }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { projects } = useSelector((state) => state.projects);

  const handleChangeProject = (dir) => {
    const currentIndex = projects.findIndex((p) => p._id === id);
    switch (dir) {
      case "next":
        if (currentIndex < projects.length - 1) {
          navigate(`/projekt/${projects[currentIndex + 1]._id}`);
        } else {
          navigate(`/projekt/${projects[0]._id}`);
        }
        break;
      case "prev":
        if (currentIndex > 0) {
          navigate(`/projekt/${projects[currentIndex - 1]._id}`);
        } else {
          navigate(`/projekt/${projects[projects.length - 1]._id}`);
        }
        break;

      default:
        break;
    }
  };

  return (
    <ImageBanner>
      <Image src={img} alt="projectbanner" />
      <Container>
        <Arrow onClick={() => handleChangeProject("prev")}>
          <FontAwesomeIcon icon={faChevronLeft} size="5x" />
          <ArrowTooltip>Poprzedni Projekt</ArrowTooltip>
        </Arrow>
        <BannerText>
          <BannerTitle>{title}</BannerTitle>
          <BannerSubtitle>{subtitle}</BannerSubtitle>
        </BannerText>
        <DownArrow>
          <FontAwesomeIcon icon={faChevronDown} size="5x" />
        </DownArrow>
        <Arrow right onClick={() => handleChangeProject("next")}>
          <FontAwesomeIcon icon={faChevronRight} size="5x" />
          <ArrowTooltip right>Następny Projekt</ArrowTooltip>
        </Arrow>
      </Container>
    </ImageBanner>
  );
};

export default ProjectBanner;
