import React from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

const Header = ({ darkMode, handleToggleDarkMode }) => {

    return (
        <div className="header">
            <h1>Notes</h1>
            <button
                onClick={() =>
                    handleToggleDarkMode(
                        (previousDarkMode) => !previousDarkMode
                    )
                }
                className="save toggle-mode" >
                Toggle Dark mode
                {/* {({darkMode} == false) && (<MdOutlineDarkMode />)}
                {({darkMode} == true) && (<MdDarkMode />)} */}

            </button>
        </div >
    );
};

export default Header;