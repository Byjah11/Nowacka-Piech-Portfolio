import styled from "styled-components";
import { device } from "../utils/breakpoints";

const Container = styled.div`
  display: flex;
  margin-bottom: 16px;
  flex-direction: column;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const Left = styled.div`
  flex: 1;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  @media ${device.tablet} {
    margin-bottom: 0;
    margin-right: 16px;
  }
  @media ${device.laptopL} {
    flex-direction: row;
    margin-right: 0;
  }
`;

const Name = styled.div`
  font-size: 1.5rem;
  text-align: center;
`;

const ImageContainer = styled.div`
  width: 60%;
  aspect-ratio: 1/1;
  margin: 0 16px;
  display: flex;
  justify-content: center;
  @media ${device.tablet} {
    width: 50%;
  }
  @media ${device.laptopL} {
    flex: 1;
    width: 100%;
  }
`;
const Image = styled.img`
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const Info = styled.div`
  @media ${device.laptopL} {
    flex: 2;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media ${device.laptopL} {
    flex-direction: row;
  }
`;

const Desc = styled.p`
  font-size: 1rem;
  text-align: center;
`;

const About = () => {
  return (
    <Container>
      <Left>
        <Info>
          <Name>Agnieszka Nowacka</Name>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
            natus vero iusto veniam veritatis voluptates accusantium,
            repellendus itaque, aliquid fugiat dolores voluptas deleniti
            cupiditate iure dignissimos blanditiis impedit ipsam consequuntur
            consequatur sint!
          </Desc>
        </Info>
        <ImageContainer>
          <Image src="/assets/imgs/aga.jpg" />
        </ImageContainer>
      </Left>
      <Right>
        <ImageContainer>
          <Image src="/assets/imgs/martyna.jpg" />
        </ImageContainer>
        <Info>
          <Name>Martyna Piech</Name>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
            natus vero iusto veniam veritatis voluptates accusantium,
            repellendus itaque, aliquid fugiat dolores voluptas deleniti
            cupiditate iure dignissimos blanditiis impedit ipsam consequuntur
            consequatur sint!
          </Desc>
        </Info>
      </Right>
    </Container>
  );
};

export default About;
