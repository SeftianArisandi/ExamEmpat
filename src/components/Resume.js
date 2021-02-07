import React from 'react';

import { useSelector } from 'react-redux';

const Resume = () => {

    let dataEdu = useSelector(state => state.resumeEdu);
    let dataWorkEx = useSelector(state => state.resumeWorkEx);

    return (
        <div className="section-vcardbody section-page" id="page-resume">
                    
            {/* SECTION: Education */}
            <div className="section-education">

                {/* Section title */}
                <h2 className="section-title">Resume</h2>
                {/* /Section title */}
        
                {/* Buttons */}
                <div className="resume-buttons header-page-buttons">
                    {/* Download CV button */}
                    <a href="#" className="btn btn-default btn-default2"><i className="fa fa-download" />&nbsp; Download my resume</a>
                    {/* /Download CV button */}
                    {/* Get in Touch button */}
                    <a href="#page-contact" className="btn btn-default btn-default2 link-page"><i className="fa fa-download" />&nbsp;  Get in Touch</a>
                    {/* /Get in Touch button */}
                </div>
                {/* /Buttons */}
        
                <h2 className="section-title2"><i className="fa fa-university" />&nbsp; Education</h2>
                
                {dataEdu.map((value, index) => {
                    return (
                        <div className="resume-item" key={index}>
                            {/* Graduation title */}
                            <h3 className="section-item-title-1">{value.educationName}</h3>
                            {/* /Graduation title */}
                            {/* Graduation time */}
                            <h4 className="graduation-time">{value.educationTime}</h4>
                            {/* /Graduation time */}
                            {/* content */}
                            <div className="graduation-description">
                                <p>{value.educationDesc}</p>
                            </div>
                            {/* /Content */}
                        </div>
                    )
                })}     
                
            </div>
            {/*/ SECTION: Education */}
        
            {/* SECTION: WORK EXPERIENCE */}
            <div className="section-education">
                <h2 className="section-title2"><i className="fa fa-flag" />&nbsp; Work Experience</h2>
                
                {dataWorkEx.map((value, index) => {
                    return (
                        <div className="resume-item" key={index}>
                            {/* Work Place */}
                            <h3 className="section-item-title-1">{value.WEplace}</h3>
                            {/* /Work Place */}
                            {/* Job Time */}
                            <h4 className="job">{value.WEjob} <span className="job-date">{value.WEtime}</span></h4>
                            {/* /Job Time*/}
                            {/* content */}
                            <div className="graduation-description">
                                <p>{value.WEdesc}</p>
                            </div>
                            {/* /Content */}
                        </div>
                    )
                })}

                {/* Resume Item */}
                
                {/* /Resume Item */}
            </div>
            {/*/ SECTION: WORK EXPERIENCE */}
        
            <h2 className="section-title2"><i className="fa fa-commenting" />&nbsp; Testimonials</h2>
                    
            {/* Testimonials */}
            <div className="testimonials">
                {/* Testimonial Slides */}
                <div className="testimonial-slides" id="testimonial-carousel">

                    {/* item */}
                    <div className="testimonial-item">
                        {/* Testimonial Content */}
                        <div className="testimonial-content">
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat malesuada aliquet. Morbi vulputate nisl eget adipiscing consequat. Cras arcu tortor, ornare vel libero et, sagittis adipiscing leo. Aenean eget."</p>
                        </div>						
                        {/* /Testimonial Content */}	
                        {/* Testimonial Author */}
                        <div className="testimonial-credits">
                            {/* picture */}
                            <div className="testimonial-picture">
                                <img src="img/team2.jpg" alt="" />
                            </div>							
                            {/* /picture */}
                            <p className="testimonial-author">Melissa Alvarez</p>
                            <p className="testimonial-firm">Trexus Co.</p>
                        </div>
                        {/* /Testimonial Author */}								
                    </div>
                    {/* /item */}

                    {/* item */}
                    <div className="testimonial-item">
                        {/* Testimonial Content */}
                        <div className="testimonial-content">
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat malesuada aliquet. Morbi vulputate nisl eget adipiscing consequat. Cras arcu tortor, ornare vel libero et, sagittis adipiscing leo. Aenean eget."</p>
                        </div>						
                        {/* /Testimonial Content */}	
                        {/* Testimonial Author */}
                        <div className="testimonial-credits">
                            {/* picture */}
                            <div className="testimonial-picture">
                                <img src="img/team1.jpg" alt="" />
                            </div>							
                            {/* /picture */}
                            <p className="testimonial-author">John Rex</p>
                            <p className="testimonial-firm">DotRex Co.</p>
                        </div>
                        {/* /Testimonial Author */}								
                    </div>
                    {/* /item */}

                    {/* item */}
                    <div className="testimonial-item">
                        {/* Testimonial Content */}
                        <div className="testimonial-content">
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat malesuada aliquet. Morbi vulputate nisl eget adipiscing consequat. Cras arcu tortor, ornare vel libero et, sagittis adipiscing leo. Aenean eget."</p>
                        </div>						
                        {/* /Testimonial Content */}	
                        {/* Testimonial Author */}
                        <div className="testimonial-credits">
                            {/* picture */}
                            <div className="testimonial-picture">
                                <img src="img/team3.jpg" alt="" />
                            </div>							
                            {/* /picture */}
                            <p className="testimonial-author">Jhonathan Smith</p>
                            <p className="testimonial-firm">RedWings Co.</p>
                        </div>
                        {/* /Testimonial Author */}								
                    </div>
                    {/* /item */}

                </div>
                {/* Testimonial Slides */}
            </div>
            {/* /testimonials */}
        
            <div className="page-footer">
                {/* Buttons */}
                <div className="resume-buttons">
                    {/* Download CV button */}
                    <a href="#" className="btn btn-default btn-default2"><i className="fa fa-download" />&nbsp; Download my resume</a>
                    {/* /Download CV button */}
                    {/* Get in Touch button */}
                    <a href="#page-contact" className="btn btn-default btn-default2 link-page"><i className="fa fa-download" />&nbsp;  Get in Touch</a>
                    {/* /Get in Touch button */}
                </div>
                {/* /Buttons */}
                {/* Quote */}
                <p className="footer-quote">"The best way to predict the future is to create it" <br /><i>Peter Drucker</i></p>
                {/* /Quote */}
            </div>
        </div>
    )
}

export default Resume