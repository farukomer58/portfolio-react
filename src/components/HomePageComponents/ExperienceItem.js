import React from 'react';

function ExperienceItem(props) {

    // Calculate Months based on the provided start and end months
    const calculateMonths = (start, end) => {

    }

    return <>
        <div className='experienceItem'>
            <img src={require(`../../assets/images/logos/${props.image ? props.image : 'default.jpg'}`)} className='experienceImg' />
            <div className='experienceDetail'>
                <h3>{props.title} <small>sep. 2021 – jan. 2022 ~ 5 months</small> </h3>
                <h4>{props.company}, {props.location} · {props.type} </h4>
                <p>{props.desc}</p>
            </div>
        </div>
    </>;
}

export default ExperienceItem;

// vatansoft.jfif - image
// Frontend Web Developer - Intern - title
// Vatansoft - company
// Istanbul/Turkiye - location
// Fulltime - type
// Worked On Webpanels With: HTML/CSS, Javascript, React, React Material UI, Sass - desc
