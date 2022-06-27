import styled from "styled-components";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ProjectBanner from "../components/ProjectBanner";
import ProjectGallery from "../components/ProjectGallery";
import { Divider, Section, SectionTitle } from "./Home";
import { urlFor } from "../sanityClient";
import { device } from "../utils/breakpoints";

const Container = styled.div`
  margin-top: 62px;
  margin-bottom: 16px;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 8px;
  @media ${device.tablet} {
    margin: 32px 16px;
  }
  @media ${device.laptopL} {
    margin: 32px 62px;
  }
`;
const Top = styled.div`
  display: flex;
  border: 1px solid #333;
`;
const Info = styled.div`
  flex: 1;
  margin: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-wrap: break-word;
`;
const Title = styled.div`
  display: flex;
  font-size: 2rem;
  margin-bottom: 16px;
  @media ${device.tablet} {
    font-size: 3rem;
  }
  @media ${device.laptopL} {
    font-size: 4rem;
  }
`;
const Desc = styled.div`
  display: flex;
`;

const Details = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 16px;
`;
const Detail = styled.li`
  margin-bottom: 4px;
  span {
    text-transform: capitalize;
    color: #666;
  }
`;

const TopImage = styled.div`
  flex: 1;
  display: none;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${device.laptop} {
    display: flex;
  }
`;

const ErrorContainer = styled.div`
  min-height: 100vh;
  margin: 62px;
`;

const ProjectPage = () => {
  const location = useLocation();
  const { projects, fetching, error } = useSelector((state) => state.projects);
  const id = location.pathname.split("/")[2];
  const p = projects.find((p) => p._id === id);

  if (fetching) {
    return <ErrorContainer>Fetching...</ErrorContainer>;
  }

  if (error) {
    return <ErrorContainer>error!!</ErrorContainer>;
  }

  if (!p) {
    return <ErrorContainer>{`no project with id: ${id}`}</ErrorContainer>;
  }

  return (
    <Container>
      <ProjectBanner
        img={urlFor(p.coverImg).url()}
        title={p.title}
        subtitle=""
      />
      <Main>
        <Top>
          <Info>
            <Title>{p.title}</Title>
            <Details>
              {Object.entries(p.details).map(([key, value]) => (
                <Detail key={key}>
                  <span>{key}</span>
                  {`: ${value} `}
                  {key === "powierzchnia" && (
                    <>
                      m<sup>2</sup>
                    </>
                  )}
                </Detail>
              ))}
            </Details>
            <Desc>{p.desc}</Desc>
          </Info>
          <TopImage>
            <img src={urlFor(p.coverImg).url()} alt="top" />
          </TopImage>
        </Top>
      </Main>
      <Divider />
      <Section id="galeria">
        <SectionTitle>Galeria</SectionTitle>
        <ProjectGallery imgs={p.imgs} />
      </Section>
    </Container>
  );
};

export default ProjectPage;
