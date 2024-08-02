import { HomeContainer } from "../styles/common/HomeConatiner";
// import { SectionHeading } from "../styles/common/SectionHeading.styled";
// import {Container} from "../styles/common/Container.styled";


import '../styles/sections/transport/Transport.css';

// import VanCartoon from "../../Images/van/boarding_A.jpg"
// import Boarding_B from "../../Images/van/boarding_B.jpg"
// import Boarding_A from "../../Images/van/boarding_A.jpg"

// import Van_Loading from '../../prod_images/TRANSPORT/van_loading.jpg';
import Van_Closed from '../../prod_images/TRANSPORT/van_closed.jpg';
import Kids_being_loaded from '../../prod_images/TRANSPORT/kids_being_loaded.jpg';
import Van_with_carton from '../../prod_images/TRANSPORT/van_with_cartoon.jpg';
import Van_loading2 from '../../prod_images/TRANSPORT/van_loading2.jpg';
// import Van_with_kids_inside from '../../prod_images/TRANSPORT/van_with_kids_inside.jpg';



export const TransportSection = () =>{
    return (
        <>

        <HomeContainer>
        <div className="top">
	<h1 className="title" style={{marginTop:'12rem'}}>Transport</h1>
	{/* <img src={Van_with_carton} alt="three hands toasting with coffee drinks" />  */}
</div>

<address>
	<div className="location">
		<svg viewBox="0 0 384 512" width="15" fill="#0988AE" title="map-marker-alt">
			<path
       d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
		</svg>
		<p>25 Othaya Road, Kileleshwa</p>
	</div>
	<div className="contact">
		<svg viewBox="0 0 512 512" width="25" fill="#0988ae" title="phone-alt">
			<path
 d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
		</svg>
		<a href="+(254)743-794-650">+(254)743-794-650</a>
	</div>
</address>
<div className="grid">
	<div>
		<h2>Routes</h2>
		<p className="prices"><span>Zone(</span>s<span>) Areas covered</span></p>
    <hr />
		<dl>
			<dt> - Special Zone</dt>
			<dd className="description">
				<p>
           0.5km or less from school.
        </p>
			</dd>
			<dt> - Zone A (0.5kms-1.5kms)</dt>
			<dd className="description">
				<p>
        Valley Arcade, Ole Odume, Muthangari Road,
        Mageta road, Mugumo road, Kaputei road.
        </p>
			</dd>
		</dl>
	</div>
	<div>
		<h2>Routes</h2>
		<p className="prices"><span>Zone(</span>s<span>) Areas covered</span></p>
    <hr />
		<dl>
			<dt>Zone B (1.5kkms-2.5kms)</dt>
			<dd className="description">
				<p>
          James Gichuru, Mbaazi Avenue, Nyeri Road, Mzima,
          Spring Lane, Olengruone Avenue, Likoni road.
        </p>
			</dd>
			<dt>Zone C (2.5kms-3.5kms)</dt>
			<dd className="description">
				<p>
          Kingara road, Riara road, Lenana Road, Argwings Kodgek, 
          Ring Road Kilimani, Dennis Pritt, Githunguri Road,
          Kasuku, Dik Dik Gardens.
        </p>
			</dd>
		</dl>
	</div>
</div>
        </HomeContainer>

        <HomeContainer>
          <div className="body_van">
          <div className="image-card_van">
    <img src={Kids_being_loaded} alt="loading olivias nest children" />
    <div className="overlay_van">
      <div className="overlay-content_van">
        <div className="overlay-title_van">Children loaded to the van</div>
        <div className="overlay-description_van">Children being loaded to the van.</div>
      </div>
    </div>
  </div>

  <div className="image-card_van">
    <img src={Van_with_carton} alt="cartons for olivia's nest with van"/>
    <div className="overlay_van">
      <div className="overlay-content_van">
        <div className="overlay-title_van">Safely taking children in</div>
        <div className="overlay-description_van">School van packed for children to be loaded into it.</div>
      </div>
    </div>
  </div>

  <div className="image-card_van">
    <img src={Van_Closed} alt="van closed"/>
    <div className="overlay_van">
      <div className="overlay-content_van">
        <div className="overlay-title_van">Image Title 3</div>
        <div className="overlay-description_van">Van after delivering our children at Olivia's Nest.</div>
      </div>
    </div>
  </div>

  
  <div className="image-card_van">
    <img src={Van_loading2 } alt="van closed1"/>
    <div className="overlay_van">
      <div className="overlay-content_van">
        <div className="overlay-title_van">Image Title 3</div>
        <div className="overlay-description_van">Van after delivering our children at Olivia's Nest.</div>
      </div>
    </div>
  </div>
          </div>
			</HomeContainer>
        <hr />
        </>
    );
};