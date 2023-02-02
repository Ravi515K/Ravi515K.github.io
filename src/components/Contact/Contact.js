import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { Box1, ContactWrapper, Email, Outer } from "./ContactElements";
// import { ContactForm } from "./ContactForm";
import { HiLocationMarker } from "react-icons/hi";
import { HiMail } from "react-icons/hi";
import { FaMobileAlt } from "react-icons/fa";

function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <div className="BigCard">
          {/* <Email>
            
            <span>pratikm470@gmail.com</span>
            <a
              className="btn PrimaryBtn"
              href="mailto:pratikm470@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Mail
            </a>
          </Email> */}

          <Outer>
            <Box1>
              <HiMail />
              <p>koliravi95@gmail.com</p>
            </Box1>
            <Box1>
              <FaMobileAlt />
              <p>+91 9665428785</p>
            </Box1>
            <Box1>
              <HiLocationMarker />
              <p>Ambarnath, Maharashtra</p>
            </Box1>
          </Outer>
        </div>
        <SocialIcon />
      </div>


    </ContactWrapper>
  );
}

export default Contact;
