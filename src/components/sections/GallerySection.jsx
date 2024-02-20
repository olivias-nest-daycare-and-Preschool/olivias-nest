import { FaBus, FaChild, FaPaintBrush } from "react-icons/fa";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import { GalleryImage, GalleryItems, IconGalleryWrapper, SingleGallery, StyledGallerySection } from "../styles/sections/GallerySection.styled";
export const GallerySection = () =>{
    return (
        <>
        <StyledGallerySection id="Gallery">
            <SectionHeading>
                <h1>Gallery</h1>
                <h3>Classrooms and studies</h3>
            </SectionHeading>
            <GalleryItems>
                <SingleGallery>
                    <IconGalleryWrapper>
                        <FaBus />
                    </IconGalleryWrapper>
                    <h1>Transport</h1>
                    <GalleryImage>
                    <img src="./images/van.jpg" alt="kids modelling" />
                    </GalleryImage>
                    <p>We offer affordable transportation services for our children.</p>
                </SingleGallery>
                <SingleGallery>
                    <IconGalleryWrapper>
                        <FaChild/>
                    </IconGalleryWrapper>
                    <h1>indoor activity</h1>
                    <GalleryImage>
                        <img src="./images/kids.jpg" alt="stretching" />
                    </GalleryImage>
                    <p>Kids stretching as part of the co-curricular activities.</p>
                </SingleGallery>
                <SingleGallery>
                    <IconGalleryWrapper>
                        <FaPaintBrush />
                    </IconGalleryWrapper>
                    <h1>Arts & Craft</h1>
                    <GalleryImage>
                        <img src="./images/painting.jpg" alt="kids painting and modelling" />
                    </GalleryImage>
                    <p>
                        We pride ourselves for nurturing talents at Olivia's nest. We have an array of tools that 
                        facilitate talent nurturing and crafting. 
                    </p>
                </SingleGallery>
            </GalleryItems>
        </StyledGallerySection>
        {/*classrooms and studies*/}
        <hr />
        <StyledGallerySection>
                <SectionHeading>
                <h3>sports</h3>
                </SectionHeading>
                <GalleryItems>
                <SingleGallery>
                    <IconGalleryWrapper>
                        <FaBus />
                    </IconGalleryWrapper>
                    <h1>Transport</h1>
                    <GalleryImage>
                    <img src="./images/van.jpg" alt="kids modelling" />
                    </GalleryImage>
                    <p>We offer affordable transportation services for our children.</p>
                </SingleGallery>
                <SingleGallery>
                    <IconGalleryWrapper>
                        <FaChild/>
                    </IconGalleryWrapper>
                    <h1>indoor activity</h1>
                    <GalleryImage>
                        <img src="./images/kids.jpg" alt="stretching" />
                    </GalleryImage>
                    <p>Kids stretching as part of the co-curricular activities.</p>
                </SingleGallery>
                <SingleGallery>
                    <IconGalleryWrapper>
                        <FaPaintBrush />
                    </IconGalleryWrapper>
                    <h1>Arts & Craft</h1>
                    <GalleryImage>
                        <img src="./images/painting.jpg" alt="kids painting and modelling" />
                    </GalleryImage>
                    <p>
                        We pride ourselves for nurturing talents at Olivia's nest. We have an array of tools that 
                        facilitate talent nurturing and crafting. 
                    </p>
                </SingleGallery>
            </GalleryItems>
        </StyledGallerySection>
        {/*sports*/}
        <hr />
        <StyledGallerySection>
            <SectionHeading>
                <h3>Facilities</h3>
            </SectionHeading>
            <GalleryItems>
                <SingleGallery>
                    <IconGalleryWrapper>
                        <FaBus />
                    </IconGalleryWrapper>
                    <h1>Transport</h1>
                    <GalleryImage>
                    <img src="./images/van.jpg" alt="kids modelling" />
                    </GalleryImage>
                    <p>We offer affordable transportation services for our children.</p>
                </SingleGallery>
                <SingleGallery>
                    <IconGalleryWrapper>
                        <FaChild/>
                    </IconGalleryWrapper>
                    <h1>indoor activity</h1>
                    <GalleryImage>
                        <img src="./images/kids.jpg" alt="stretching" />
                    </GalleryImage>
                    <p>Kids stretching as part of the co-curricular activities.</p>
                </SingleGallery>
                <SingleGallery>
                    <IconGalleryWrapper>
                        <FaPaintBrush />
                    </IconGalleryWrapper>
                    <h1>Arts & Craft</h1>
                    <GalleryImage>
                        <img src="./images/painting.jpg" alt="kids painting and modelling" />
                    </GalleryImage>
                    <p>
                        We pride ourselves for nurturing talents at Olivia's nest. We have an array of tools that 
                        facilitate talent nurturing and crafting. 
                    </p>
                </SingleGallery>
            </GalleryItems>
        </StyledGallerySection>
        <hr />
        </>
    );
};