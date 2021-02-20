import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import HeroSlider from '../../../components/HeroSlider'
import About from '../../../components/About'
import ServiceArea from '../../../components/ServiceArea'
import ContactArea from '../../../components/ContactArea'
import TeamMember from '../../../components/TeamMember'

import FooterArea from '../../../components/FooterArea'
// images
import about from '../../../images/about/2.jpg'
import signature from '../../../images/about/1.png'



const aboutText = [
    { text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at ,' },
    { text: 'and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum' },
]

const heroSliders = [
    {
        images: 'slideWrapperOne',
        title: 'We Fight For Your Justice',
        subTitle: '',
        text: 'The Law Firm',
        button: 'Contact us now'
    },
    {
        images: 'slideWrapperTwo',
        title: 'We Fight For Your Justice',
        subTitle: '',
        text: 'The  Law Firm',
        button: 'Contact us now'
    },
]

const services = [
    {
        icon: 'flaticon-employee',
        title: 'Business Law',
        content: 'Lorem Ipsum'
    },
    {
        icon: 'flaticon-thief',
        title: 'Criminal Law',
        content: 'Lorem Ipsum'
    },
    {
        icon: 'flaticon-university-graduate-hat',
        title: 'Education Law',
        content: 'Lorem Ipsum'
    },
]


const HomePageOne = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea" />
            </header>
            <HeroSlider 
                sliders={heroSliders}
                className="heroSliderArea" />
           
            <About
                className="aboutArea"
                title="About Us"
                images={about}
                signature={signature}
                pragraphs={aboutText}
            />
            <ServiceArea
                className="ourServiceArea"
                title="How Can We Help You"
                subTitle="Area Of Practice"
                services={services}
            />
    
            <ContactArea
                className="contactArea"
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
export default HomePageOne