import React from 'react'
import './style.scss'
const HeaderTop = props => {
    return (
        <div className={props.className}>
            <div className="container">
                <div className="headerTopMainWrapper">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 col-12 col-lg-5">
                            <ul className="d-flex accountLoginArea">
                                <li><i className="fa fa-map-marker" aria-hidden="true"></i> <a href= "https://goo.gl/maps/CktYf7airqz9c7wC9" target="_blank"> Bd. Corneliu Coposu nr. 7, bl. 104, sc. 2, et. 1, ap. 33, Bucharest </a> </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-sm-12 col-12 col-lg-5">
                            <ul className="headerContact">
                                <li><i className="fa fa-phone"></i>+40 799 AVOCAT (0799 286 228)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeaderTop