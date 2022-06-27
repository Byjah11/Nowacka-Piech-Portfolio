import styled from "styled-components";
import { urlFor } from "../sanityClient";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Overlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0);
  transition: all 0.3s ease;
`;
const Title = styled.h2`
  pointer-events: none;
  opacity: 0;
  transition: all 0.5s ease;
  font-size: 26px;
  color: #fff;
`;

const Image = styled.img`
  width: 100%;
  transform: scale(1);
  transition: all 1s ease;
  vertical-align: top;
`;
const ImageContainer = styled.div`
  width: 100%;
`;

const Container = styled(motion.div)`
  color: inherit;
  text-decoration: none;
  width: 100%;
  position: relative;
  cursor: pointer;
  /* margin-bottom: 16px; */
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 5px 5px 20px -5px rgba(66, 68, 90, 1);
    transform: scale(1.02);
  }
  &:hover ${Overlay} {
    background-color: rgba(0, 0, 0, 0.6);
  }
  &:hover ${Image} {
    /* transform: scale(1.1); */
  }
  &:hover ${Overlay} ${Title} {
    opacity: 1;
  }
`;

const ProjectCard = ({ p }) => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(`/projekt/${p._id}`)}>
      <ImageContainer>
        <Image src={urlFor(p.coverImg).url()} />
      </ImageContainer>
      <Overlay>
        <Title>{p.title}</Title>
      </Overlay>
    </Container>
  );
};

export default ProjectCard;
