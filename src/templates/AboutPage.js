import React from 'react';
import { graphql } from 'gatsby';
import About from '../components/AboutPage.js';
import PageHeader from '../components/PageHeader';
import Layout from '../components/Layout.js';

export const AboutPageTemplate = ({
                                    title,
                                    subtitle,
                                    featuredImage,
                                    section1,
                                    section2,
                                    video,
                                    videoPoster,
                                    videoTitle,
                                    accordion,
                                    body,
                                    gallery,
                                  }) => (
  <main>
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section">
      <div className="resume">
        <div className="base">
          <div className="profile">
            <div className="photo">
              <img src={require('../../static/images/me.jpg')}  alt='photo'/>
            </div>
            <div className="info">
              <h1 className="name">陳金昌 Chris Chen</h1>
              <h2 className="job">Full Stack Designer</h2>
            </div>
          </div>
          <div className="about">
            <h3>About Me</h3>I'm a web designer for Fiserv, specializing in web design, graphic design, and UX.
            Experienced with the Adobe Creative Suite, responsive design, social media management, and prototyping.
          </div>
          <div className="contact">
            <h3>Contact Me</h3>
            <div className="call"><a href="tel:123-456-7890"><i
              className="fas fa-phone"></i><span>123-456-7890</span></a></div>
            <div className="address"><a href="https://goo.gl/maps/fiTBGT6Vnhy"><i
              className="fas fa-map-marker"></i><span>Provo, Utah</span></a>
            </div>
            <div className="email"><a href="mailto:astronaomical@gmail.com"><i
              className="fas fa-envelope"></i><span>astronaomical</span></a></div>
            <div className="website"><a href="http://astronaomical.com/" target="_blank"> <i
              className="fas fa-home"></i><span>astronaomical.com</span></a></div>
          </div>
          <div className="follow">
            <h3>Follow Me</h3>
            <div className="box">
              <a href="https://www.facebook.com/astronaomical/" target="_blank"><i className="fab fa-facebook"></i></a>
              <a href="https://www.instagram.com/astronaomical/" target="_blank"><i
                className="fab fa-instagram "></i></a>
              <a href="https://www.pinterest.com/astronaomical/" target="_blank"><i
                className="fab fa-pinterest"></i></a>
              <a href="https://www.linkedin.com/in/naomi-weatherford-758385112/" target="_blank"><i
                className="fab fa-linkedin"></i></a>
              <a href="https://codepen.io/astronaomical/" target="_blank"><i className="fab fa-codepen"></i></a>
              <a href="https://www.behance.net/astronaomical" target="_blank"><i className="fab fa-behance"></i></a>
            </div>
          </div>
        </div>
        <div className="func">
          <div className="work">
            <h3><i className="fa fa-briefcase"></i>Experience</h3>
            <ul>
              <li><span>Technical Consultant -<br/>Web Design</span><small>Fiserv</small><small>Apr 2018 - Now</small>
              </li>
              <li><span>Web Designer</span><small>Lynden</small><small>Jan 2018 - Apr 2018</small></li>
              <li><span>Intern - Web Design</span><small>Lynden</small><small>Aug 2017 - Dec 2017</small></li>
            </ul>
          </div>
          <div className="edu">
            <h3><i className="fa fa-graduation-cap"></i>Education</h3>
            <ul>
              <li><span>Bachelor of Science<br/>Web Design and Development</span><small>BYU-Idaho</small><small>Jan.
                2016
                - Apr. 2018</small></li>
              <li><span>Computer Science</span><small>Edmonds Community College</small><small>Sept. 2014 - Dec.
                2015</small></li>
              <li><span>High School</span><small>Henry M. Jackson High School</small><small>Jan. 2013 - Jun.
                2015</small></li>
            </ul>
          </div>
          <div className="skills-prog">
            <h3><i className="fas fa-code"></i>Programming Skills</h3>
            <ul>
              <li data-percent="95"><span>HTML5</span>
                <div className="skills-bar">
                  <div className="bar"></div>
                </div>
              </li>
              <li data-percent="90"><span>CSS3 & SCSS</span>
                <div className="skills-bar">
                  <div className="bar"></div>
                </div>
              </li>
              <li data-percent="60"><span>JavaScript</span>
                <div className="skills-bar">
                  <div className="bar"></div>
                </div>
              </li>
              <li data-percent="50"><span>jQuery</span>
                <div className="skills-bar">
                  <div className="bar"></div>
                </div>
              </li>
              <li data-percent="40"><span>JSON</span>
                <div className="skills-bar">
                  <div className="bar"></div>
                </div>
              </li>
              <li data-percent="55"><span>PHP</span>
                <div className="skills-bar">
                  <div className="bar"></div>
                </div>
              </li>
              <li data-percent="40"><span>MySQL</span>
                <div className="skills-bar">
                  <div className="bar"></div>
                </div>
              </li>
            </ul>
          </div>
          <div className="skills-soft">
            <h3><i className="fas fa-bezier-curve"></i>Software Skills</h3>
            <ul>
              <li data-percent="90">
                <svg viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45"></circle>
                  <circle className="cbar" cx="50" cy="50" r="45"></circle>
                </svg>
                <span>Illustrator</span><small></small>
              </li>
              <li data-percent="75">
                <svg viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45"></circle>
                  <circle className="cbar" cx="50" cy="50" r="45"></circle>
                </svg>
                <span>Photoshop</span><small></small>
              </li>
              <li data-percent="85">
                <svg viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45"></circle>
                  <circle className="cbar" cx="50" cy="50" r="45"></circle>
                </svg>
                <span>InDesign</span><small></small>
              </li>
              <li data-percent="65">
                <svg viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45"></circle>
                  <circle className="cbar" cx="50" cy="50" r="45"></circle>
                </svg>
                <span>Dreamweaver</span><small></small>
              </li>
            </ul>
          </div>
          <div className="interests">
            <h3><i className="fas fa-star"></i>Interests</h3>
            <div className="interests-items">
              <div className="art"><i className="fas fa-palette"></i><span>Art</span></div>
              <div className="art"><i className="fas fa-book"></i><span>Books</span></div>
              <div className="movies"><i className="fas fa-film"></i><span>Movies</span></div>
              <div className="music"><i className="fas fa-headphones"></i><span>Music</span></div>
              <div className="games"><i className="fas fa-gamepad"></i><span>Games</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
);

const AboutPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <AboutPageTemplate {...page} {...page.frontmatter} body={page.html}/>
  </Layout>
);

export default AboutPage;

export const pageQuery = graphql`
    query AboutPage($id: String!) {
        page: markdownRemark(id: { eq: $id }) {
            ...Meta
            ...Gallery
            html
            frontmatter {
                title
                template
                subtitle
                featuredImage
                section1
                section2
                video
                videoPoster
                videoTitle
                accordion {
                    title
                    description
                }
            }
        }
    }
`;
