import styled from "styled-components";
import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { device } from "../utils/breakpoints";

const Container = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  margin: 16px 0;
  /* transition: all 0.5s ease; */
  /* max-height: 1000px;
  overflow-y: hidden; */
`;
const Column = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 16px;
  background-color: #fff;

  &:last-child {
    margin: 0;
  }
`;

const DesktopWrapper = styled(Container)`
  width: 100%;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
const TabletWrapper = styled(Container)`
  width: 100%;
  display: flex;
  @media screen and (max-width: 425px) {
    display: none;
  }
  @media screen and (min-width: 1025px) {
    display: none;
  }
`;

const MobileWrapper = styled(Container)`
  width: 100%;
  @media screen and (min-width: 426px) {
    display: none;
  }
`;

const Project = styled(motion.div)`
  flex: 0 0 100%;
  padding: 4px;

  @media ${device.tablet} {
    flex: 0 0 50%;
    padding: 8px;
  }

  @media ${device.laptopL} {
    flex: 0 0 33.33%;
  }
`;

const Projects = ({ homepage, filters }) => {
  const { projects, fetching, error } = useSelector((state) => state.projects);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    if (filters) {
      if (filters.author === "all") {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(
          projects.filter((p) => p.author === filters.author)
        );
      }
    } else if (homepage) {
      setFilteredProjects(projects.filter((p) => p.best));
    } else {
      setFilteredProjects(projects);
    }
  }, [projects, filters, homepage]);

  if (fetching) {
    return <div>fetching projects...</div>;
  }

  if (error) {
    return <div>error!!</div>;
  }

  return (
    <Container layout>
      <AnimatePresence>
        {filteredProjects.map((p, i) => (
          <Project
            key={p._id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            // animate={{ opacity: 1, scale: 1 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
            exit={{ opacity: 0, scale: 0.9 }}
            viewport={{ once: true }}
          >
            <ProjectCard p={p} />
          </Project>
        ))}
      </AnimatePresence>
    </Container>
  );

  return (
    <Container>
      <DesktopWrapper>
        <Column layout>
          {filteredProjects.map((p, i) => {
            if (i % 3 === 0) {
              return <ProjectCard key={p._id} p={p} />;
            } else return null;
          })}
        </Column>
        <Column layout>
          {filteredProjects.map((p, i) => {
            if (i % 3 === 1) {
              return <ProjectCard key={p._id} p={p} />;
            } else return null;
          })}
        </Column>
        <Column layout>
          {filteredProjects.map((p, i) => {
            if (i % 3 === 2) {
              return <ProjectCard key={p._id} p={p} />;
            } else return null;
          })}
        </Column>
      </DesktopWrapper>
      <TabletWrapper>
        <Column>
          {filteredProjects.map((p, i) => {
            if (i % 2 === 0) {
              return <ProjectCard key={p._id} p={p} />;
            } else return null;
          })}
        </Column>
        <Column>
          {filteredProjects.map((p, i) => {
            if (i % 2 === 1) {
              return <ProjectCard key={p._id} p={p} />;
            } else return null;
          })}
        </Column>
      </TabletWrapper>
      <MobileWrapper>
        <Column>
          {filteredProjects.map((p) => (
            <ProjectCard key={p._id} p={p} />
          ))}
        </Column>
      </MobileWrapper>
    </Container>
  );
};

export default Projects;
