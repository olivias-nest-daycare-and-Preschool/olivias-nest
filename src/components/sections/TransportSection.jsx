import { HomeContainer } from "../styles/common/HomeConatiner";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import { 
    StyledGallerySection 
} from "../styles/sections/GallerySection.styled";


import '../styles/sections/transport/Transport.css';


import VanCartoon from "../../Images/van/boarding_A.jpg"
import Boarding_C from "../../Images/van/boarding_C.jpg"
import Boarding_B from "../../Images/van/boarding_B.jpg"
import Boarding_A from "../../Images/van/boarding_A.jpg"
import Boarding_F from "../../Images/van/boarding_F.jpg"
import Boarding_G from "../../Images/van/boarding_G.jpg"
import Caregiver from "../../Images/van/caregiver.jpg"


export const TransportSection = () =>{
    return (
        <>
        <HomeContainer>
        <StyledGallerySection style={{marginTop:'5rem', marginBottom:'-45rem'}}>
            <SectionHeading>
            <h1>Transport</h1>
            <h3>We offer affordable and safe transport system.</h3>
            </SectionHeading>
        </StyledGallerySection>
        </HomeContainer>

        <div className="band_transport" style={{padding: `2rem`,marginTop:`-5rem`}}>
		<div className="item-1_transport">
			<a href="/ContactUs" className="card_transport">
				<div className="thumb_transport" style={{backgroundImage:`url(${VanCartoon})`}}></div>
				<article>
					<h1>Transport system</h1>
					<span>overview</span>
                    <p style={{color:'black'}}> We offer affordable transport to our esteemed customers.
                        We have a very reliable and safety focused transport system. Our 
                        transport system is pocket friendly and we have chats on the routes and considerable
                        charges for that. For any unclear issues please feel free to reach out to us.
                    </p>
				</article>
			</a>
		</div>

		<div className="item-2">
			<a href="/ContactUs" className="card_transport">
				<div className="thumb_transport" style={{backgroundImage:`url(${Boarding_C})`}}></div>
				<article>
					<h1>Child safety</h1>
					<span> we care for our children</span>
                    <p style={{color:'black'}}>Our teachers are very careful in handling our children.
                        We are very thorough in the safety of every child at Olivia's nest.
                    </p>
				</article>
			</a>
		</div>

		<div className="item-3">
			<a href="/ContactUs" className="card_transport">
				<div className="thumb_transport" style={{backgroundImage:`url(${Boarding_B})`}}></div>
				<article>
					<h1>Created by You, July Edition</h1>
					<p style={{color:'black'}}>Welcome to our monthly feature of fantastic tutorial results created by you, the Envato Tuts+ community! </p>
					<span>Melody Nieves</span>
				</article>
			</a>
		</div>

		<div class="item-4">
			<a href="/ContactUs" className="card_transport">
				<div className="thumb" style={{backgroundImage:`url(${Boarding_A})`}}></div>
				<article>
					<h1>How to Code a Scrolling “Alien Lander” Website</h1>
					<p style={{color:'black'}}>We’ll be putting things together so that as you scroll down from the top of the page you’ll see an “Alien Lander” making its way to touch down.</p>
					<span>Kezz Bracey</span>
				</article>
			</a>
		</div>

		<div className="item-5">
			<a href="/ContactUs" className="card_transport">
				<div className="thumb_transport" style={{backgroundImage:`url(${Boarding_F})`}}></div>
				<article>
					<h1>How to Create a “Stranger Things” Text Effect in Adobe Photoshop</h1>
					<span>Rose</span>
				</article>
			</a>
		</div>

		<div className="item-6">
			<a href="/ContactUs" className="card">
				<div className="thumb_transport" style={{backgroundImage:`url(${Boarding_G})`}}></div>
				<article>
					<h1>5 Inspirational Business Portraits and How to Make Your Own</h1>
					<span>Marie Gardiner</span>
				</article>
			</a>
		</div>

		<div className="item-7">
			<a href="/ContactUs" className="card_transport">
				<div className="thumb_transport" style={{backgroundImage:`url(${Caregiver})`}}></div>
				<article>
					<h1>Notes From Behind the Firewall: The State of Web Design in China</h1>
					<span>Kendra Schaefer</span>
				</article>
			</a>
		</div>
	</div>
        <hr />
        </>
    );
};