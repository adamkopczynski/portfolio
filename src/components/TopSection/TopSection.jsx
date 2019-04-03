import React from 'react';

const TopSection = () => {

    return(
        <div className="skewed-bg ">
            <div className="skewed-content">
                <div className="row">
                    <div className="top-section">
                        <div className="row justify-content-center">
                            <div className="col-md-5">
                                <div>
                                    <h1 className="top-section__title">Hello!</h1>
                                    <p>I am junior <strong>javascript developer</strong>.</p>
                                    <a href="#about" className="button">Show More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopSection;