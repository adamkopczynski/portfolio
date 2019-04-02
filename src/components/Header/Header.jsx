import React from 'react';

const Header = () => {

    return(
        <React.Fragment>
            <header className="page-header" id="home">
                <div className="row justify-content-between">
                    <div className="col-sm-6 col-md-2">
                        <a className="logo" href="https:\adamkopczynski.github.io" title="Adam Kopczynski - Junior React Developer">
                            AK
                        </a>
                    </div>
                    <div className="col-md-5">
                        <nav className="page-nav">
                            <ul className="menu">
                                <li><a href="#home" className="menu-item">Home</a></li>
                                <li><a href="#about" className="menu-item">About me</a></li>
                                <li><a href="#portfolio" className="menu-item">Portfolio</a></li>
                                <li><a href="#contact" className="menu-item">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <div className="skewed-bg ">
                <div className="skewed-content">
                    <div className="row">
                        <div className="top-section">
                            <div className="row justify-content-center">
                                <div className="col-md-5">
                                    <h1>Hello!</h1>
                                    <p>I am junior <strong>javascript developer</strong>.</p>
                                    <a href="#about" className="button">Show More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header;