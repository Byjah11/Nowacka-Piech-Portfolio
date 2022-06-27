import styled from "styled-components";
import Banner from "../components/Banner";
import Projects from "../components/Projects";
import About from "../components/About";
import { device } from "../utils/breakpoints";

const Container = styled.div`
  background-color: #fff;
  margin-bottom: 16px;
  overflow: hidden;
`;

export const Divider = styled.div`
  margin: 0 8px;
  height: 1px;
  background-color: var(--color-primary);
  @media ${device.tablet} {
    margin: 0 16px;
  }
  @media ${device.laptopL} {
    margin: 0 62px;
  }
`;

export const Section = styled.div`
  margin: 0 8px;
  @media ${device.tablet} {
    margin: 0 16px;
  }
  @media ${device.laptopL} {
    margin: 0 62px;
  }
`;
export const SectionTitle = styled.div`
  text-transform: uppercase;
  font-size: large;
`;

const Home = () => {
  return (
    <Container>
      <Banner
        img="https://cutewallpaper.org/21/architect-wallpaper/Architecture-Drawing-Wallpaper-at-PaintingValley.com-.jpg"
        title="Nowacka&Piech"
        subtitle="Architektura"
      />
      <Divider />
      <Section id="projects">
        <SectionTitle>Wyróżnione Projekty</SectionTitle>
        <Projects homepage />
      </Section>
      <Divider />
      <Section id="about">
        <SectionTitle>O nas</SectionTitle>
        <About />
      </Section>
    </Container>
  );
};

export default Home;
