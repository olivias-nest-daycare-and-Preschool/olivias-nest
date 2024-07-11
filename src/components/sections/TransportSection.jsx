import { HomeContainer } from "../styles/common/HomeConatiner";
import { SectionHeading } from "../styles/common/SectionHeading.styled";


import '../styles/sections/transport/Transport.css';

import VanCartoon from "../../Images/van/boarding_A.jpg"
import Boarding_B from "../../Images/van/boarding_B.jpg"
import Boarding_A from "../../Images/van/boarding_A.jpg"



export const TransportSection = () =>{
    return (
        <>
        <HomeContainer>
            <SectionHeading style={{marginTop:'20rem'}}>
            <h1>Transport</h1>
            <h3>We offer affordable and safe transport system.</h3>
            </SectionHeading>
			<div className="content-wrapper" >
  <div className="news-card">
    <a href="/Transport" className="news-card__card-link">Contact us</a>
    <img src={VanCartoon} alt="" className="news-card__image" />
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
    <img src={Boarding_A} alt="" className="news-card__image" />
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
    <img src= {Boarding_B} alt="" className="news-card__image" />
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

			<div className="info-container">
				<div className="side_a">
					<div className="van_container">
					<img src={Boarding_B} alt="van image1" />
					</div>
				</div>
				<div className="side_b">
					<div className="van_container">
					<img src={Boarding_A} alt="van image2" />
					</div>
				</div>
			</div>
			</HomeContainer>
        <hr />
        </>
    );
};