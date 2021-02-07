import React from 'react';

const ContactSuccess = () => {
    return (
        <div className="form-result modal-wrap" id="contactSuccess">
            <div className="modal-bg" />
            <div className="modal-content">
                <h4 className="modal-title"><i className="fa fa-check-circle" /> Success!</h4>
                <p>Your message has been sent to us.</p>
            </div>
        </div>
    )
}

export default ContactSuccess