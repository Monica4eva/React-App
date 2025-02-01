import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

function App() {
    const headerText = "Welcome to My Awesome React App";
    const footerText = "Copyright 2025 - Social Connect PTY LTD - All Rights Reserved";

    return (
        <div className="app-container">
            <Header title={headerText} />
            <Content />
            <Footer text={footerText} />
        </div>
    );
}

export default App;