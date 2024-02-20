import {FaAddressBook, FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import { ContactInfo, DetailsWrapper, FormWrapper, StyledContactSection } from "../styles/sections/ContactSection.styled";

export const ContactSection = () =>{
    return (
        <>
        <StyledContactSection id="/contact-us">
            <SectionHeading>
                <h1>Contact Us!</h1>
                <p>contact us</p>
            </SectionHeading>
            <DetailsWrapper>
          <ContactInfo>
            <div>
            <p>
                Feel free to contact us or write to us and we shall get back as soon as
                possible.
            </p>
            </div>

            <div>
            <p>
                <FaPhone />    <span>
                    0114 592463
                    </span>
            </p>
            </div>

            <div>
            <p>
                <FaLocationArrow />    <span>
                    We are located at 25 Othaya road Kileleshwa/Lavington, Nairobi.
                    </span>
            </p>
            </div>

            <div>
            <p>
                <FaAddressBook />    <span>
                    We are located at 25 Othaya road Kileleshwa/Lavington, Nairobi.
                    </span>
            </p>
            </div>
            <div>
                <p>
                    <FaEnvelope />
                    <span>
                        <a href="mailto:oliviasnest1@gmail.com">oliviasnest1@gmail.com</a>
                    </span>
                </p>
            </div>
          </ContactInfo>
          <FormWrapper>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
            </div>
            <div style={{gridColumn: '1 / span 2'}}>
                <label htmlFor="message">Your message</label>
                <textarea id="message"></textarea>
                <textarea id="message" name="message"></textarea>
            </div>
            <button type="submit">send message</button>
          </FormWrapper>
            </DetailsWrapper>
        </StyledContactSection>
        <hr />
        </>
    );
};