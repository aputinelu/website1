import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'


import About from '../../../components/About'
import ServiceArea from '../../../components/ServiceArea'
import Testmonial from "../../../components/Testmonial";
import TeamMember from '../../../components/TeamMember'
import CounterArea from '../../../components/CounterArea'

import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
// images
import about from '../../../images/about/2.jpg'


import './style.scss'

const aboutText = [
    { text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry%s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
]

const services = [
    {
        icon: 'flaticon-employee',
        title: 'Business Law',
        content: 'Lorem '
    },
    {
        icon: 'flaticon-thief',
        title: 'Criminal Law',
        content: 'Lorem '
    },
    {
        icon: 'flaticon-university-graduate-hat',
        title: 'Education Law',
        content: 'Lorem '
    },
]
const AboutPage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea " />
            </header>
           
          
            <About
                className="aboutArea aboutAreaStyleTwo"
                title="Why You Need Us"
                subTitle="We Are Expert"
                images={about}
                orderLast="order-last"
                /*videoId="XxVg_s8xAms"*/
                pragraphs={aboutText}
            />
            <ServiceArea
                className="ourServiceArea ourServiceAreaStyleTwo"
                title="How Can We Help You"
                subTitle="Area Of Practice"
                services={services}
            />
            <TeamMember
                title="Qualified Attorneys "
                subTitle="Meet Our Experts"
                className="teamArea"
                slider={true}
            />
            
            <FooterArea/>
        </Fragment>
    )
}
export default AboutPage