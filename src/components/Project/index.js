import React from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';
import Portfolio from '../Portfolio';
import coverImage from '../../assets/screenshots/Portfolio 2023-04-02.png';
function Project({ project }) {
    console.log(project)
    const { name, repo, link, description } = project;

    return (
        <div className="project" key={project}>
            {/* <img
                src={coverImage}
                alt={removeHyphensAndCapitalize(name)}
                className="project-bg"
            /> */}
            <div className="project-text">
                <h3>
                    <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
                    <a href={repo}>
                        <i className="fab fa-github"></i>
                    </a>
                </h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Project;