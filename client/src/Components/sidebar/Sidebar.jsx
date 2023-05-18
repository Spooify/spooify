import React from "react";
import "./Sidebar.css"



// import spooify_white from "../sidebar/images/spooify_white.png"


function Sidebar(){

    const searchimgURL = new URL("./images/search_icon.png", import.meta.url);
    const homeimgURL = new URL("./images/home_icon.png", import.meta.url);
    return(
        <div className="sidebar">
            <div className="sidebarItem">
                <div className="home">
                    <img src={homeimgURL} alt="home" className="homeimg"/>
                    Home
                </div>
                <div className="search">
                    <img src={searchimgURL} alt="search" className="searchimg"/>
                    Search
                </div>
            </div>

            
            <div className="playlist">
                <div className="userList">
                    <div className="libLine"></div>
                    <div className="libLine"></div>
                    <div className="libIcon"></div>
                    <p className="playlistTitle">
                        Your Library
                    </p>
                </div>
                <div className="buttons">
                    <button>
                        Playlists
                    </button>
                    <button>
                        Artists
                    </button>
                    <button>
                        Albums
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;