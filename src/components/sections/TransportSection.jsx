import { HomeContainer } from "../styles/common/HomeConatiner";
import { SectionHeading } from "../styles/common/SectionHeading.styled";


import '../styles/sections/transport/Transport.css';

// import VanCartoon from "../../Images/van/boarding_A.jpg"
// import Boarding_B from "../../Images/van/boarding_B.jpg"
// import Boarding_A from "../../Images/van/boarding_A.jpg"



export const TransportSection = () =>{
    return (
        <>
        <HomeContainer>
            <SectionHeading style={{marginTop:'20rem'}}>
            <h1>Transport</h1>
            <h3>We offer affordable and safe transport system.</h3>
            </SectionHeading>
			<div className="content-wrapper_transport">
  <div className="news-card">
    <a href="/Transport" className="news-card__card-link">Contact us</a>
    <img src="./images/teachers.jpg" alt="" className="news-card__image" />
    <div className="news-card__text-wrapper">
      <h2 className="news-card__title">Transport</h2>
      <div className="news-card__post-date">Transport</div>
      <div className="news-card__details-wrapper">
	  <p className="news-card__excerpt"> We offer affordable transport to our esteemed customers.
                        We have a very reliable and safety focused transport system. Our 
                        transport system is pocket friendly and we have chats on the routes and considerable
                        charges for that. For any unclear issues please feel free to reach out to us.
                    </p>
      </div>
    </div>
  </div>
  <div className="news-card">
    <a href="/Transport" className="news-card__card-link">Information</a>
    <img src="./images/teachers.jpg" alt="" className="news-card__image" />
    <div className="news-card__text-wrapper">
      <h2 className="news-card__title">Amazing Title</h2>
      <div className="news-card__post-date">Jan 29, 2018</div>
      <div className="news-card__details-wrapper">
        <p className="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis beatae&hellip;</p>
        <a href="/Transport" className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

  <div className="news-card">
    <a href="/Transport" className="news-card__card-link">Reach out</a>
    <img src= "./images/teachers.jpg" alt="" className="news-card__image" />
    <div className="news-card__text-wrapper">
      <h2 className="news-card__title">Amazing Forth Title that is Quite Long</h2>
      <div className="news-card__post-date">Jan 29, 2018</div>
      <div className="news-card__details-wrapper">
        <p className="news-card__excerpt">Lorem ipsum dolor sit amet!</p>
        <a href="/Transport" className="news-card__read-more">Read More <i className="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>
</div>
  </HomeContainer>

			<HomeContainer>
			<SectionHeading>
				<h1>Routes and Information</h1>
				<p>We offer pocket friendly transport solution</p>
			</SectionHeading>
   {/* <div className="body_info_wrapper"> */}
   <div className="cards_transport_info">
   <section className="card_transport_info">
    <h2>Our Transport Route</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Praesent eget lacinia nunc. Integer sit amet odio nisl.
        Sed vehicula enim pulvinar, sollicitudin lectus at, malesuada magna.</p>
    <div className="card-footer">
      <a href="/Transport" class="cta_transport_info">Proceed</a>
    </div>
  </section>
  <div className="img-card_transport_info">
    <img src="./images/teachers.jpg" alt="olivias nest" />
  </div>
</div>

<div className="cards_transport_info">
  <div className="img-card_transport_info">
    <img src="./images/teachers.jpg" alt=" olivias nest" />
  </div>
  <section className="card_transport_info">
    <h2>Card heading</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
       eget lacinia nunc. Integer sit amet odio nisl. Sed vehicula enim pulvinar, 
       sollicitudin lectus at, malesuada magna.</p>
    <div className="card-footer_transport_info">
      <a href="/Transport" className="cta_transport_info">Continue</a>
    </div>
  </section>
</div>
   {/* </div> */}
			</HomeContainer>
        <hr />
        </>
    );
};