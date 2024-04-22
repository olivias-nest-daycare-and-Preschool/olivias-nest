// import {css} from 'styled-components';
import { Container } from "../styles/common/Container.styled";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import { HomeContainer } from "../styles/sections/ContactForm.styled";
import { ClipHexagon, GalleryImage, GalleryItems,SingleGallery, StyledGallerySection } from "../styles/sections/GallerySection.styled";
export const Cocurricular = ({isFloating}) =>{
    return(
        <>
        <HomeContainer style={{marginTop:'10rem'}}>
        <StyledGallerySection id="Gallery" style={{ marginTop: '20rem' }}>
    <SectionHeading>
      <h1>Co-curricular</h1>
      <h3>Enhancing a child's life skills, fitness and engaging their minds with productive sports</h3>
      <h3>Soccer</h3>
    </SectionHeading>
    <GalleryItems>
      <SingleGallery>
        <GalleryImage>
          <ClipHexagon>
            <img src="./images/soccer.jpg" alt="kids modelling" />
          </ClipHexagon>
        </GalleryImage>
        <p style={{ marginTop: '1rem' }}>
          We keep our children pre-occupied with sports at Olivia's Nest.
          Our previous soccer tournament.
        </p>
      </SingleGallery>
      <SingleGallery>
        <GalleryImage>
          <ClipHexagon>
            <img src="./images/kids.jpg" alt="stretching" />
          </ClipHexagon>
        </GalleryImage>
        <p style={{ marginTop: '1rem' }}>Kids stretching as part of the co-curricular activities.</p>
      </SingleGallery>
      <SingleGallery>
        <GalleryImage>
          <ClipHexagon>
            <img src="./images/soccer.jpg" alt="kids modelling" />
          </ClipHexagon>
        </GalleryImage>
        <p style={{ marginTop: '1rem' }}>
          We keep our children pre-occupied with sports at Olivia's Nest.
          Our previous soccer tournament.
        </p>
      </SingleGallery>
    </GalleryItems>
  </StyledGallerySection>
        </HomeContainer>
       
       <Container style={{marginTop:'5rem'}}>
       <hr />
       <StyledGallerySection>
       <SectionHeading>
                <h3>Lawn tennis</h3>
            </SectionHeading>
        <GalleryItems>
        <SingleGallery>
                    <GalleryImage>
                        <img src="./images/kids.jpg" alt="stretching" />
                    </GalleryImage>
                    <p>Kids stretching as part of the co-curricular activities.</p>
                </SingleGallery>
                <SingleGallery>
                    <GalleryImage>
                        <img src="./images/kids.jpg" alt="stretching" />
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
       <StyledGallerySection>
       <SectionHeading>
                <h3>Skating</h3>
            </SectionHeading>
        <GalleryItems>
        <SingleGallery>
                    <GalleryImage>
                        <img style={{borderRadius:'15%'}} src="./images/kids.jpg" alt="stretching" />
                    </GalleryImage>
                    <p>Kids stretching as part of the co-curricular activities.</p>
                </SingleGallery>
                <SingleGallery>
                    <GalleryImage>
                        <img style={{borderRadius:'15%'}} src="./images/kids.jpg" alt="stretching" />
                    </GalleryImage>
                    <p>Kids stretching as part of the co-curricular activities.</p>
                </SingleGallery>
        </GalleryItems>
       </StyledGallerySection>
       <hr />
       <StyledGallerySection>
       <SectionHeading>
                <h3>Sack racing</h3>
            </SectionHeading>
        <GalleryItems>
        <SingleGallery>
                    <GalleryImage>
                        <img style={{borderRadius:'15%'}} src="./images/kids.jpg" alt="stretching" />
                    </GalleryImage>
                    <p>Kids stretching as part of the co-curricular activities.</p>
                </SingleGallery>
                <SingleGallery>
                    <GalleryImage>
                        <img style={{borderRadius:'15%'}} src="./images/kids.jpg" alt="stretching" />
                    </GalleryImage>
                    <p>Kids stretching as part of the co-curricular activities.</p>
                </SingleGallery>
                <SingleGallery>
                    <GalleryImage>
                        <img style={{borderRadius:'15%'}} src="./images/kids.jpg" alt="stretching" />
                    </GalleryImage>
                    <p>Kids stretching as part of the co-curricular activities.</p>
                </SingleGallery>
        </GalleryItems>
       </StyledGallerySection>
       <hr />
       <StyledGallerySection>
       <SectionHeading>
                <h3>Swimming</h3>
            </SectionHeading>
        <GalleryItems>
        <SingleGallery>
                    <GalleryImage>
                        <img src="./images/kids.jpg" alt="stretching" />
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
       <StyledGallerySection>
       <SectionHeading>
                <h3>Painting, Modelling, Arts & crafts</h3>
            </SectionHeading>
        <GalleryItems>
        <SingleGallery>
                    <GalleryImage>
                        <img src="./images/kids.jpg" alt="stretching" />
                    </GalleryImage>
                    <p>Kids stretching as part of the co-curricular activities.</p>
                </SingleGallery>
                <SingleGallery style={isFloating ? {transform:'translateY(-10px)', transition:'transform 0.3s ease-in-out'}:null}>
                    <GalleryImage>
                        <img src="./images/kids.jpg" alt="stretching" />
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