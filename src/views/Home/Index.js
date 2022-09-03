import React, { useEffect, useState } from 'react'

// Icons
import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaInstagram,
    FaTwitter
} from 'react-icons/fa'

// Project Imports
import ExperienceItem from '../../components/HomePageComponents/ExperienceItem'
import PortfolioItem from '../../components/HomePageComponents/PortfolioItem'
import { PORTFOLIO_ITEMS } from '../../data/portfolioItems'
import { CATEGORIES, DEFAULT_CATEGORY } from '../../data/categories'

/** Home Page */
const Index = (props) => {

    const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORY)
    const [categories, setCategories] = useState(CATEGORIES)

    const [allPortfolioItems, setAllPortfolioItems] = useState(PORTFOLIO_ITEMS)
    const [showedPortfolioItems, setShowedPortfolioItems] = useState(allPortfolioItems)

    /** Function gets called on load of the Home page */
    useEffect(() => {
    }, [])


    const switchPortfolioCategory = (e, newSelectedCategory) => {
        e.preventDefault()
        setSelectedCategory(newSelectedCategory)
        console.log(newSelectedCategory)
        if (newSelectedCategory === CATEGORIES.All) {
            setShowedPortfolioItems(allPortfolioItems)
        } else {
            setShowedPortfolioItems(allPortfolioItems.filter(portfolioItem => portfolioItem.category === newSelectedCategory))
        }
    }

    return (
        <>
            {/* // Head section: ProfilePicture, QuickInfo Summary */}
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
                            Linkedin: <a target={"_blank"} href='https://www.linkedin.com/in/omercitik/'>https://www.linkedin.com/in/omercitik/</a><br />
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

            {/* Experience / Education */}
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
            <div className='horizontal-line'></div>

            {/* // Quick View of Portfolio with link to full Portfolio */}
            <div className='section-container reverse'>
                <section className='portfolioSection'>
                    <h2 className='text-center'>Portfolio</h2>
                    <div className='portfolioFilter'>
                        {/* Here Categories? Tags? Right aligned sort option */}
                        {Object.keys(categories).map((category, label) => (
                            <button key={category}
                                type="button"
                                className={selectedCategory === categories[category] ? "selected" : ""}
                                onClick={(e) => { switchPortfolioCategory(e, categories[category]) }}>
                                {categories[category]}
                            </button>)
                        )}
                    </div>
                    <div className='porfolioContainer'>
                        {showedPortfolioItems ? showedPortfolioItems.slice(0, 3).map((portfolioItemToShow, index) => {
                            return (
                                <PortfolioItem
                                    key={index}
                                    image={portfolioItemToShow.coverImage}
                                    projectTitle={portfolioItemToShow.title}
                                    shortDesc={portfolioItemToShow.shortDescription}
                                    tags={[{ title: "webdev", id: 1 }, { title: "webdev", id: 1 }]}
                                />
                            )
                        }
                        ) : "Hello"}
                    </div>
                </section>
            </div>
            <div className='horizontal-line'></div>

            {/* Contact Form */}
            <div className='section-container'>
                <section className='contactSection'>
                    <h2 className='text-center'>Contact</h2>
                    <form>
                        <div className="formRow">
                            <div className="form-group col-md-6">
                                <label htmlFor="nameSurname">Name Surname</label>
                                <input type="text" className="form-control" id="nameSurname" placeholder="Name Surname" />
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Email" />
                            </div>

                            <div className="form-group col-md-2">
                                <label htmlFor="phone">Phone</label>
                                <input type="text" className="form-control" id="phone" placeholder="Phone" />
                            </div>

                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" id="message" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </section>
            </div>
            <div className='horizontal-line'></div>

            {/* Footer */}
            <div className='section-container footer'>
                <section className=''>
                    {/* <h2 className='text-center'>Footer</h2> */}
                    <div className='centerDiv text-center'>
                        <p>&copy;Omer Faruk Citik - 2022</p>
                        <div className='hero-socials'>
                            <div className='hero-icons' style={{ width: "25%" }}>
                                <a target={"_blank"} href='https://github.com/farukomer58'><FaGithub /></a>
                                <a target={"_blank"} href='https://www.linkedin.com/in/omercitik/'><FaLinkedin /></a>
                                <a target={"_blank"} href='https://github.com/farukomer58'><FaFacebook /></a>
                                <a target={"_blank"} href='https://github.com/farukomer58'><FaInstagram /></a>
                                <a target={"_blank"} href='https://github.com/farukomer58'><FaTwitter /></a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Index
