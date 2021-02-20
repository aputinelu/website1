import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo/logo.png'
import './style.scss'
const footerLinks = [
    {
        title: 'Quick Link', menus: [
            { name: 'Home', route: '/' },
            { name: 'Practice Area', route: 'practice' },
            { name: 'Our Team', route: 'team' },
            { name: 'Our Blog', route: 'blog' },
        ]
    },
    {
        title: 'Practice Area', menus: [
            { name: 'Family Law', route: 'home' },
            { name: 'Criminal Law', route: 'home' },
            
        ]
    },
    {
        title: 'Contact Us', menus: [
            { name: 'Head Office Address' },
            { name: 'Bd. Corneliu Coposu nr. 7, bl. 104, sc. 2, et. 1, ap. 33, Sector 3', },
            { name: 'Bucharest', },
            { name: 'Phone: 0799 286 228', },
            { name: 'Email: office@haratau.ro', },
        ]
    },
]

const FooterArea = () => {
    return (
        <footer className="footerArea">
            <div className="footerTopArea">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footerLogo">
                                <Link to="/">
                                    <img src={logo} alt="" />
                                </Link>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature</p>
                            </div>
                        </div>
                        {footerLinks.map((menu, i) => (
                            <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footerWrap">
                                    <h3>{menu.title}</h3>
                                    <ul>
                                        {menu.menus.map((item, i) => (
                                            <li key={i}>{item.route ? <Link to={`/${item.route}`}>{item.name}</Link> : `${item.name}`}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="footerBottomArea">
                <div className="container">
                    <div className="footerBottomContent">
                        <div className="row">
                          
                            <div className="col-md-4 col-sm-2 col-12">
                                <ul className="socialListFooter">
                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default FooterArea