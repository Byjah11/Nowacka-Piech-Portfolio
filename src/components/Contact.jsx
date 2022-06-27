import styled from "styled-components";
import { Section, SectionTitle, Divider } from "../pages/Home";
import { device } from "../utils/breakpoints";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

const Container = styled.div`
  margin: 16px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media ${device.laptop} {
    flex-direction: row;
  }
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  @media ${device.tablet} {
    flex-direction: row;
  }
  @media ${device.laptop} {
    flex-direction: column;
  }
`;

const Right = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Contact = () => {
  return (
    <>
      <Divider />
      <Section id="contact">
        <SectionTitle>Kontakt</SectionTitle>
        <Container>
          <Left>
            <ContactList
              name="Agnieszka Nowacka"
              email="email@gmail.com"
              phone="123 456 789"
              city="Łódź"
            />
            <ContactList
              name="Martyna Piech"
              email="email@gmail.com"
              phone="123 456 789"
              city="Łódź"
            />
          </Left>
          <Right>
            <ContactForm />
          </Right>
        </Container>
      </Section>
    </>
  );
};

export default Contact;
