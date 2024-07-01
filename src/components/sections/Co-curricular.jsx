import { Container } from "../styles/common/Container.styled";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import { AboutUsSection } from "../styles/sections/AboutSection.styled";
import {GalleryImage, GalleryItems,SingleGallery, StyledGallerySection } from "../styles/sections/GallerySection.styled";
export const Cocurricular = ({isFloating}) =>{
    return(
        <>
        <Container>
        <AboutUsSection id="Gallery" style={{marginTop:'15rem'}}>
    <SectionHeading>
      <h1>Co-curricular</h1>
      <h3>Enhancing a child's life skills, fitness and engaging their minds with productive sports</h3>
      <h1>Soccer</h1>
    </SectionHeading>
    <GalleryItems>
      <SingleGallery>
        <GalleryImage>
            <img src="./images/soccer.jpg" alt="kids modelling" />
        </GalleryImage>
        <p style={{ marginTop: '1rem' }}>
          We keep our children pre-occupied with sports at Olivia's Nest.
          Our previous soccer tournament.
        </p>
      </SingleGallery>
      <SingleGallery>
        <GalleryImage>
            <img src="./images/kids.jpg" alt="stretching" />
        </GalleryImage>
        <p style={{ marginTop: '1rem' }}>Kids stretching as part of the co-curricular activities.</p>
      </SingleGallery>
      <SingleGallery>
        <GalleryImage>
            <img src="./images/soccer.jpg" alt="kids modelling" />
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
                <h1>Lawn tennis</h1>
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
                <h1>Skating</h1>
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
                <h1>Sack racing</h1>
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
                <h1>Swimming</h1>
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
                <h1>Painting, Modelling, Arts & crafts</h1>
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