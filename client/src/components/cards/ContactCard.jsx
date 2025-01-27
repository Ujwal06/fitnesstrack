import React from "react";
import styled from "styled-components";
import { MailOutline, PhoneRounded, LinkedIn, GitHub } from "@mui/icons-material";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
`;

const Card = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 600px;
  padding: 32px 36px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 20px;
  box-shadow: 2px 12px 30px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 600px) {
    padding: 24px 28px;
  }
`;

const Header = styled.div`
  display: flex;
  gap: 24px; /* gap between image and name */
  align-items: center;
`;

const Image = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 25%;
  object-fit: cover;
`;

const Name = styled.div`
  font-size: 28px; 
  color: ${({ theme }) => theme.text_primary};
  font-weight: 700;
`;

const Title = styled.div`
  font-size: 18px; 
  color: #804040;
  font-weight: 600;
`;

const Details = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
  display: flex;
  gap: 16px; 
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  gap: 12px; 
  align-items: center;
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 12px;
`;

const Row = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const ContactCard = ({ contact }) => {
  return (
    <Container>
      <Card>
        <Header>
          <Image src={contact?.image} alt="profile" />
          <div>
            <Name>{contact?.name}</Name>
            <Title>{contact?.title}</Title>
          </div>
        </Header>
        <Details>
          <Box>
            <MailOutline sx={{ fontSize: "24px" }} /> {/* icon */}
            {contact?.email}
          </Box>
          <Box>
            <PhoneRounded sx={{ fontSize: "24px" }} /> {/* icon */}
            {contact?.phone}
          </Box>
        </Details>
        <Row>
          <Box>
            <LinkedIn sx={{ fontSize: "24px" }} /> {/* icon */}
            <a href={contact?.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </Box>
          <Box>
            <GitHub sx={{ fontSize: "24px" }} /> {/* icon */}
            <a href={contact?.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Box>
        </Row>
        <Box>
          <a href={contact?.portfolio} target="_blank" rel="noopener noreferrer">
            Portfolio
          </a>
        </Box>
      </Card>
    </Container>
  );
};

export default ContactCard;
