import React from 'react';

function Footer() {


    const icons = [
        {
            name: "GitHub",
            link: "https://github.com/yasmineashoush5/"
        },


    ]

    return (
        <footer className="flex-row px-1">
            {icons.map(icon =>
            (
                <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
            )
            )}
        </footer>
    );
}

export default Footer;