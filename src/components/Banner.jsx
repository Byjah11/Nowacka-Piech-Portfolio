import styled from "styled-components";
import { device } from "../utils/breakpoints";

const ImageBanner = styled.div`
  height: calc(100vh - 32px);
  overflow: hidden;
  position: relative;
  background-image: url(${(p) => p.image});
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BannerText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: visible;
  white-space: nowrap;
`;

const Circle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  position: absolute;
  top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.laptopL} {
    position: absolute;
    top: 150px;
    right: 200px;
  }
`;

const BannerTitle = styled.div`
  font-size: 3rem;
  text-align: center;
  position: relative;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  @media ${device.mobileL} {
    font-size: 4rem;
  }
  @media ${device.tablet} {
    font-size: 86px;
  }
`;

const Name = styled.div`
  line-height: 3rem;
  @media ${device.mobileL} {
    line-height: 4rem;
  }
  @media ${device.tablet} {
    line-height: 86px;
  }
`;

const BannerSubtitle = styled.div`
  font-size: 32px;
  z-index: 1;
`;

const Banner = ({ img, title, subtitle }) => {
  return (
    <ImageBanner id="banner" image={img}>
      <Circle>
        <BannerText>
          <BannerTitle>
            <Name>Nowacka</Name>
            {/* <And style={{ color: "var(--color-primary)" }}>{"&"}</And> */}
            <Name>
              <span style={{ color: "var(--color-primary)" }}>{"&"}</span>Piech
            </Name>
          </BannerTitle>
          <BannerSubtitle>{subtitle}</BannerSubtitle>
        </BannerText>
      </Circle>
    </ImageBanner>
  );
};

export default Banner;
