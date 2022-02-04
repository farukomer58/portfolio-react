import React from 'react'

// Project Imports
import ExperienceItem from '../../components/HomePageComponents/ExperienceItem'
import PortfolioItem from '../../components/HomePageComponents/PortfolioItem'

// Icons
import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaInstagram,
    FaTwitter
} from 'react-icons/fa'

const Index = (props) => {
    return (
        <>
            <div className="hero-image">
                <div className='hero-container'>
                    <div className='hero-socials'>
                        <div className='hero-profile'></div>
                        <div className='hero-icons'>
                            <a target={"_blank"} href='https://github.com/farukomer58'><FaGithub /></a>
                            <a target={"_blank"} href='https://www.linkedin.com/in/omercitik/'><FaLinkedin /></a>
                            <a target={"_blank"} href='https://github.com/farukomer58'><FaFacebook /></a>
                            <a target={"_blank"} href='https://github.com/farukomer58'><FaInstagram /></a>
                            <a target={"_blank"} href='https://github.com/farukomer58'><FaTwitter /></a>
                        </div>
                        <button>Download CV</button>
                    </div>
                    <div className="hero-text">
                        <h1>I am Ömer</h1>
                        <i>And I am a Software Engineer</i>
                        <p>
                            Name: Omer Citik
                            - Date of Birth: 15/11/2001
                            - Location: Amsterdam
                            <br />
                            Emailadres: omer.citik@hva.nl
                            - Phone: +31 685298846
                            <br />
                            Linkedin: <a target={"_blank"} href='https://www.linkedin.com/in/omercitik/'>https://www.linkedin.com/in/omercitik/</a>
                            Github: <a target={"_blank"} href='https://github.com/farukomer58'>https://github.com/farukomer58</a>
                        </p>
                        <p>
                            Hi, I’m Ömer. Nice to meet you.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </div>

            {/* // Head section: ProfilePicture, QuickInfo
            // Summary */}

            {/* // Experience
            // Education */}
            <div className='section-container'>
                <section className='flex'>
                    <div className='experienceRow'>
                        <h2>Experience</h2>
                        {/* Title, Company, Type, Period, Location, Description */}
                        <ExperienceItem
                            image={"vatansoft.jfif"}
                            title={"Frontend Web Developer"}
                            startDate={null} // coming..
                            endDate={null} // coming..
                            company={"Vatansoft"}
                            location={"Istanbul/Turkiye"}
                            type={"Fulltime"}
                            desc={"Worked On Webpanels With: HTML/CSS, Javascript, React, React Material UI, Sass"}
                        />
                        <ExperienceItem
                            // image={"vatansoft.jfif"}
                            title={"Frontend Web Developer"}
                            startDate={null} // coming..
                            endDate={null} // coming..
                            company={"Vatansoft"}
                            location={"Istanbul/Turkiye"}
                            type={"Fulltime"}
                            desc={"Worked On Webpanels With: HTML/CSS, Javascript, React, React Material UI, Sass"}
                        />
                    </div>

                    <div className='experienceRow'>
                        <h2>Education</h2>

                        <ExperienceItem
                            // image={"vatansoft.jfif"}
                            title={"Frontend Web Developer"}
                            startDate={null} // coming..
                            endDate={null} // coming..
                            company={"Vatansoft"}
                            location={"Istanbul/Turkiye"}
                            type={"Fulltime"}
                            desc={"Worked On Webpanels With: HTML/CSS, Javascript, React, React Material UI, Sass"}
                        />
                    </div>
                </section>
            </div>

            {/* // Quick View of Portfolio with link to full Portfolio */}
            <div className='section-container reverse'>
                <section className='portfolioSection'>
                    <h2 className='text-center'>Portfolio</h2>
                    <div className='portfolioFilter'>
                        {/* Here Categories? Tags? Right aligned sort option */}
                        <button>
                            Web Development
                        </button>
                        <button>
                            Game Development
                        </button>
                    </div>
                    <div className='porfolioContainer'>
                        <PortfolioItem
                            image={null}
                            projectTitle={"Vanstreek groente en fruit"}
                            shortDesc={"This is a system that brings local suppliers together with customer"}
                            tags={[{ title: "webdev", id: 1 }, { title: "webdev", id: 1 }]}
                        />
                        <PortfolioItem
                            image={null}
                            projectTitle={"Vanstreek groente en fruit"}
                            shortDesc={"This is a system that brings local suppliers together with customer"}
                            tags={[{ title: "webdev", id: 1 }, { title: "webdev", id: 1 }]}
                        />
                        <PortfolioItem
                            image={null}
                            projectTitle={"Vanstreek groente en fruit"}
                            shortDesc={"This is a system that brings local suppliers together with customer"}
                            tags={[{ title: "webdev", id: 1 }, { title: "webdev", id: 1 }]}
                        />

                    </div>
                </section>
            </div>
        </>
    )
}

export default Index
