import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { device } from "../utils/breakpoints";

const Container = styled.div`
  position: fixed;
  top: 0;
  transition: all 0.5s ease;
  background-color: ${(p) => (p.scroll > 5 ? "#fff" : "transparent")};
  width: 100%;
  z-index: 90;
  height: 62px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  @media ${device.tablet} {
    padding: 0 16px;
  }
  @media ${device.laptopL} {
    padding: 0 62px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: 600;

  cursor: pointer;
  display: flex;
  align-items: center;

  div {
    max-width: 0;
    overflow: hidden;
    display: inline-block;
    transition: all 1.5s ease;
    position: relative;
  }

  @media ${device.tablet} {
    div::after {
      content: "";
      box-shadow: inset -100px 0px 50px -33px rgba(255, 255, 255, 1);
      position: absolute;
      transition: all 1.5s ease;
      top: 0;
      bottom: 0;
      left: -15px;
      right: -15px;
    }

    &:hover div {
      max-width: 200px;
    }

    &:hover div::after {
      box-shadow: inset 0 0px 50px -33px rgba(255, 255, 255, 1);
    }
  }
`;

const NavLinks = styled.ul`
  padding: 0;
  display: flex;
  list-style: none;
  margin-left: 16px;
`;

const NavLink = styled.li`
  margin-left: 16px;

  cursor: pointer;
  position: relative;
  font-size: large;
  &::after {
    content: "";
    height: 2px;
    width: 100%;
    position: absolute;
    bottom: -2px;
    left: 0;
    background-color: var(--color-primary);
    transform: scaleX(0);
    transition: all 250ms ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const Navbar = () => {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => setScrollPosition(window.scrollY));
    return () =>
      window.removeEventListener("scroll", () =>
        setScrollPosition(window.scrollY)
      );
  }, []);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -64;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <Container scroll={scrollPosition}>
      <Wrapper>
        <Logo scroll={scrollPosition} onClick={() => scrollTo("banner")}>
          N<div>owacka</div>
          <span style={{ color: "var(--color-primary)" }}>&</span>P
          <div>iech</div>
        </Logo>
        <NavLinks>
          <NavLink onClick={() => navigate("/projekty")}>Projekty</NavLink>
          <NavLink onClick={() => scrollTo("about")}>O nas</NavLink>
          <NavLink onClick={() => scrollTo("contact")}>Kontakt</NavLink>
        </NavLinks>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
