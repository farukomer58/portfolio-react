import React from 'react';

function PortfolioItem({portfolioItemToShow, tags, toggleModalPortfolioItem}) {

    return <>
        <div className='portfolioItem' onClick={(e)=>toggleModalPortfolioItem(e, portfolioItemToShow)}>
            {/* <img src={require(`../../assets/images/logos/${props.image ? props.image : 'default.jpg'}`)} className='experienceImg' /> */}
            <img src={portfolioItemToShow.coverImage} className='experienceImg' />
            <h3>{portfolioItemToShow.title}</h3>
            <p>{portfolioItemToShow.shortDescription}</p>

        </div>
    </>;
}

export default PortfolioItem;

// Showcase Image       - image             e.c - null (for now)
// Project title        - projectTitle      e.c - Vanstreek groente en fruit
// Project Short Desc   - shortDesc         e.c - This is a system that brings local suppliers together with customer
// Tags                 - tags              e.c - [{title:"webdev", id:1}, {title:"webdev", id:1}]
