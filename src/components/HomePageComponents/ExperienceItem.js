import React, { useEffect, useState } from 'react';

/** Component Displays Experience/Education item on Homepage */
function ExperienceItem(props) {

    const [months, setMonths] = useState()

    // Calculate Months based on the provided start and end months
    const calculateMonths = (type = 'month') => {
        if (props.isEducation) return
        const END_DAY = props.endDate != null ? props.endDate : new Date(Date.now())
        const START_DAY = props.startDate != null ? props.startDate : new Date(Date.now())
        let calculatedDateBy
        let returnDateDiff
        if (type === 'month') {
            const startMonth = START_DAY.getMonth()
            const endMonth = END_DAY.getMonth()
            calculatedDateBy = startMonth - endMonth
            returnDateDiff = Math.abs(
                calculatedDateBy + 12 * (START_DAY.getFullYear() - END_DAY.getFullYear())
            ) + 1
        } else {
            calculatedDateBy = Math.abs(START_DAY - END_DAY)
            returnDateDiff = Math.ceil(calculatedDateBy / (1000 * 60 * 60 * 24))
        }
        setMonths(returnDateDiff)
    }

    /** Return month and year as string from date object as sep. 2022 e.x */
    const getMonthYear = (date) => {
        if (date) {
            const dateStr = date.toDateString()
            const dateStrArr = dateStr.split(" ")
            return dateStrArr[1] + ". " + dateStrArr[3]
        } else {
            return "present"
        }

    }

    useEffect(() => {
        calculateMonths()
    }, [])

    return <>
        <div className='experienceItem'>
            {props.isEducation ?
                <>
                    <img src={require(`../../assets/images/logos/${props.image ? props.image : 'default.jpg'}`)} className='experienceImg' />
                    <div className='experienceDetail'>
                        <h4>{props.title} <small>{props.startDate} – {props.endDate}</small> </h4>
                        <h6>{props.desc} </h6>
                    </div>
                </> :
                <>
                    <img src={require(`../../assets/images/logos/${props.image ? props.image : 'default.jpg'}`)} className='experienceImg' />
                    <div className='experienceDetail'>
                        <h4>{props.title} <small>{getMonthYear(props.startDate)} – {getMonthYear(props.endDate)} ~ {months} months</small> </h4>
                        <h5>{props.company}, {props.location} · {props.type} </h5>
                        <p>{props.desc}</p>
                    </div>
                </>}
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
