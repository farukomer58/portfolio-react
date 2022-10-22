import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import $ from 'jquery';
import parse from 'html-react-parser'

// Bootstrap
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';

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
import { EXPERIENCE, EDUCATION } from '../../data/experience'

import { truncate } from '../../functions/StringFunctions'

/** A custom hook that builds on useLocation to parse the query string for you. */
function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

/** Home Page */
const Index = (props) => {

    let navigate = useNavigate();

    const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORY)                  // Selected categrory (default= All)
    const [categories, setCategories] = useState(CATEGORIES)                                    // All Categories

    const [experienceItems, setExperienceItems] = useState(EXPERIENCE)                          // Experience Items
    const [educationItems, setEducationItems] = useState(EDUCATION)                             // Education items

    const [allPortfolioItems, setAllPortfolioItems] = useState(PORTFOLIO_ITEMS)
    //const [showedPortfolioItems, setShowedPortfolioItems] = useState(allPortfolioItems)         // Portfolio Items after filter           
    //const [narrowedPortfolioItems, setNarrowedPortfolioItems] = useState(showedPortfolioItems.slice(0, 3))
    const [narrowedPortfolioItems, setNarrowedPortfolioItems] = useState(allPortfolioItems)

    const [portfolioItemModalOpen, setPortfolioItemModalOpen] = useState(false)                 // State if modal is open or not
    const [selectedPortfolioItemDetails, setSelectedPortfolioItemDetails] = useState({})        // Selected portfolio object 

    // Query param states
    let query = useQuery();
    const [queryParams, setQueryParams] = useState(query.get("id"))
    const [searchParams, setSearchParams] = useSearchParams()

    /** Open portfolio model with correct information when pressed on PortfolioItem */
    const toggleModalPortfolioItem = (e, portfolioItemDetails) => {
        // load the correct portfolioDetails in state
        if (portfolioItemDetails.id) {
            setSearchParams({ id: portfolioItemDetails.id });
            setSelectedPortfolioItemDetails(portfolioItemDetails)

            // Open the modal
            setPortfolioItemModalOpen(true)
        }
    }

    /** Function gets triggered when Mpdalis closed */
    const onHideModal = (() => {
        setPortfolioItemModalOpen(false)
        // Delete each query param
        searchParams.delete('id');
        // Update state after
        setSearchParams(searchParams);
    })

    /** Function gets when query params changes and react to it, open corresponding portfolio item modal*/
    useEffect(() => {
        if (queryParams === null) { return; }
        try {
            const id = parseInt(queryParams)
            console.log("There is an queryParam, I should load the correct PortfolioItem with the id", queryParams)
            document.body.classList.add('modalActive');

            // Open Modal, with queryparam id portfolio item
            toggleModalPortfolioItem(null, allPortfolioItems[queryParams])
        } catch (error) {
            return;
        }

    }, [queryParams])

    /** Handles Navigation and filtering of portfolio categoeries */
    const switchPortfolioCategory = (e, newSelectedCategory) => {
        e.preventDefault()
        setSelectedCategory(newSelectedCategory)
        console.log(newSelectedCategory)
        if (newSelectedCategory === CATEGORIES.All) {
            setNarrowedPortfolioItems(allPortfolioItems)
        } else {
            const filteredArray = allPortfolioItems.filter(portfolioItem => portfolioItem.category === newSelectedCategory)
            console.log(filteredArray)
            setNarrowedPortfolioItems(oldState => filteredArray)
        }
    }

    return (
        <>
            {/* // Head section: ProfilePicture, QuickInfo Summary */}
            <div className="hero-section" id="about">
                <div className='hero-flexContainer'>
                    <div className='hero-socials'>
                        <div className='hero-profile'></div>
                        <div className='hero-icons'>
                            <a target={"_blank"} href='https://github.com/farukomer58'><FaGithub /></a>
                            <a target={"_blank"} href='https://www.linkedin.com/in/omercitik/'><FaLinkedin /></a>
                            <a target={"_blank"} href='https://github.com/farukomer58'><FaFacebook /></a>
                            <a target={"_blank"} href='https://github.com/farukomer58'><FaInstagram /></a>
                            <a target={"_blank"} href='https://github.com/farukomer58'><FaTwitter /></a>
                        </div>
                        <button style={{ margin: 0, width: "100%" }}>Download CV</button>
                        {/* TODO: link cv to it */}
                    </div>
                    <div className="hero-text">
                        <h1>I am Ömer Faruk</h1>
                        <i>And I am a Software Engineer</i>
                        <p>
                            Name: Ömer Faruk Citik
                            - Date of Birth: 15/11/2001
                            - Location: Amsterdam
                            <br />
                            Emailadres: of.c.58@hotmail.com
                            - Phone: +31 685298846
                            <br />
                            Linkedin: <a target={"_blank"} href='https://www.linkedin.com/in/omercitik/'>https://www.linkedin.com/in/omercitik/</a><br />
                            Github: <a target={"_blank"} href='https://github.com/farukomer58'>https://github.com/farukomer58</a>
                        </p>
                        <p>
                            I am Omer Citik, 20 years old and I am currently in my second year of the HBO-ICT: Software Engineering course at the Hogeschool van Amsterdam (HVA). I am very interested and passionate about developing software in general and programming. This since a young age. During my education, I participated in various software projects, and gained a lot of theoretical knowledge.
                            I cannot wait to apply my knowledge in real world and further improve my competencies and skills in software development. My profession is mainly in Java, JavaScript, Angular, Spring but I know of every language a piece and further development in a language is not hard for me.
                        </p>
                    </div>
                </div>
            </div>

            {/* Experience / Education */}
            <section className='flex experience-education-section'>
                <div className='experienceRow'>
                    <h2>Experience</h2>
                    {experienceItems ? experienceItems.map((experienceItem, index) => {
                        return (
                            <ExperienceItem
                                key={index}
                                image={experienceItem.image}
                                title={experienceItem.title}
                                startDate={experienceItem.startDate} // coming..
                                endDate={experienceItem.endDate} // coming..
                                company={experienceItem.company}
                                location={experienceItem.location}
                                type={experienceItem.type}
                                desc={experienceItem.desc}
                                isEducation={false}
                            />
                        )
                    }
                    ) : ""}
                </div>
                <div className='educationRow'>
                    <h2>Education</h2>
                    {educationItems ? educationItems.map((educationItem, index) => {
                        return (
                            <ExperienceItem
                                key={index}
                                image={educationItem.image}
                                title={educationItem.title}
                                startDate={educationItem.startDate} // coming..
                                endDate={educationItem.endDate} // coming..
                                company={educationItem.company}
                                location={educationItem.location}
                                type={educationItem.type}
                                desc={educationItem.desc}
                                isEducation={true}
                            />
                        )
                    }
                    ) : ""}
                </div>
            </section>
            <div className='horizontal-line'></div>

            {/* // Quick View of Portfolio with link to full Portfolio */}
            <section className='portfolioSection' id="portfolio">
                <h2 className='text-center'>Portfolio</h2>
                <div className='portfolioFilter'>
                    {/* Here Categories? Tags? Right aligned sort option */}
                    {Object.keys(categories).map((category, label) => (
                        <button key={category}
                            type="button"
                            className={selectedCategory === categories[category] ? "selected" : ""}
                            style={{ width: "100%" }}
                            onClick={(e) => { switchPortfolioCategory(e, categories[category]) }}>
                            {categories[category]}
                        </button>)
                    )}
                </div>
                <div className='porfolioContainerFlex'>
                    <div className='porfolioContainer'>
                        {narrowedPortfolioItems ? narrowedPortfolioItems.map((portfolioItemToShow, index) => {
                            return (
                                <PortfolioItem
                                    key={index}
                                    portfolioItemToShow={portfolioItemToShow}
                                    toggleModalPortfolioItem={toggleModalPortfolioItem}
                                    tags={[{ title: "webdev", id: 1 }, { title: "webdev", id: 1 }]}
                                />
                            )
                        }
                        ) : "Hello"}
                    </div>
                </div>
            </section>
            <div className='horizontal-line'></div>

            {/* Contact Form */}
            {/* <section className='contactSection' id="contact">
                <h2 className='text-center'>Contact</h2>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label htmlFor="firstName">Firstname</label>
                            <input type="text" className="form-control" id="firstName" placeholder="Firstname" />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="lastName">Lastname</label>
                            <input type="text" className="form-control" id="lastName" placeholder="Lastname" />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Email" />
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" id="contactMessage" rows="3" placeholder='Message...'></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
            </section> */}

            {/* Modal for the Portfolio Detail */}
            <Modal
                show={portfolioItemModalOpen}
                onHide={() => onHideModal()}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        {selectedPortfolioItemDetails.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ height: "85vh", width: "100%" }}>

                    {/* row 1 - image   basic info */}
                    {/* row 2 - description so */}
                    <div className="row">
                        <div className="col-md-9 ml-auto">
                            <div className="col-md-12 ml-auto">
                                <Carousel className='customCarousel'>
                                    {/* {console.log(selectedPortfolioItemDetails.image ? selectedPortfolioItemDetails.image : " no imaghess")} */}
                                    {selectedPortfolioItemDetails.image ? selectedPortfolioItemDetails.image.map((imageItem, index) => {
                                        return (
                                            <Carousel.Item key={index}>
                                                <img
                                                    className="d-block w-100"
                                                    src={imageItem}
                                                    alt="First slide"
                                                />
                                                {/* <Carousel.Caption>
                                                    <h3>First slide label</h3>
                                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                                </Carousel.Caption> */}
                                            </Carousel.Item>
                                        )
                                    }) : null}
                                </Carousel>
                            </div>
                            <div className="col-md-12 ml-auto" >
                                <p>{parse(`${selectedPortfolioItemDetails.description}`)}</p>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="col-md-3 ml-auto">
                            <h3 className='text-center'>{selectedPortfolioItemDetails.title}</h3>
                            {selectedPortfolioItemDetails.shortDescription}
                            <ul>
                                <li>Client: {selectedPortfolioItemDetails.client}</li>
                                <li>Stardate: {selectedPortfolioItemDetails.started}</li>
                                <li>Status: {selectedPortfolioItemDetails.status}</li>
                                <li>Ended: {selectedPortfolioItemDetails.ended}</li> {/* TODO: Show only when status is 'finished' */}
                                <li style={{ whiteSpace: "nowrap" }}>Github: <a target={"_blank"} href={selectedPortfolioItemDetails.github}>{truncate(selectedPortfolioItemDetails.github, 25)}</a></li>

                                <a target="_blank" disabled={selectedPortfolioItemDetails.demo} href={selectedPortfolioItemDetails.demo} style={{ width: "75%", textAlign: "0 auto" }} type="button"><button style={{ width: "100%" }} >Demo</button></a>

                                <hr />

                                {selectedPortfolioItemDetails.technologies ? selectedPortfolioItemDetails.technologies.map((technology, index) => (
                                    <li key={index}>{technology}</li>
                                )) : null}
                                {selectedPortfolioItemDetails.tags ? selectedPortfolioItemDetails.tags.map((tag, index) => (
                                    <li key={index}>{tag}</li>
                                )) : null}

                                <i>{selectedPortfolioItemDetails.category}</i>
                            </ul>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        </>
    )
}

export default Index
