/**
 * @author  Daniel Nicolas Gisolfi <Daniel.Gisolfi1@marist.edu>
 * @version 1.0.0
 * @license The MIT License (MIT)
 */ 


resume = {
    about: "Daniel Gisolfi is a Software Developer who has accrued a broad skill set across the software stack by utilizing his passion for problem solving and exploring new technologies. By developing solutions ranging from full-stack websites to grammar design and implementation, he uses his ever growing computing tool belt to bring new perspectives and novel insights to every challenge he faces. Daniel is persistent and resourceful by striving to continually develop, learn, and lead in the rapidly evolving computing industry.",
    experience: [
        {
            title: "Software Developer, System Z Test and Automation",
            company: "IBM",
            years: "July 2020 - Present",
            description: null,
            bullets: [
                "Created a custom language-agnostic front-end compiler for generating test programs from a CTD model.",
                "Assisted in porting IBM Clai (Command Line Artificial Intelligence) to z/OS.",
                "Deployed and manage instances of Nexus3, Jenkins, and other applications via Helm.",
                "Worked in a small team to develop a quantitative tool to parse dependency trees, Licenses, and gather test cases to assess the complexity of a port to z/OS.",
                "Created helm charts for applications developed in house to enable rapid deployment.",
                "Lead a team in developing a standardized tracking pipeline for internal tooling which allows developers to track feature usage, user engagement, errors, etc. to enable continuous delivery.",
                "Built multiple ReactJS based UI's utilizing the IBM Carbon Design System."
            ]
        },
        {
            title: "Co-op Software Developer & Devops, System Z Test and Automation",
            company: "IBM",
            years: "May 2019 – July 2020",
            description: null,
            bullets: [
                "Designed and configured a Kubernetes Cluster on RHEL and deployed multiple applications as Docker containers.",
                "Developed multiple Python Swagger APIs to orchestrate the deployment of Parallel Sysplex clusters and LPARs on z/OS.",
                "Created a High Interaction Honeypot simulating a server within a Docker container which relays real-time data to a CouchDB.",
                "Lead agile development of a Swagger API for a generic customer satisfaction survey tool that replaced legacy mainframe applications using React Carbon and NodeJS Connect."
            ]
        },
        {
            title: "Software Developer, Honeypot and Blockchain Researcher",
            company: "IBM Joint Study",
            years: "Jan 2018 – May 2019",
            description: "Worked as a researcher on a wide range of technologies for the IBM joint study with Marist College.",
            bullets: [
                "Researched malicious attacks and possible vulnerabilities by creating honeypots to gather attack data.",
                "Designed and developed a system of Honeypot repositories supporting Cybersecurity research associated with multiple languages and protocols.",
                "Created a real-time Python-based data pipeline to provide machine learning and data analytics tools with malicious attack data.",
                "Developed a Python-based data analytics tool for graphing, plotting, and analyzing incoming attacks across multiple Honeypots.",
                "Researched distributed ledger technologies and developed a public/permissionless blockchain asset to explore the applicability of blockchain as a data management utility.",
                "Developed a real-time D3 Visualization tool for monitoring the active peer nodes in a blockchain network.",
                "Docker and Kubernetes SME for the IBM/Marist Joint Study; Containerized and deployed all projects in Docker containers using Kubernetes."
            ]
        },
        {
            title: "Help Desk Operator",
            company: "Marist College IT Client Services",
            years: "June 2016 - May 2018",
            description: "Help Desk IT Client Services - Support college faculty, staff, and students in person, on the phone, and via e-mail.",
            bullets: [
                "Provide excellent customer service.",
                "Reset user's passwords.",
                "Conduct problem determination for technology across campus.",
                "Train Incoming IT support student employees.",
            ]
        }
    ],
    education: [
        {
            name: "Marist College",
            degree: "B.S. in Computer Science",
            years: "August 2016 - May 2020"
        },
        {
            name: "John Jay Senior High School",
            degree: "Advanced Regents Degree",
            years: "September 2012 - June 2016"
        },
    ],
    patents: [
        {
            title: "Using big code to construct code conditional truth tables",
            short: "Using Big Code to construct Code Conditional Truth Tables to test its uniqueness and hi-lite redundant areas.",
            filed: "Apr 07, 2020",
            id: "P201907102US01"
        },
        {
            title: "Subject matter expert identification and code analysis based on a probabilistic filter",
            short: "Bloom filter for subject matter expert tree optimization.",
            filed: "Dec 14, 2020",
            id: "P202008168US01"
        },
        {
            title: "System testing infrastructure with hidden variable, hidden attribute, and hidden value detection",
            short: "Hidden variable detection with heytings algebra.",
            filed: "Dec 15, 2020",
            id: "P202005755US01"
        },
        {
            title: "Using eigenvalues that represent heytings algebraic mappings to verify test oracle(template) quality over multiple n-wise covering arrays.",
            short: "Verification of software test quality using hidden variables",
            filed: "Dec 15, 2020",
            id: "P202005756US01"
        },
        {
            title: "System testing infrastructure with hidden variable, hidden attribute, and hidden value detection",
            shoert: "Discovery of Hidden Attribute Values in CTD Models using Pseudo Boolean Algebra (Heytings).",
            filed: "Dec 15, 2020",
            id: "P202005757US01"
        },
        {
            title: "System testing infrastructure with hidden variable, hidden attribute, and hidden value detection",
            short: "Using fault localization and historical data of testcase success rate to differentiate between problems in the model and hidden attributes.",
            filed: "Dec 15, 2020",
            id: "P202005758US01"
        },
        {
            title: "System testing infrastructure with hidden variable, hidden attribute, and hidden value detection",
            short: "Source code identification of hidden attribute drivers.",
            filed: "Dec 15, 2020",
            id: "P202005759US01"
        },
        {
            title: "Compressing multi-attribute vector into a single eigenvalue for ranking subject matter experts",
            short: "Compressing multi-attribute input into a single eigenvalue for subject matter expertise ranking.",
            filed: "Dec 15, 2020",
            id: "P202008169US01"
        }
    ],
    publications: [
        {
            title: "A HoneyNet Environment for Analyzing Malicious Actors",
            event: "IEEE MIT Undergraduate Research Technology Conference",
            type: "Published Paper",
            link: "https://ieeexplore.ieee.org/document/9244770",
            year: "October 2018"
        },
        {
            title: "LCARS Rebuilt From the Ground Up",
            event: "9th Annual Cybersecurity Conference at New York Institute of Technology",
            type: "Presentation",
            year: "2018"
        },
        {
            title: "Essential Blockchain",
            event: "Enterprise Cloud Computing Conference",
            type: "Presentation",
            year: "2018"
        }
    ]
}

