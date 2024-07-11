import { HomeContainer } from "../styles/common/HomeConatiner";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import "../styles/sections/Gallery/Gallery.css";
import "../styles/sections/Home/Beauty.css";

export const GallerySection = () =>{
    return (
        <>

<HomeContainer>
<SectionHeading>
                <h1>Take a look at our gallery</h1>
    </SectionHeading>

<div class='scroll-animations-example' data-scroll-container>
    <div class='scrollsection' data-scroll-section>
        <div class='item -normal' data-scroll data-scroll-speed="2">
            <img class='image' src='https://picsum.photos/id/1005/300/400' alt="1"/>
        </div>
        <div class='item -big' data-scroll data-scroll-speed="1">
            <img class='image' src='https://picsum.photos/id/1019/600/800' alt="2" />
        </div>
        <div class='item -small -horizontal' data-scroll data-scroll-speed="4">
            <img class='image' src='https://picsum.photos/id/1027/400/300' alt="3"/>
        </div>
        <div class='item -normal' data-scroll data-scroll-speed="3">
            <img class='image' src='https://picsum.photos/id/1028/300/400' alt="4"/>
        </div>
        <div class='item -normal -horizontal' data-scroll data-scroll-speed="2">
            <img class='image' src='https://picsum.photos/id/1041/400/300' alt="5" />
        </div>
        <div class='item -big -horizontal' data-scroll data-scroll-speed="4">
            <img class='image' src='https://picsum.photos/id/1042/800/600' alt="6"/>
        </div>
        <div class='item -small' data-scroll data-scroll-speed="2">
            <img class='image' src='https://picsum.photos/id/1049/300/400' alt="19"/>
        </div>
        <div class='item -normal -horizontal' data-scroll data-scroll-speed="1">
            <img class='image' src='https://picsum.photos/id/1056/300/400' alt="7"/>
        </div>
        <div class='item -small -horizontal' data-scroll data-scroll-speed="3">
            <img class='image' src='https://picsum.photos/id/1062/400/300' alt="8"/>
        </div>
        <div class='item -big' data-scroll data-scroll-speed="1">
            <img class='image' src='https://picsum.photos/id/1068/600/800' alt="20"/>
        </div>
        
        <div class='item -normal -horizontal' data-scroll data-scroll-speed="2">
            <img class='image' src='https://picsum.photos/id/1069/400/300' alt="9"/>
        </div>
        <div class='item -normal -horizontal' data-scroll data-scroll-speed="1">
            <img class='image' src='https://picsum.photos/id/1072/300/400' alt="10"/>
        </div>
        <div class='item -small -horizontal' data-scroll data-scroll-speed="4">
            <img class='image' src='https://picsum.photos/id/1075/400/300' alt="11" />
        </div>
        <div class='item -big' data-scroll data-scroll-speed="3">
            <img class='image' src='https://picsum.photos/id/1081/600/800' alt="18"/>
        </div>
        <div class='item -normal -horizontal' data-scroll data-scroll-speed="2">
            <img class='image' src='https://picsum.photos/id/111/400/300' alt="12"/>
        </div>
        <div class='item -small -horizontal' data-scroll data-scroll-speed="4">
            <img class='image' src='https://picsum.photos/id/129/400/300' alt="13"/>
        </div>
        <div class='item -big' data-scroll data-scroll-speed="2">
            <img class='image' src='https://picsum.photos/id/137/600/800' alt="14"/>
        </div>
        <div class='item -normal -horizontal' data-scroll data-scroll-speed="1">
            <img class='image' src='https://picsum.photos/id/141/300/400' alt="15"/>
        </div>
        <div class='item -small -horizontal' data-scroll data-scroll-speed="3">
            <img class='image' src='https://picsum.photos/id/145/400/300' alt="16"/>
        </div>
        <div class='item -normal' data-scroll data-scroll-speed="1">
            <img class='image' src='https://picsum.photos/id/147/300/400' alt="17" />
        </div>
    </div>
</div>

<div class='fake-ui'>
    <div class='logo'></div>
    <div class='nav'>
        <span class='item'></span>
        <span class='item'></span>
        <span class='item'></span>
    </div>
    <div class='footer'></div>
</div>

</HomeContainer>
        </>
    );
};