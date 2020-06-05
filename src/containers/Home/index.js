import React from "react";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchHomePage, doneFetchingHomePage } from '../../redux/actions/pageActions';



const Home = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    const [firstLoad, setFirstLoad] = useState(true);
    const { home, isFetchingHomePage } = state.pageReducer;
   
    if (firstLoad){
        setFirstLoad(false);
        dispatch(fetchHomePage());
    } 
      
    return (
        <div>
            <div class="bx--row" style={{justifyContent:'center'}}>
                <div className="bx--col" style={{backgroundColor: "#f2f2f2"}}>
                    <div class="bx--row"  style={{justifyContent:'center', alignItems:'center', paddingTop:  '2vh'}}>
                        <div class="bx--col-lg-16"><img src={require('../../static/daniel.jpg')} alt="" style={{borderRadius: '50%', height: '275px'}} /></div>
                    </div>
                    <div class="bx--row" style={{paddingTop:  '2vh'}}>
                        <div className="bx--col"  style={{justifyContent:'center'}}>
                            <h1 style={{textAlign:'center'}}>Daniel <span style={{color:'#0f62fe'}}>Gisolfi</span></h1>
                            <p style={{fontSize: '18px', textAlign:'center', paddingTop: '2vh'}}>
                            {
                                ((home !== undefined)
                                ? (
                                    <p>{home.intro}</p>
                                )
                                : (
                                    <p></p>
                                )
                            )}
                            </p>
                        </div> 
                    </div>
                </div>
            </div>
            <div class="bx--row" style={{justifyContent:'center',  paddingTop:"3vh"}}>
                <div className="bx--col" style={{alignItems:'center', paddingTop:"5vh", backgroundColor: "#f2f2f2"}}>
                    <h1 style={{textAlign:"center"}}>Recent Projects</h1>
                    <section class="bx--structured-list">
                        <div class="bx--structured-list-thead">
                            <div class="bx--structured-list-row bx--structured-list-row--header-row">
                                <div class="bx--structured-list-th">Project</div>
                                <div class="bx--structured-list-th">Description</div>
                                <div class="bx--structured-list-th">Month</div>
                            </div>
                        </div>
                        {
                            ((home !== undefined)
                            ? (
                                home.recent_projects.map(prj => (
                                    <div class="bx--structured-list-tbody">
                                        <div class="bx--structured-list-row">
                                            <div class="bx--structured-list-td bx--structured-list-content--nowrap">{prj.name}</div>
                                            <div class="bx--structured-list-td">
                                            {prj.description} {
                                                ((prj.link.href.length !== 0)
                                                ?(
                                                    <a href={prj.link.href}>{prj.link.text}</a>
                                                ): (
                                                    <p></p>
                                                ))
                                            }
                                            </div>
                                            <div class="bx--structured-list-td">{prj.month}</div>
                                        </div>
                                    </div>
                                ))
                            ) 
                            : (
                                <p></p>
                            )
                            )
                        }
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Home;