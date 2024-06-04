import React, { useState } from 'react';
import { FaPhone} from "react-icons/fa";
import {FaAddressBook, FaLocationCrosshairs} from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { HomeContainer} from "../styles/common/HomeConatiner";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import {Button, Form, Input, Label, StyledContactSectionMain,StyledSemiContactSectionMain, Textarea } from "../styles/sections/ContactSection.styled";
import { Card, CardContainer,SomeDataSection } from "../styles/sections/HomeSection.styled";
import {CardForm,Title,Paragraph,CheckBoxWrapper,CheckBoxLabel,CheckBox,Select} from "../styles/sections/ContactForm.styled"
import { Link } from "react-router-dom";
export const ContactSection = () =>{
    const [selectedService, setSelectedService] = useState('');

    const handleServiceSelection = (service) => {
      setSelectedService(service);
    };
    return (
        <>
        <StyledContactSectionMain>
            <StyledSemiContactSectionMain> 
            <SectionHeading>
                <h1 style={{marginTop:'8rem'}}>Let's get in touch</h1>
                <p><Link to="/ContactUs"><Link to="/">Home</Link> / Contact Us</Link></p>
            </SectionHeading>

       <CardForm>
                <Card  style={{flexDirection:'column',justifyContent:'center'}}>
                <Title>What would you like to hear more about?</Title>
                <Paragraph>What services are interested in?</Paragraph>
                <CheckBoxWrapper>
                <CheckBoxLabel>
          <CheckBox
            type="radio"
            name="service"
            value="DayCare"
            checked={selectedService === 'DayCare'}
            onChange={() => handleServiceSelection('DayCare')}
          />
          DayCare
        </CheckBoxLabel>
        <CheckBoxLabel>
          <CheckBox
            type="radio"
            name="service"
            value="Playgroup"
            checked={selectedService === 'Playgroup'}
            onChange={() => handleServiceSelection('Playgroup')}
          />
          Playgroup
        </CheckBoxLabel>
        <CheckBoxLabel>
          <CheckBox
            type="radio"
            name="service"
            value="Preschool / Kindergarten"
            checked={selectedService === 'Preschool / Kindergarten'}
            onChange={() => handleServiceSelection('Preschool / Kindergarten')}
          />
          Preschool / Kindergarten
        </CheckBoxLabel>
                </CheckBoxWrapper>
                <Paragraph>How old is your child?*</Paragraph>
                <Select>
                    <option>Under 1yr</option>
                    <option>1-2yrs</option>
                    <option>2-3yrs</option>
                    <option>3-4yrs</option>
                    <option>4-5yrs</option>
                    <option>5-6yrs</option>
                </Select>
                </Card>

                <Card style={{marginLeft:'-5rem'}}>
                <Form>
                        <Label htmlFor="email">Email:</Label>
                        <Input type="email" id="email" name="email" />
                        <Label htmlFor="message">Your Message:</Label>
                        <Textarea id="message" name="message"  rows="4" placeholder="Write to Olivia's Nest..."/>
                        <Button type="submit">Send Message</Button>
                    </Form>
                </Card>
    </CardForm>
            </StyledSemiContactSectionMain>
        </StyledContactSectionMain>
        <HomeContainer style={{marginTop:'10rem'}}>
            <SomeDataSection>
                <CardContainer>
                    <Card>
                        <SectionHeading>
                            <h1>Contact Info</h1>
                            <p>Go ahead and contact us or write a message to us and we'll get back to you</p>
                        </SectionHeading>
                        <div style={{display: 'flex', alignItems:'center',fontFamily:'Poppins'}}>
                        <FaPhone style={{color:'orange',transform:'scaleX(-1)',fontSize:'32',marginRight:'15px'}}/>
                        <p style={{marginLeft:'10px',fontSize:'32px'}}>0743794650 or 0114 592463 </p>
                        </div>

                        <div style={{display: 'flex', alignItems:'center',marginTop:'40px', fontFamily:'Poppins'}}>
                        <FaLocationCrosshairs style={{color:'orange',transform:'scaleX(-1)',fontSize:'32',marginRight:'15px'}}/>
                        <p style={{marginLeft:'10px',fontSize:'32px'}}>Located at 25 Othaya road in Kileleshwa / Lavington, Nairobi</p>
                        </div>

                        <div style={{display: 'flex', alignItems:'center',marginTop:'40px',fontFamily:'Poppins'}}>
                        <FaAddressBook style={{color:'orange',transform:'scaleX(-1)',fontSize:'32',marginRight:'15px'}}/>
                        <p style={{marginLeft:'10px',fontSize:'32px'}}>00603 – Lavington</p>
                        </div>

                        <div style={{display: 'flex', alignItems:'center',marginTop:'40px',fontFamily:'Poppins'}}>
                        <MdMarkEmailUnread style={{color:'orange',transform:'scaleX(-1)',fontSize:'32',marginRight:'15px'}}/>
                        <p style={{marginLeft:'10px',fontSize:'32px'}}>oliviasnest3@gmail.com</p>
                        </div>
                         
                    </Card> 
                    <Card>
                    <SectionHeading>
                       <h1>Send us a message</h1>
                       
                    </SectionHeading>
                    <Form>
                        <Label htmlFor="name">Name:</Label>
                        <Input type="text" id="name" name="name" />

                        <Label htmlFor="email">Email:</Label>
                        <Input type="email" id="email" name="email" />

                        <Label htmlFor="subject">Subject:</Label>
                        <Input type="text" id="subject" name="subject" />

                        <Label htmlFor="message">Your Message:</Label>
                        <Textarea id="message" name="message"  rows="4" placeholder="Write to Olivia's Nest..."/>

                        <Button type="submit">Send Message</Button>
                    </Form>
                    </Card>
                </CardContainer>
            </SomeDataSection>
        </HomeContainer>
        <hr />
        </>
    );
};