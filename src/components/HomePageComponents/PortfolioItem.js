import React from 'react';

function PortfolioItem(props) {

    return <>
        <div className='portfolioItem' onClick={props.toggleModalPortfolioItem}>
            {/* <img src={require(`../../assets/images/logos/${props.image ? props.image : 'default.jpg'}`)} className='experienceImg' /> */}
            <img src={props.image} className='experienceImg' />
            <h3>{props.projectTitle}</h3>
            <p>{props.shortDesc}</p>
            <div className='portfolioItemTags'>
                {props.tags?.map((tag, index) => {
                    return <button key={tag + index}>
                        {tag.title}
                    </button>
                })}
            </div>
        </div>
    </>;
}

export default PortfolioItem;

// Showcase Image       - image             e.c - null (for now)
// Project title        - projectTitle      e.c - Vanstreek groente en fruit
// Project Short Desc   - shortDesc         e.c - This is a system that brings local suppliers together with customer
// Tags                 - tags              e.c - [{title:"webdev", id:1}, {title:"webdev", id:1}]
