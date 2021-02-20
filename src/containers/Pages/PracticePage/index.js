import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import ServiceArea from '../../../components/ServiceArea'
import FooterArea from '../../../components/FooterArea'
// images


import './style.scss'

const aboutText = [
    { text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at ,' },
    { text: 'and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum' },
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


const PracticePage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea " />
            </header>
            
            <ServiceArea
                className="ourServiceArea ourServiceAreaStyleThree bgFFF"
                title="How Can We Help You"
                subTitle="Area Of Practice"
                services={services}
            />
            <FooterArea/>
        </Fragment>
    )
}
export default PracticePage