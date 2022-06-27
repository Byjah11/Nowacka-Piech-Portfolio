import styled from "styled-components";
import { urlFor } from "../sanityClient";
import { useState } from "react";
import Lightbox from "./Lightbox";
import { AnimatePresence, motion } from "framer-motion";
import { device } from "../utils/breakpoints";

const Image = styled.img`
  width: 100%;
  vertical-align: top;
`;
const ImageContainer = styled.div`
  width: 100%;
`;

const Container = styled(motion.div)`
  width: 100%;
  position: relative;
  margin-bottom: 16px;
  /* border: 1px solid #111; */
  overflow: hidden;
  user-select: none;
  @media ${device.tablet} {
    cursor: zoom-in;
  }
`;

const GalleryCard = ({ imgs, index, delay }) => {
  const [showLightbox, setShowLightbox] = useState(false);

  return (
    <>
      <Container
        onClick={() => setShowLightbox(true)}
        whileHover={{ scale: 0.98 }}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.5, ease: "easeInOut", delay },
        }}
        viewport={{ once: true }}
      >
        <ImageContainer>
          <Image src={urlFor(imgs[index]).url()} />
        </ImageContainer>
      </Container>
      <AnimatePresence>
        {showLightbox && (
          <Lightbox setShow={setShowLightbox} imgs={imgs} index={index} />
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryCard;
