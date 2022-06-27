import styled from "styled-components";
import GalleryCard from "./GalleryCard";
import { device } from "../utils/breakpoints";

const Container = styled.div`
  margin: 16px 0;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 100%;
  @media ${device.tablet} {
    max-width: 50%;
    margin-right: 16px;
    &:last-child {
      margin-right: 0;
    }
  }
  @media ${device.laptopL} {
    max-width: 33.33%;
  }
`;

const Mobile = styled.div`
  @media ${device.tablet} {
    display: none;
  }
`;

const Tablet = styled.div`
  display: none;
  @media ${device.tablet} {
    display: flex;
    flex-wrap: wrap;
  }
  @media ${device.laptopL} {
    display: none;
  }
`;

const Desktop = styled.div`
  display: none;
  @media ${device.laptopL} {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Columns = ({ num, imgs }) => {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(
      <Column key={i}>
        {imgs.map((_, index) => {
          if (index % num === i) {
            return (
              <GalleryCard
                key={index}
                imgs={imgs}
                index={index}
                delay={i / 10}
              />
            );
          } else return null;
        })}
      </Column>
    );
  }
  return <>{arr}</>;
};

const ProjectGallery = ({ imgs }) => {
  return (
    <Container>
      <Mobile>
        <Columns num={1} imgs={imgs} />
      </Mobile>
      <Tablet>
        <Columns num={2} imgs={imgs} />
      </Tablet>
      <Desktop>
        <Columns num={3} imgs={imgs} />
      </Desktop>
    </Container>
  );
};

export default ProjectGallery;
