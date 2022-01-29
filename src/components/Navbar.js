import React from 'react'

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <ul>
                    <li className='title'><a href="#">ÖmerFarukDev</a></li>
                    <li><a href="#" className='active'>Home</a></li>
                    <li><a className='item' href="#">About</a></li>
                    <li><a className='item' href="#">Portfolio</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
