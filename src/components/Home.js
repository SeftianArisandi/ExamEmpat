import React from 'react';
import Resume from './Resume';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Blog from './Blog';
import BlogSingle from './BlogSingle';
import Contact from './Contact';

import { useSelector } from 'react-redux';

const Home = () => {

    let data = useSelector(state => state.myData);

    return (  
        <section id="body" className="">
            <div className="container">
                
                {/* Home */}
                <div className="main-menu" id="main-menu">
                    <ul className="main-menu-list">
                        <div>  
                            <li><a href="#page-home" className="link-home">Home</a></li>
                            <li><a href="#page-resume" className="link-page">Resume</a></li>
                            <li><a href="#page-skills" className="link-page">Skills</a></li>
                            <li><a href="#page-portfolio" className="link-page">Portfolio</a></li>
                            <li><a href="#page-blog" className="link-page">Blog</a></li>
                            <li><a href="#page-contact" className="link-page">Contact</a></li>
                        </div>
                    </ul>
                </div>
                {/* Home */}
    
                {/* SECTION: vCard Body  */}
                <div className="section-vcardbody section-home" id="section-home">
                    
                    {/* Profile pic*/}
                    <div className="vcard-profile-pic">
                        <img src="photoProfile/SeftianArisandi.JPG" id="profile2" alt="" />
                        <img src="photoProfile/SeftianArisandi.JPG" id="profile1" className="profileActive" alt="" />
                    </div>
                    {/* /Profile pic */}
                    
                    {/* Description */}
                    <div className="vcard-profile-description">

                        {/* Profile title */}
                        <h1 className="profile-title">Hi, i'm <span className="color1">{data.name}</span></h1>
                        <h2 className="profile-subtitle">{data.job}</h2>
                        {/* /Profile Title */}

                        {/* Description Text */}
                        <hr className="hr1" />
                        <div className="vcard-profile-description-text">
                            <p>{data.jobDesc}</p>
                        </div>	
                        {/*/ Description Text */}

                        {/* Description feature */}
                        <div className="vcard-profile-description-feature">
                            {/* item */}
                            <div className="vcard-profile-description-ft-item">
                                <p>{`email: ${data.email} / phone ${data.phone}`}</p>
                            </div>
                            {/* item */}
                        </div>	
                        {/* /Description feature */}		
                    </div>
                    {/* /Description */}

                    {/* Footer */}		
                    <div className="vcard-footer">
                        {/* Social Icons */}
                        <div className="footer-social-icons">
                            <a href={data.instagram}><i className="fa fa-instagram" /></a>
                            <a href={data.facebook}><i className="fa fa-facebook" /></a>
                            <a href="#"><i className="fa fa-twitter" /></a>
                            <a href={data.linkedin}><i className="fa fa-linkedin" /></a>
                            <a href="#"><i className="fa fa-youtube" /></a>
                        </div>
                        {/* /Social Icons */}
                    </div>
                </div>
                {/* SECTION: vCard Body  */}

                {/* PAGE: RESUME */}
                <Resume />
    
                {/* SECTION: SKILLS*/}
                <Skills />
    
                {/* SECTION: PORTFOLIO*/}
                <Portfolio />
    
                {/* SECTION: BLOG*/}
                <Blog />
    
                {/* SECTION: BLOG SINGLE*/}
                <BlogSingle />
    
                {/* SECTION: CONTACT*/}
                <Contact />

            </div>  
        </section>
      )
}

export default Home