import { FaBus, FaChild, FaPaintBrush} from "react-icons/fa";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import { 
    GalleryImage, 
    GalleryItems, 
    IconGalleryWrapper, 
    SingleGallery, 
    StyledGallerySection } from "../styles/sections/GallerySection.styled";
export const GallerySection = () =>{
    return (
        <>
        <StyledGallerySection style={{marginTop:'15rem'}} id="Gallery">
            <SectionHeading>
                <h1>Our Gallery</h1>
                <h3>Our decorated pictures</h3>
            </SectionHeading>
            <GalleryItems>
                <SingleGallery>
                    <IconGalleryWrapper>
                        <FaBus />
                    </IconGalleryWrapper>
                    <h1>Models</h1>
                    <GalleryImage>
                    <img src="./images/art.jpg" alt="models prepared by kids" />
                    </GalleryImage>
                    <p>Creativity and kids making models as part of their assignment.</p>
                </SingleGallery>
                <SingleGallery>
                    <IconGalleryWrapper>
                        <FaChild/>
                    </IconGalleryWrapper>
                    <h1>Kids stretching</h1>
                    <GalleryImage>
                        <img src="./images/kids.jpg" alt="stretching" />
                    </GalleryImage>
                    <p>Kids stretching as part of the co-curricular activities.</p>
                </SingleGallery>
                <SingleGallery>
                    <IconGalleryWrapper>
                        <FaPaintBrush />
                    </IconGalleryWrapper>
                    <h1>painting</h1>
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
        <StyledGallerySection>
        <GalleryItems>
                <SingleGallery>
                    <IconGalleryWrapper>
                        <FaBus />
                    </IconGalleryWrapper>
                    <h1>Transport</h1>
                    <GalleryImage>
                    <img src="./images/art.jpg" alt="models prepared by kids" />
                    </GalleryImage>
                    <p>Creativity and kids making models as part of their assignment.</p>
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