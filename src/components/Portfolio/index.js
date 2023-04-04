import React, { useState } from 'react';
import Project from "../Project/index.js";

function Portfolio() {
    // Replace links with deployed projects and GitHub repos
    const [projects] = useState([
        {
            name: 'coding-quiz',
            description: 'I created a coding quiz with all the important coding syntax',
            link: "https://yasmineashoush5.github.io/coding-quiz/",
            repo: "https://github.com/yasmineashoush5/coding-quiz"
        },
        {
            name: 'Study-Buddies',
            description: 'This app is designed to help the students to study in a virtual setting',
            link: "https://study-buddies.herokuapp.com/",
            repo: "https://github.com/ssnakeoil/study-buddies"
        },
        {
            name: 'Weather-App',
            description: 'I built a weather app that tells a 5-day forecast in cities',
            link: "https://yasmineashoush5.github.io/My-weather-channel/",
            repo: "https://github.com/yasmineashoush5/My-weather-channel"
        },
        {
            name: 'React-Portfolio',
            description: 'I built my Portfolio with react technology',
            link: "",
            repo: "https://github.com/yasmineashoush5/React-Portfolio"
        },
        {
            name: 'TaskMaster',
            description: 'React/JavaScript/CSS',
            link: "https://github.com",
            repo: "https://github.com"
        },
    ]);

    return (
        <div>
            <div className="flex-row">
                {projects.map((project, idx) => (
                    <Project
                        project={project}
                        key={"project" + idx}
                    />
                ))}
            </div>
        </div>)
};


export default Portfolio;
