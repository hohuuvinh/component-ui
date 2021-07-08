
import './style.css';
import React, { useEffect, useState } from 'react';
function MenuFacebook(props) {
    const [dropDown, setDropDown] = useState(false);
    const [move, setMove] = useState({ type: "" });
    const [style,setStyle]=useState("setting-drop");

    const [back,setBack]=useState(false);

    const ToggleDropDow = () => {
        setDropDown(!dropDown)
    }
    const MoveChild = (type) => {
        setMove({ type: type })
        setTimeout(() => {
            setStyle("set-display-block")
            
        }, 200);
        setBack(false)
       
    }

    const ButtonBack = (type) =>{
        setBack(true)
        setStyle("setting-drop")
        setMove("");
    }
    console.log(back)
    return (

        <nav>
            <div className="drop-btn" onClick={ToggleDropDow}>
                Drop down <span className="fas fa-caret-down" />
            </div>
            <div className={dropDown ? "tooltip show" : "tooltip"} />
            <div className={dropDown ? "wrapper show" : "wrapper"}>
                <ul className={move.type != "" ? (back==false?"menu-bar set-margin-left":"menu-bar") : "menu-bar"}>
                    <li>
                        <a href="#">
                            <div className="icon">
                                <span className="fas fa-home" />
                            </div>
                            Home
                        </a>
                    </li>
                    <li className="setting-item" onClick={() => MoveChild("setting")}>
                        <a href="#">
                            <div className="icon">
                                <span className="fas fa-cog" />
                            </div>
                            Settings &amp; privacy <i className="fas fa-angle-right" />
                        </a>
                    </li>
                    <li className="help-item" onClick={() => MoveChild("help")}>
                        <a href="#">
                            <div className="icon">
                                <span className="fas fa-question-circle" />
                            </div>
                            Help &amp; support <i className="fas fa-angle-right" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="icon">
                                <span className="fas fa-user" />
                            </div>
                            About us
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="icon">
                                <span className="fas fa-comment-alt" />
                            </div>
                            Feedback
                        </a>
                    </li>
                </ul>
                {/* Settings & privacy Menu-items */}
                <ul className={move.type == "setting" ? (back==false?style:"setting-drop") : "setting-drop"} >
                    <li onClick={()=>ButtonBack("setting")} className="arrow back-setting-btn"><span className="fas fa-arrow-left" />Settings &amp; privacy</li>
                    <li>
                        <a href="#">
                            <div className="icon">
                                <span className="fas fa-user" />
                            </div>
                            Personal info
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="icon">
                                <span className="fas fa-lock" />
                            </div>
                            Password
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="icon">
                                <span className="fas fa-address-book" />
                            </div>
                            Activity log
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="icon">
                                <span className="fas fa-globe-asia" />
                            </div>
                            Languages
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="icon">
                                <span className="fas fa-sign-out-alt" />
                            </div>
                            Log out
                        </a>
                    </li>
                </ul>
                {/* Help & support Menu-items */}
                <ul className={move.type == "help" ? (back==false?style:"setting-drop") : "setting-drop"} >
                    <li onClick={()=>ButtonBack("help")} className="arrow back-help-btn"><span className="fas fa-arrow-left" />Help &amp; support</li>
                    <li>
                        <a href="#">
                            <div className="icon">
                                <span className="fas fa-question-circle" />
                            </div>
                            Help centre
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="icon">
                                <span className="fas fa-envelope" />
                            </div>
                            Support Inbox
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="icon">
                                <span className="fas fa-comment-alt" />
                            </div>
                            Send feedback
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="icon">
                                <span className="fas fa-exclamation-circle" />
                            </div>
                            Report problem
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default MenuFacebook;