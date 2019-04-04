import React from 'react';

import Divider from 'components/Divider';
import Button from 'components/Button';

const TopSection = () => {

    return(
        <div className="skewed-bg ">
            <div className="skewed-content">
                <div className="row">
                    <div className="top-section">
                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                <h1 className="top-section__title">Hello!</h1>
                                <Divider />
                                <p>I am junior <strong>javascript developer</strong>.</p>
                                <Button to="#about" color='white'>Show more</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopSection;