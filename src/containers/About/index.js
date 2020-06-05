import React from "react";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAboutPage, doneFetchingAboutPage } from '../../redux/actions/pageActions';
import { UnorderedList, ListItem } from "carbon-components-react";

const experience = [
    {title: 'Honeypot/Blockchain Researcher', company:'IBM / Marist Joint Study', years: 'January 2017 - Present', 
    description: <p>Working as a researcher on a wide range of technologies for the IBM joint study with Marist College.<div class="container"><li>Researching malicious attacks and possible vulnerabilities by creating honeypots to gather attack data.</li><li>Created a real-time data pipeline to provide machine learning and data analytic tools with malicious attack data.</li><li>Wrote and implemented a custom API to serve as a point of integration with a web dashboard for a data pipeline.</li><li>Developed a data analytics tool for graphing, plotting, and analyzing incoming attacks across multiple honeypots.</li><li>Researched distributed ledger technologies concepts and developed a public/permissionless blockchain asset to explore the technology as a data management utility.</li><li>Developed a real time web UI to illustrate a dynamic network of peers on a Blockchain ledger.</li><li>Served as the Docker SME for the IBM/Marist Joint Study; Educated colleagues and containerized all projects using Docker.</li></div></p>
}]

const About = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    const [firstLoad, setFirstLoad] = useState(true);
    const { about, isFetchingAboutPage } = state.pageReducer;
   
    if (firstLoad){
        setFirstLoad(false);
        dispatch(fetchAboutPage());
    }
    return (
        <div>
            <h1 style={{textAlign:'center'}}>About</h1>
            <div class="bx--row" style={{justifyContent:'center'}}>  
                <div className="bx--col-md-8 bx--col-lg-8" style={{backgroundColor: "#f2f2f2"}}>
                    <h1 style={{color:'#0f62fe'}}>Experience</h1>
                    {
                        ((about !== undefined)
                        ?(
                            about.experience.map((job) => (
                                <div>
                                    <h3>{job.title}</h3>
                                    <h4>{job.company}</h4>
                                    <p>{job.years}</p>
                                    <p>{job.description}</p>
                                    <UnorderedList style={{flex: 1, paddingLeft: '2vh'}}>
                                    {job.bullets.map((bullet) => (
                                        <ListItem>{bullet}</ListItem>
                                    ))}
                                    </UnorderedList>
                                </div>
                            ))
                        )
                        :(
                            <p></p>
                        ))
                    }
                </div>
            </div>
            <div class="bx--row" style={{justifyContent:'center', paddingTop:'3vh'}}>
                <div className="bx--col-md-8 bx--col-lg-8" style={{backgroundColor: "#f2f2f2"}}>
                    <h1 style={{color:'#0f62fe'}}>Publications</h1>
                    {
                        ((about !== undefined)
                        ?(
                            about.publications.map((pub) => (
                                <div>
                                <h3>{pub.title}</h3>
                                <h4>{pub.publisher}</h4>
                                <p>{pub.year}</p>
                                {((pub.link.href.length !== 0)
                                ?(
                                    <a href={pub.link.href}>{pub.link.text}</a>
                                ): (
                                    <p></p>
                                ))}
                            </div>
                            ))
                        )
                        :(
                            <p></p>
                        ))
                    }
                </div>
            </div>
            <div class="bx--row" style={{justifyContent:'center', paddingTop:'3vh'}}>
                <div className="bx--col-md-8 bx--col-lg-8" style={{backgroundColor: "#f2f2f2"}}>
                    <h1 style={{color:'#0f62fe'}}>Education</h1>
                    {
                        ((about !== undefined)
                        ?(
                            about.education.map((edu) => (
                                <div>
                                <h3>{edu.school}</h3>
                                <h4>{edu.degree}</h4>
                                <p>{edu.years}</p>
                            </div>

                            ))
                        )
                        :(
                            <p></p>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default About;