const element = (tag='div', props={}, children=[]) => {
    let el = document.createElement(tag);
    Object.assign(el, props);
    el.append(...children);
    return el;
} 

const abt = (blurb) => {
    return [element('p', {innerHTML: blurb})]
}
const exp = (jobs) => {

    const html = jobs.map(job => {
        let elements = [
            element('h3', {innerHTML: job.title}),
            element('h4', {innerHTML: job.company}),
            element('p', {innerHTML: job.years}),
        ];

        if (job.description !== null && job.description !== "") {
            elements.push(element('p', {innerHTML: job.description}))
        }

        
        const bullets = job.bullets.map(bullet => {
            return element('li', {innerHTML: bullet})
        }) 

        elements.push(element('ul', {}, bullets));
        return elements;
    });
    return [].concat.apply([], html);
};

const pats = (patents) => {
    const html = patents.map(patent => { 
        console.log(patent)
        return[ 
            element('h4', {innerHTML: patent.title}), 
            element('p', {innerHTML: `Filed ${patent.filed}`}), 
        ];
    });
    console.log([].concat.apply([], html))
    return [].concat.apply([], html);
};

const edu = (schools) => {
    const html = schools.map(school => {
        return [
            element('h3', {innerHTML: school.name}),
            element('h4', {innerHTML: school.degree}),
            element('p', {innerHTML: school.years})
        ];
    });
    return [].concat.apply([], html);
}

fn = {
    about: abt,
    experience: exp,
    patents: pats,
    education: edu,
}

const display = (buildResume = () => {
    Object.keys(resume).map(section => {
        if (section in fn) {
            const div = document.getElementById(section);
            fn[section](resume[section]).map(elem => div.appendChild(elem));
        }
    })
})();