import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import image from "../../assets/images/people-1.png";

const Whatsapp = () => {

  return (
    <div className="whatsapp-container">
      <FloatingWhatsApp
        statusMessage="hello"
        accountName="Kongkon Jowarder"
        avatar={image}
        messageDelay={2}
        darkMode
        phoneNumber="01778934545"
        placeholder="message"
        chatMessage="hi"
        
      />
    </div>
  );
};

export default Whatsapp;
