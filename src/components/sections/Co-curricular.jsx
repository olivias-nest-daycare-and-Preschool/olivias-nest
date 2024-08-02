import { Container } from "../styles/common/Container.styled";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import { AboutUsSection } from "../styles/sections/AboutSection.styled";
import {GalleryImage, GalleryItems,SingleGallery, StyledGallerySection } from "../styles/sections/GallerySection.styled";
import tennis1 from "../../prod_images/FACILITIES/Tennis/tennis1.png";
import tennis2 from "../../prod_images/FACILITIES/Tennis/tennis2.png";
import tennis3 from "../../prod_images/FACILITIES/Tennis Court/tennis3.png";

import taekwondo1 from "../../prod_images/FACILITIES/Taekwondo/taekwondo1.png";
import taekwondo2 from "../../prod_images/FACILITIES/Taekwondo/taekwondo2.png";
import taekwondo3 from "../../prod_images/FACILITIES/Taekwondo/taekwondo3.png";


import skating1 from "../../prod_images/FACILITIES & WHAT WE OFFER/Skating/skating3.png";
import skating2 from "../../prod_images/FACILITIES & WHAT WE OFFER/Skating/skating1.png";

import other1 from "../../prod_images/FACILITIES & WHAT WE OFFER/Breaktime/castle.png";
import other2 from "../../prod_images/FACILITIES & WHAT WE OFFER/Breaktime/breaktime.png";
import other3 from "../../prod_images/FACILITIES/Art & Modelling/OLIVIA'S NEST - MONDAY MAY 2024 EDITED - 017.png";
import swimming1 from "../../prod_images/FACILITIES/Swimming Pool/OLIVIA'S NEST - KIDS HOLIDAY PHOTOS 2024 002.png";
export const Cocurricular = ({isFloating}) =>{
    return(
        <>
        <Container>
        <AboutUsSection id="Gallery" style={{marginTop:'8rem'}}>
    <SectionHeading>
      <h1>Co-curricular</h1>
      <h3>Enhancing a child's life skills, fitness and engaging their minds with productive sports</h3>
      <h1>Taekwondo</h1>
    </SectionHeading>
    <GalleryItems>
      <SingleGallery>
        <GalleryImage>
            <img src={taekwondo1} alt="kids modelling" />
        </GalleryImage>
        <p style={{ marginTop: '1rem' }}>
          We keep our children pre-occupied with sports at Olivia's Nest.
          Taekwondo session in progress.
        </p>
      </SingleGallery>
      <SingleGallery>
        <GalleryImage>
            <img src={taekwondo2} alt="stretching" />
        </GalleryImage>
        <p style={{ marginTop: '1rem' }}>Kids stretching as part of the co-curricular activities.</p>
      </SingleGallery>
      <SingleGallery>
        <GalleryImage>
            <img src={taekwondo3} alt="kids modelling" />
        </GalleryImage>
        <p style={{ marginTop: '1rem' }}>
          We keep our children pre-occupied with sports at Olivia's Nest.
          Our previous soccer tournament.
        </p>
      </SingleGallery>
    </GalleryItems>
  </AboutUsSection>
        </Container>

       
       <Container>
       <hr />
       <StyledGallerySection>
       <SectionHeading>
                <h1>We offer Tennis</h1>
            </SectionHeading>
        <GalleryItems>
        <SingleGallery>
                    <GalleryImage>
                        <img src={tennis1} alt="stretching" />
                    </GalleryImage>
                    <p>Kids stretching as part of the co-curricular activities.</p>
                </SingleGallery>
                <SingleGallery>
                    <GalleryImage>
                        <img src={tennis3} alt="stretching" />
                    </GalleryImage>
                    <p>Kids stretching as part of the co-curricular activities.</p>
                </SingleGallery>
                <SingleGallery>
                    <GalleryImage>
                        <img src={tennis2} alt="stretching" />
                    </GalleryImage>
                    <p>Kids stretching as part of the co-curricular activities.</p>
                </SingleGallery>
        </GalleryItems>
       </StyledGallerySection>
       <hr />
       <StyledGallerySection>
       <SectionHeading>
                <h1>Skating</h1>
            </SectionHeading>
        <GalleryItems>
        <SingleGallery>
                    <GalleryImage>
                        <img style={{borderRadius:'15%'}} src={skating1} alt="stretching" />
                    </GalleryImage>
                    <p>Kids stretching as part of the co-curricular activities.</p>
                </SingleGallery>
                <SingleGallery>
                    <GalleryImage>
                        <img style={{borderRadius:'15%'}} src={skating2} alt="stretching" />
                    </GalleryImage>
                    <p>Kids stretching as part of the co-curricular activities.</p>
                </SingleGallery>
        </GalleryItems>
       </StyledGallerySection>
       <hr />
       <StyledGallerySection>
       <SectionHeading>
                <h1>Other activities</h1>
            </SectionHeading>
        <GalleryItems>
        <SingleGallery>
                    <GalleryImage>
                        <img style={{borderRadius:'15%'}} src={other1} alt="stretching" />
                    </GalleryImage>
                    <p>Children at the favorite bouncing castle during their break.</p>
                </SingleGallery>
                <SingleGallery>
                    <GalleryImage>
                        <img style={{borderRadius:'15%'}} src={other2} alt="stretching" />
                    </GalleryImage>
                    <p>Children cycling and engaged in various co-curricular activities.</p>
                </SingleGallery>
                <SingleGallery>
                    <GalleryImage>
                        <img style={{borderRadius:'15%'}} src={other3} alt="stretching" />
                    </GalleryImage>
                    <p>Children modelling and presenting their models.</p>
                </SingleGallery>
        </GalleryItems>
       </StyledGallerySection>
       <hr />
       <StyledGallerySection>
       <SectionHeading>
                <h1>Swimming</h1>
            </SectionHeading>
        <GalleryItems>
        <SingleGallery>
                    <GalleryImage>
                        <img src={swimming1} alt="stretching" />
                    </GalleryImage>
                    <p>Kids stretching as part of the co-curricular activities.</p>
                </SingleGallery>
                <SingleGallery>
                    <GalleryImage>
                        <img src="./images/kids.jpg" alt="stretching" />
                    </GalleryImage>
                    <p>Kids stretching as part of the co-curricular activities.</p>
                </SingleGallery>
        </GalleryItems>
       </StyledGallerySection>
       <hr />
       </Container>
        </>
    );
};