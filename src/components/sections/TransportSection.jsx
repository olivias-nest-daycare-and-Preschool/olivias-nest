import { HomeContainer } from "../styles/common/HomeConatiner";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import { 
    GalleryImage, 
    GalleryItems, 
    SingleGallery, 
    StyledGallerySection } from "../styles/sections/GallerySection.styled";


export const TransportSection = () =>{
    return (
        <>
        <HomeContainer>
        <StyledGallerySection style={{marginTop:'15rem'}}>
            <SectionHeading>
            <h1>Transport</h1>
            <h3>We offer affordable and safe transport system.</h3>
            </SectionHeading>
            <GalleryItems>
                <SingleGallery>
                    <GalleryImage>
                    <img src="./images/van/boarding_C.jpg" alt="school van" />
                    </GalleryImage>
                </SingleGallery>
                <SingleGallery>
                    <SectionHeading style={{marginBottom:'-1rem'}}>
                        <h1>Transport System.</h1>
                    </SectionHeading>
                <p>
                        We offer affordable transport to our esteemed customers.
                        We have a very reliable and safety focused transport system. Our 
                        transport system is pocket friendly and we have chats on the routes and considerable
                        charges for that. For any unclear issues please feel free to reach out to us.
                    </p>
                    
                    <p>
                        We offer affordable transport to our esteemed customers.
                        We have a very reliable and safety focused transport system. Our 
                        transport system is pocket friendly and we have chats on the routes and considerable
                        charges for that. For any unclear issues please feel free to reach out to us.
                    </p>
                    
                    <p>
                        We offer affordable transport to our esteemed customers.
                        We have a very reliable and safety focused transport system. Our 
                        transport system is pocket friendly and we have chats on the routes and considerable
                        charges for that. For any unclear issues please feel free to reach out to us.
                    </p>
                </SingleGallery>
            </GalleryItems>
        </StyledGallerySection>

        <StyledGallerySection>
        <GalleryItems style={{marginTop:'-10rem',marginBottom:'-10rem'}}>
                <SingleGallery>
                <GalleryImage>
                    <img src="./images/van/boarding_G.jpg" alt="school van" />
                </GalleryImage>
                </SingleGallery>
                <SingleGallery>
                <GalleryImage>
                    <img src="./images/van/boarding_C.jpg" alt="school van" />
                </GalleryImage>
                </SingleGallery>
                <SingleGallery>
                <GalleryImage>
                    <img src="./images/van/boarding_D.jpg" alt="school van" />
                </GalleryImage>
                </SingleGallery >
            </GalleryItems>
        </StyledGallerySection>
        </HomeContainer>
        <hr />
        </>
    );
};