import styled from "styled-components";
import { device } from "../utils/breakpoints";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 62px;
  background-color: whitesmoke;
  @media ${device.mobileL} {
    flex-direction: row;
  }
`;

const CopyRight = styled.div`
  color: #888;

  @media ${device.mobileL} {
    margin-right: 16px;
  }

  a {
    color: inherit;
  }
`;

const Footer = () => {
  return (
    <Container>
      <CopyRight>{"Nowacka&Piech"} &copy; 2022</CopyRight>
      <CopyRight>
        Site by{" "}
        <a
          href="https://barteknowacki.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          b.n
        </a>
      </CopyRight>
    </Container>
  );
};

export default Footer;
