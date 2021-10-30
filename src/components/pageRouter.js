import React from 'react'
import '../App.css'

export default function PagesRouter(props) {     
    return (
        <div>
           <title>Corporality Pages</title>
            <div className="app">
               <h1> Nishant and Ankit's Work</h1>
                <div className="app_link">
                    <h4>Click
                    <a className="link" href="/homePage">Here</a>
                    Corporality HomePage</h4>
                </div>
                <div className="app_link">
                    <h4>Click
                    <a className="link" href="/cxoStrategy">Here</a>
                    CXO Strategy</h4>
                </div>
            </div>
           
        </div>
    )
}