import React from "react";
import "../style/sidebar.scss";
import { useSelector, useDispatch } from "react-redux";
import { ImCross } from "react-icons/im";
import { hideSidebar } from "../store/actions/sidebar";

function Sidebar() {
    const sidebar = useSelector((state) => state.sidebar)
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(hideSidebar())
    }
    return(
        <div className="sidebar" id={ sidebar ? "SHOW_SIDEBAR" : "HIDE_SIDEBAR" }> 
            <ul className="sidebar__links">
                <li className="sidebar__link">Home</li>
                <li className="sidebar__link">Merch</li>
                <li className="sidebar__link">EPK</li>
            </ul>
            <div className="sidebar__cancel">
                <ImCross onClick={ () => handleClick() } />
            </div>
        </div>
    )
}

export default Sidebar;