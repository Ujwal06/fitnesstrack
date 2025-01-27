import React from 'react';
import photo from '../utils/Images/contact-photo.jpg';
import ContactCard from '../components/cards/ContactCard';

const Contact = () => {
  return (
    <ContactCard
      contact={{
        image: photo, 
        name: "Ujwal Kumar R",
        title: "Full-Stack Developer",
        email: "ujwallll16@gmail.com",
        phone: "+91 8951272972",
        linkedin: "https://www.linkedin.com/in/ujwal-kumar-r-b2a827287/",
        github: "https://github.com/Ujwal06?tab=repositories",
        portfolio: "https://ujwalportfoli0.netlify.app",
      }}
    />
  );
}

export default Contact;
