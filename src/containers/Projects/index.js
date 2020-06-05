import React from "react";
import { Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProjects, doneFetchingProjects } from '../../redux/actions/projectActions';


const Projects = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    const [firstLoad, setFirstLoad] = useState(true);
    const { projects, isFetchingProjects } = state.projectReducer;

    const exceptions = [
        'dgisolfi',
        'LegacyDgisolfiSite',
    ]
   
    if (firstLoad){
        setFirstLoad(false);
        dispatch(fetchProjects());
    } 

    return (
        <div>
        <h1 style={{textAlign:'center'}}>Projects</h1>
            <div class="bx--row" style={{justifyContent:'center', margin: '0.5rem'}}>
                {
                    ((projects !== undefined)
                    ? (
                        projects.filter((repo) => (
                                !(exceptions.indexOf(repo.name ) > -1) 
                                && !((repo.name.toLowerCase()).includes("cmpt"))
                            )
                        ).sort(((a,b) => {
                            return new Date(b.pushed_at) - new Date(a.pushed_at);
                        })).map((repo) => (
                            <div class="bx--row" style={{justifyContent:'center', margin: '0.5rem'}}>
                                <Card style={{ width: '18rem', borderRadius: "0", boxShadow: `1px 3px 1px #9E9E9E`}}>
                                    <Card.Body>
                                        <Card.Title>{repo.name}

                                        <span class="float-right">
                                            {repo.stargazers_count}<span role="img" aria-label="" aria-labelledby="">⭐</span>
                                        </span>
                                        
                                        </Card.Title>
                                        
                                        <Card.Subtitle className="mb-2 text-muted">{ repo.language }</Card.Subtitle>
                                        <Card.Text>
                                        { repo.description }
                                        </Card.Text>
                                    </Card.Body>
                                    <div class="bx--row">
                                        <Card.Link style={{ paddingLeft:'1.5rem', paddingBottom:'0.5rem'}} href={repo.html_url}>Source Code</Card.Link>
                                        {
                                            (((repo.homepage !== null) && repo.homepage !== "") 
                                            ? (
                                                <Card.Link style={{ paddingBottom:'0.5rem', justifyContent:'right'}} href={repo.homepage}>Homepage</Card.Link>
                                            ) : (
                                                <p></p>
                                            ))  
                                        }
                                    </div>
                                        
                                </Card>
                            </div>

                        ))
                    ):
                    (
                        <p></p>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects;