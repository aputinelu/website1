import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import TeamMember from '../../../components/TeamMember'
import FooterArea from '../../../components/FooterArea'
// images


import './style.scss'



const TeamPage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea " />
            </header>
         
            <TeamMember
                title="Qualified Attorneys "
                subTitle="Meet Our Experts"
                className="teamArea teamAreaStyleTwo"
                noGutters={true}
            />
           
            <FooterArea />
        </Fragment>
    )
}
export default TeamPage