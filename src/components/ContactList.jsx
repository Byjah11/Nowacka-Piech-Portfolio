import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 16px;
  margin-bottom: 8px;
`;
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;
const ContactName = styled(ContactItem)`
  font-size: 1.5rem;
  color: #666;
  justify-content: center;
`;
const ContactInfo = styled.div`
  margin-left: 8px;
  font-size: 1.8rem;
`;

const ContactList = ({ name, email, phone, city }) => {
  return (
    <Container>
      <ContactName>{name}</ContactName>

      <ContactItem>
        <FontAwesomeIcon
          icon={faEnvelope}
          size="1x"
          fixedWidth
          style={{ color: "var(--color-primary)" }}
        />
        <ContactInfo>{email}</ContactInfo>
      </ContactItem>
      <ContactItem>
        <FontAwesomeIcon
          icon={faPhone}
          size="1x"
          fixedWidth
          style={{ color: "var(--color-primary)" }}
        />
        <ContactInfo>{phone}</ContactInfo>
      </ContactItem>
      <ContactItem>
        <FontAwesomeIcon
          icon={faLocationDot}
          size="1x"
          fixedWidth
          style={{ color: "var(--color-primary)" }}
        />
        <ContactInfo>{city}</ContactInfo>
      </ContactItem>
    </Container>
  );
};

export default ContactList;
