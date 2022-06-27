import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import client from "../sanityClient";

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.div`
  position: absolute;
  pointer-events: none;
  font-size: 1.2rem;
  top: 8px;
  left: 8px;
  transition: all 250ms ease;
`;

const InputContainer = styled(motion.div)`
  position: relative;
  margin-bottom: 24px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid #333;
  padding: 8px;
  font-size: 1.2rem;
  background-color: #e2eeff;

  &:focus {
    outline: none;
  }
  &:focus ~ ${InputLabel} {
    top: -20px;
    font-size: 14px;
    left: 0;
  }
  ~ ${InputLabel} {
    ${(p) => p.value && "top: -20px;font-size: 14px;left: 0;"};
  }
`;
const TextField = styled.textarea`
  min-height: 200px;
  min-width: 100%;
  padding: 8px;
  font-size: 1.2rem;
  border: none;
  border-bottom: 2px solid #333;
  background-color: #e2eeff;

  resize: vertical;
  &:focus {
    outline: none;
  }
  &:focus ~ ${InputLabel}, &:valid ~ ${InputLabel} {
    top: -20px;
    font-size: 14px;
    left: 0;
  }
`;
const Button = styled.button`
  background-color: transparent;
  padding: 8px;
  width: 100%;
  font-size: 26px;
  cursor: pointer;
  transition: all 250ms ease;
  &:hover {
    background-color: #333;
    color: #fff;
  }
  &:disabled {
    cursor: auto;
    background-color: #333;
    color: #fff;
  }
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error) {
      setError(false);
    } else {
      const mail = {
        _type: "mail",
        email: formData.email,
        subject: formData.subject,
        msg: formData.msg,
      };
      setSending(true);
      client
        .create(mail)
        .then(() => {
          setSent(true);
          setSending(false);
          setFormData({});
          setTimeout(() => {
            setSent(false);
          }, 5000);
        })
        .catch(() => {
          setError(true);
          setSending(false);
        });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputContainer initial={{ y: 100 }} whileInView={{ y: 0 }}>
        <Input
          name="email"
          value={formData.email || ""}
          onChange={handleChange}
          type="email"
          required="required"
        />
        <InputLabel>Twój e-mail</InputLabel>
      </InputContainer>
      <InputContainer initial={{ y: 100 }} whileInView={{ y: 0 }}>
        <Input
          name="subject"
          value={formData.subject || ""}
          onChange={handleChange}
          type="text"
          required="required"
        />
        <InputLabel>Temat</InputLabel>
      </InputContainer>
      <InputContainer initial={{ y: 100 }} whileInView={{ y: 0 }}>
        <TextField
          name="msg"
          value={formData.msg || ""}
          onChange={handleChange}
          type="text"
          required="required"
        />
        <InputLabel>Twoja wiadomość...</InputLabel>
      </InputContainer>
      <InputContainer initial={{ y: 100 }} whileInView={{ y: 0 }}>
        <Button type="submit" disabled={sending || sent}>
          {sending
            ? "Wysyłanie..."
            : sent
            ? "Dziękujemy za Wiadomość!"
            : error
            ? "Coś poszło nie tak..."
            : "Wyślij"}
        </Button>
      </InputContainer>
    </Form>
  );
};

export default ContactForm;
