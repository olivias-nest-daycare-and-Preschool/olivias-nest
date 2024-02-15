import { FaBus, FaFutbol, FaPaintBrush } from "react-icons/fa";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import { GalleryItems, IconGalleryWrapper, SingleGallery, StyledGallerySection } from "../styles/sections/GallerySection.styled";

export const GallerySection = () =>{
    return (
        <>
        <StyledGallerySection id="Gallery">
            <SectionHeading>
                <h1>Gallery</h1>
                <h3>Welcome to our gallery</h3>
            </SectionHeading>
            <GalleryItems>
                <SingleGallery>
                    <IconGalleryWrapper>
                        <FaBus />
                    </IconGalleryWrapper>
                    <h1>Transport</h1>
                    <p>We offer affordable transportation services for our children.
                        For inquiries and schedule, please contact us for more info...
                    </p>
                </SingleGallery>
                <SingleGallery>
                    <IconGalleryWrapper>
                        <FaFutbol />
                    </IconGalleryWrapper>
                    <h1>Sports</h1>
                    <p>
                        We offer soccer and a bunch of sports. We have tennis, skating,
                        swimming pool, basket ball, chess and plenty more sports.
                    </p>
                </SingleGallery>
                <SingleGallery>
                    <IconGalleryWrapper>
                        <FaPaintBrush />
                    </IconGalleryWrapper>
                    <h1>Arts & Craft</h1>
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