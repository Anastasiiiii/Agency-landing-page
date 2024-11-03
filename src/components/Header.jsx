import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import Menu from "./Menu";
import bgImageBig from "../images/desktop/image-header.jpg";
import bgImageSmall from "../images/mobile/image-header.jpg";

const Header = () => {
    const [isMobile, setIsMobile] = useState(typeof window !== "undefined" && window.innerWidth < 500);

    const arrowDownIcon = (
        <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#FFF" strokeWidth="6" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 3v100M3 95.484l15 15 15-15" />
            </g>
        </svg>
    );

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 500);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="header-container" style={{ backgroundImage: `url(${isMobile ? bgImageBig : bgImageBig})` }}>
            <Menu isMobile={isMobile} />
            <div className="header-main-text">
                <p>We are creatives</p>
                <span id="arrow-down-icon">{arrowDownIcon}</span>
            </div>
        </div>
    );
};

export default Header;
