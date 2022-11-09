import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


function Nav() {
    return (
          <div className="nav">
                    <div>
                        <h1>Dasturlash</h1>
                    </div>
                    <div className="menu">
                        <ul>
                            <li><a href="#">Front-end</a></li>
                            <li><a href="#">Back-end</a></li>
                            <li><a href="#">Full-stack</a></li>
                            <li><a href="#">Settings</a></li>
                        </ul>
                    </div>
                </div>
    )
}

export default Nav;
