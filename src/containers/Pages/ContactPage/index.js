import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'

import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
import Form from '../../../components/Form'
// images


import './style.scss'



const ContactPage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea " />
            </header>
            
            <div className="contactusPageArea">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="contactUsInfo">
                                <h3>Our Contacts</h3>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                </p>
                                <h4>Address</h4>
                                <span> Bd Corneliu Coposu nr. 7, bl. 104, sc. 2, et. 1, ap. 33, Bucharest</span>
                                <h4>Phone</h4>
                                <span>0-123-456-7890</span>
                                <span>0-123-456-7890</span>
                                <h4>Email</h4>
                                <span>office@haratau.ro</span>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="contactUSForm">
                                <h3>Quick Contact Form</h3>
                                <Form
                                    addressInfo={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterArea />
        </Fragment>
    )
}
export default ContactPage