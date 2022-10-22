import React from 'react'

// Icons
import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaInstagram,
    FaTwitter
} from 'react-icons/fa'

function Footer() {
    return (<>
        {/* Footer */}
        <footer className='section-container footer'>
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
        </footer>
    </>
    )
}

export default Footer
