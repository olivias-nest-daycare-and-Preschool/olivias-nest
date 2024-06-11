import React, { useState } from 'react';
import { FaPhone} from "react-icons/fa";
import {FaAddressBook, FaLocationCrosshairs} from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import {Button, Form, Input, Label, StyledContactSectionMain,StyledSemiContactSectionMain, Textarea } from "../styles/sections/ContactSection.styled";
import { Card } from "../styles/sections/HomeSection.styled";
import {CardForm,Title,Paragraph,CheckBoxWrapper,CheckBoxLabel,CheckBox,Select, FlexContainer, Icon, Text} from "../styles/sections/ContactForm.styled"
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
                <p style={{fontSize:'2rem'}}><Link to="/ContactUs"><Link to="/">Home</Link> / Contact Us</Link></p>
            </SectionHeading>

       <CardForm>
                <Card  style={{flexDirection:'column',justifyContent:'center'}}>
                <Title style={{color: 'orange'}}>What would you like to hear more about?</Title>
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
                <Paragraph>How old is your child?<div style={{display:'inline',color:'red'}}>*</div></Paragraph>
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

        <StyledContactSectionMain>
            <StyledSemiContactSectionMain>
            <SectionHeading  style={{marginTop:'-20rem'}}>
                            <h1>Contact Info</h1>
                        </SectionHeading>
                <CardForm>
                    <Card>
                      <p style={{fontSize:'20px',color:'orange',marginBottom:'1rem'}}>Go ahead and contact us or write a message to us and we'll get back to you</p>
                         <FlexContainer>
                          <Icon as={FaPhone} />
                          <Text>0743794650 or 0114 592463</Text>
                        </FlexContainer>
                        
                        <FlexContainer>
                          <Icon as={FaLocationCrosshairs} />
                          <Text>Located at 25 Othaya road in Kileleshwa / Lavington, Nairobi</Text>
                        </FlexContainer>
                        
                        <FlexContainer>
                          <Icon as={FaAddressBook} />
                          <Text>00603 – Lavington</Text>
                        </FlexContainer>
                        
                        <FlexContainer>
                          <Icon as={MdMarkEmailUnread} />
                          <Text>oliviasnest3@gmail.com</Text>
                        </FlexContainer>
                    </Card> 

                    <Card>
                    <p style={{fontSize:'20px',color:'orange',marginBottom:'1rem'}}>
                      Send us your message and we'll get back to you.</p>
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
                </CardForm>
            </StyledSemiContactSectionMain>
        </StyledContactSectionMain>
        <hr />
        </>
    );
};