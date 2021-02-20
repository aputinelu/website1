import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import FooterArea from '../../../components/FooterArea'
import Portfolio from '../../../components/Portfolio'
import ContactArea from '../../../components/ContactArea'

// images
import breadcumb from '../../../images/breadcumb/1.jpg'
import team from '../../../images/Attorneys-single/1.jpg'
import portfolio1 from '../../../images/studies/1.jpg'
import portfolio2 from '../../../images/studies/2.jpg'
import portfolio3 from '../../../images/studies/3.jpg'

import './style.scss'

const teamMembarInfo = [
    { level: 'Positon: ', text: 'Example Lawyer' },
    { level: 'Practice Area: ', text: 'Family Lawyer, Criminal Defence, Personal Injury' },
    { level: 'Experience: ', text: '10 Years' },
    { level: 'Address: ', text: 'Bucuresti' },
    { level: 'Phone: ', text: '123.145.412' },
    { level: 'Email: ', text: 'youremail@gmail.com' },
]
const teamContents = [
    'University 1',
    'University 2',
]

const portfolioItem = [
    { images: portfolio1, title: 'General Service', subtitle: 'Corporate' },
    { images: portfolio2, title: 'Personal Issue', subtitle: 'General' },
    { images: portfolio3, title: 'Business Accounting', subtitle: 'Business' },
]

const SingleTeamPage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea " />
            </header>
            <div className='singleTeamArea'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 col-12">
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <div className="singleTeamImgWrap">
                                        <div className="singleTeamImg">
                                            <img src={team} alt="" />
                                        </div>
                                        <h4>Lily Watson</h4>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="singleTeamContent">
                                        <h4>Important Information</h4>
                                        <ul className="teamMembarInfo">
                                            {teamMembarInfo.map((teamInfo, i) => (
                                                <li key={i}>
                                                    <span>{teamInfo.level}</span>
                                                    {teamInfo.text}
                                                </li>
                                            ))}
                                        </ul>
                                        <ul className="socialShare">
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="singleTeamInfo">
                                        <h3>Personal Experience</h3>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,</p>
                                        <h5>Education</h5>
                                        <ul>
                                            {teamContents.map(teamContent => (
                                                <li key={teamContent}>{teamContent}</li>
                                            ))}
                                        </ul>
                                        <h5>Language</h5>
                                        <span>French(fluent), English (fluent), Greek , chinese.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Portfolio
                title="Participated Case"
                subTitle="Here Our Best Work"
                fullWidth={true}
                portfolioItem={portfolioItem}
                className="portfolioArea portfolioAreaStyleFour"
            /> */}
            <ContactArea
                className="contactArea"
            />
           
            <FooterArea />
        </Fragment>
    )
}
export default SingleTeamPage