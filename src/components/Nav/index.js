import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage,
    } = props;
    console.log(props)
    useEffect(() => {
        if (currentPage) {
            document.title = capitalizeFirstLetter(currentPage.name);
        }
    }, [currentPage]);

    return (
        <nav>
            <ul className="flex-row">
                {pages.map((page) => (
                    <li
                        className={`mx-5 ${currentPage?.name === page.name && 'navActive'
                            }`}
                        key={page.name}
                    >
                        <a
                            onClick={() => setCurrentPage(page)}
                        >
                            {capitalizeFirstLetter(page.name)}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;
