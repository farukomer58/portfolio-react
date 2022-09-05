import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import $ from 'jquery';

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

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

/** Home Page */
const Index = (props) => {

    let navigate = useNavigate();

    const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORY)
    const [categories, setCategories] = useState(CATEGORIES)

    const [allPortfolioItems, setAllPortfolioItems] = useState(PORTFOLIO_ITEMS)
    const [showedPortfolioItems, setShowedPortfolioItems] = useState(allPortfolioItems)

    const [portfolioItemModalOpen, setPortfolioItemModalOpen] = useState(false)
    const [selectedPortfolioItemDetails, setSelectedPortfolioItemDetails] = useState({})
    let query = useQuery();
    const [queryParams, setQueryParams] = useState(query.get("portfolioId"))

    const toggleModalPortfolioItem = (e, portfolioItemDetails) => {
        console.log("pressed on itemm....")
        console.log(portfolioItemDetails)
        // load the correct portfolioDetails in state
        setSelectedPortfolioItemDetails(portfolioItemDetails)
        // Open the modal
        setPortfolioItemModalOpen(true)


        // navigate({
        //     pathname: '/',
        //     search: '?sort=date&order=newest',
        //   });

        // if modal open 
        // then navigate to '/'

        // else 
        // navigate to path '/' with the portofolioItem id in the query param
        // setQueryParams, in the useEffect let the modal open the correct item
        // 
    }

    /** Function gets when query params changes and react to it */
    useEffect(() => {
        if (queryParams === null) { return; }
        console.log("There is an queryParam, I should load the correct PortfolioItem with the id", queryParams)
        document.body.classList.add('modalActive');

        // Open Modal, with queryparam id portfolio item

    }, [queryParams])

    /** Handles Navigation and filtering of portfolio categoeries */
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
                                    portfolioItemToShow={portfolioItemToShow}
                                    toggleModalPortfolioItem={toggleModalPortfolioItem}
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

            {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button> */}

            <Button variant="primary" onClick={() => setPortfolioItemModalOpen(true)}>
                Custom Width Modal
            </Button>

            <Modal
                show={portfolioItemModalOpen}
                onHide={() => setPortfolioItemModalOpen(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        {selectedPortfolioItemDetails.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ height: "85vh" }}>

                    {/* row 1 - image   basic info */}
                    {/* row 2 - description so */}
                    <div className="row">
                        <div className="col-md-9 ml-auto">
                            <div className="col-md-12 ml-auto">
                                <Carousel className='customCarousel'>
                                    {console.log(selectedPortfolioItemDetails.image ? selectedPortfolioItemDetails.image : " no imaghess")}
                                    {selectedPortfolioItemDetails.image ? selectedPortfolioItemDetails.image.map((imageItem) => {
                                        return (
                                            <Carousel.Item key={imageItem}>
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
                                <p>{selectedPortfolioItemDetails.description}</p>
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
                                <li>Github: {selectedPortfolioItemDetails.github}</li>

                                <a target="_blank" disabled={selectedPortfolioItemDetails.demo} href={selectedPortfolioItemDetails.demo} type="button">Demo</a>

                                <hr />

                                {selectedPortfolioItemDetails.technologies ? selectedPortfolioItemDetails.technologies.map(technology => (
                                    <li>{technology}</li>
                                )) : null}
                                {selectedPortfolioItemDetails.tags ? selectedPortfolioItemDetails.tags.map(tag => (
                                    <li>{tag}</li>
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
