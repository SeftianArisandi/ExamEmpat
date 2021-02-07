import React from 'react';

const ContactError = () => {
    return (
        <div className="form-result modal-wrap" id="contactError">
            <div className="modal-bg" />
            <div className="modal-content">
                <h4 className="modal-title"><i className="fa fa-times" /> Error</h4>
                <p>There was an error sending your message.</p>
            </div>
        </div>
    )
}

export default ContactError