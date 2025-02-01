import React from 'react';

function Footer(props) {
    return (
        <footer className="app-footer">
            <p>{props.text}</p>
        </footer>
    );
}

export default Footer;