import React, { useState, useEffect } from 'react';
import { SectionHeading } from '../styles/common/SectionHeading.styled';
import {
   AdvertMenu, 
  AdvertSection, 
  AdvertSectioning, 
  ArrowUp, 
  Header, 
  Image, 
  ImageCard, 
  ImageCardContainer, 
  NewsNav, 
  NewsNavItem, 
  NewsNavList, 
  NewsSection} from '../styles/sections/NewsSection.styled';
import useScrollDirection from '../../hooks/useScrollDirection';
import { Logo } from '../styles/layout/Nav.styled';
import { NewsData } from '../../data/NewsData';
import { NavLink } from 'react-router-dom';

const News = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('AWL'); // Set default active section
  const scrollDirection = useScrollDirection("down");

  const handleNavigation = (path, sectionId) => {
    setMenuOpen(false);
    setActiveSection(sectionId); // Set the active section
    window.location.hash = path; // Change the URL hash
    
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  };

  useEffect(() => {
    // Scroll to the default active section on mount
    const element = document.getElementById(activeSection);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeSection]);

  return (
    <>
      <NewsSection id="News" style={{ marginTop: '20rem' }}>
        <SectionHeading>
          <h1>Get some News from us!!!</h1>
          <p style={{ fontSize: '2.3rem', fontFamily: 'Poetsen One, sans-serif' }}>
            Learn about events, cultural day and further information from this page
          </p>
          <p style={{ fontFamily: 'Poetsen One, sans-serif' }}>
            A sneak peek of how we break the monotony...
          </p>
        </SectionHeading>
      </NewsSection>

      <AdvertSection>
        <AdvertMenu>
          <NewsNav style={{ background: '#082736', borderRadius: '40px' }} scrollDirection={scrollDirection}>
            <div>
              <a href="/">
                <Logo style={{ width: '150px', marginTop: '-8rem' }} src="./images/logo.png" />
              </a>
            </div>

            {/* Menu items */}
            <NewsNavList menuOpen={menuOpen}>
              {/* NewsData mapping */}
              {NewsData && NewsData.map((newsItem, index) => (
                <NewsNavItem
                  key={index}
                  index={index}
                  menuOpen={menuOpen}
                  isActive={activeSection === newsItem.sectionId} // Pass isActive prop
                  onClick={() => setMenuOpen(false)}
                >
                  <NavLink
                    to={newsItem.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(newsItem.href, newsItem.sectionId);
                    }}
                  >
                    {newsItem.text}
                  </NavLink>
                </NewsNavItem>
              ))}
            </NewsNavList>
          </NewsNav>
        </AdvertMenu>

        <AdvertSectioning id="AWL" 
        style={{ height: activeSection === 'AWL' ? '50vh' : '0', overflow: 'hidden', transition: 'height 0.2s ease' }}>
          <Header>AWL</Header>
          <ImageCardContainer>
          <ImageCard>
            <Image src="./images/AWL/AWL1.jpg"></Image>
          </ImageCard>

          <ImageCard>
            <Image src="./images/AWL/AWL2.jpg"></Image>
          </ImageCard>

          <ImageCard>
            <Image src="./images/AWL/AWL3.jpg"></Image>
          </ImageCard>
          </ImageCardContainer>
        </AdvertSectioning>

        <AdvertSectioning id="Graduation" style={{ height: activeSection === 'Graduation' ? '80vh' : '0', overflow: 'hidden', transition: 'height 0.2s ease' }}>
      <Header>Graduation</Header>
      <ImageCardContainer>
        <ImageCard>
          <Image src="./images/skating.jpg" alt="Skating" />
        </ImageCard>
        <ImageCard>
          <Image src="./images/skating.jpg" alt="Skating" />
        </ImageCard>
        <ImageCard>
          <Image src="./images/skating.jpg" alt="Skating" />
        </ImageCard>
      </ImageCardContainer>
    </AdvertSectioning>

        <AdvertSectioning id="Cultural-day" style={{ height: activeSection === 'Cultural-day' ? '80vh' : '0', overflow: 'hidden', transition: 'height 0.2s ease' }}>
        <Header>Cultural Day</Header>
      <ImageCardContainer>
      <ImageCard>
            <Image src="./images/cultural/decor3.jpg"></Image>
          </ImageCard>

          <ImageCard>
            <Image src="./images/cultural/decor4.jpg"></Image>
          </ImageCard>

          <ImageCard>
            <Image src="./images/cultural/decor5.jpg"></Image>
          </ImageCard>
      </ImageCardContainer>
        </AdvertSectioning>

        <ArrowUp href="#News">
          ↑
        </ArrowUp>
      </AdvertSection>


        
    </>
  );
}

export default News;
