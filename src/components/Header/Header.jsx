import React from 'react';

const Header = () => {

    return(
        <header className="page-header" id="home">
            <div className="row justify-content-between">
                <div className="col-sm-6 col-md-2">
                    <a className="logo" href="https:\adamkopczynski.github.io" title="Adam Kopczynski - Junior React Developer">
                        AK
                    </a>
                </div>
                <div className="col-md-5">
                    <nav className="page-nav ">
                        <ul className="menu nav justify-content-end">
                            <li><a href="#home" className="menu-item">Home</a></li>
                            <li><a href="#about" className="menu-item">About me</a></li>
                            <li><a href="#portfolio" className="menu-item">Portfolio</a></li>
                            <li><a href="#skills" className="menu-item">Skills</a></li>
                            <li><a href="#contact" className="menu-item">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;