import React from 'react';
// import coverImage from '/assets/cover-images.jpg';

function Header(props) {

    return (
        <header className="flex-row space-between px-1">
            <h1>Yasmine Mohamed</h1>
            <img src={coverImage} alt="portfolio background"></img>
            {props.children}
        </header>
    );
}

export default Header;