import styled from "styled-components";
import Projects from "../components/Projects";
import { useState } from "react";
import { device } from "../utils/breakpoints";

const Container = styled.div`
  padding-top: 62px;
  margin: 16px 8px;
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    margin: 16px 16px;
  }

  @media ${device.laptopL} {
    margin: 16px 62px;
  }
`;

const ProjectsContainer = styled.div`
  min-height: 100vh;
`;

const Divider = styled.div`
  height: 1px;
  background-color: var(--color-primary);
`;

const Title = styled.h1`
  text-align: center;
  @media ${device.tablet} {
    text-align: left;
  }
`;
const Filters = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media ${device.tablet} {
    gap: 16px;
  }
`;
const FiltersTitle = styled.div`
  margin-right: 8px;
  padding: 8px 0;
  display: none;
  @media ${device.tablet} {
    display: block;
  }
`;

const Filter = styled.div`
  padding: 8px 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    cursor: pointer;
  }
  label {
    cursor: pointer;
    text-align: center;
  }
  @media ${device.tablet} {
    display: block;
    flex: none;
    input {
      margin-right: 8px;
    }
  }
`;

const AllProjects = () => {
  const [filters, setFilters] = useState({ author: "all" });

  const getTitle = (filter) => {
    switch (filter.author) {
      case "all":
        return "Wszystkie Projekty";
      case "aga":
        return "Projekty Agnieszki";
      case "martyna":
        return "Projekty Martyny";
      case "wspolne":
        return "Wspólne Projekty";
      default:
        break;
    }
  };

  const handleChangeFilter = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Title>{getTitle(filters)}</Title>
      <Filters>
        <Filter>
          <input
            type="radio"
            id="all"
            name="author"
            value="all"
            defaultChecked
            onChange={handleChangeFilter}
          />
          <label htmlFor="all">Wszystkie</label>
        </Filter>
        <FiltersTitle>Autor:</FiltersTitle>
        <Filter>
          <input
            type="radio"
            id="wspolne"
            name="author"
            value="wspolne"
            onChange={handleChangeFilter}
          />
          <label htmlFor="wspolne">Wspólne</label>
        </Filter>
        <Filter>
          <input
            type="radio"
            id="aga"
            name="author"
            value="aga"
            onChange={handleChangeFilter}
          />
          <label htmlFor="aga">Agnieszka Nowacka</label>
        </Filter>
        <Filter>
          <input
            type="radio"
            id="martyna"
            name="author"
            value="martyna"
            onChange={handleChangeFilter}
          />
          <label htmlFor="martyna">Martyna Piech</label>
        </Filter>
      </Filters>
      <Divider />
      <ProjectsContainer>
        <Projects filters={filters} />
      </ProjectsContainer>
    </Container>
  );
};

export default AllProjects;
