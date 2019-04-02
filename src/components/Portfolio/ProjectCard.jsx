import React from 'react';
import PropTypes from 'prop-types';

import reactImage from 'assets/images/react.png';

const PortfolioCard = ({image, imgSize, mainTechnology, technologies, description, name, ...props}) => {

    const techLogo = {
        'react': reactImage
    }

    return(
        <div className="item card">

            {mainTechnology && 
                <div className="technology">
                    <img src={techLogo[mainTechnology]} alt='Main project technology.' />
                </div>
            }

            {image && <img src={image} alt='Project image.' className='project-image' />}

            <div className="card-content">
                <h3 className="card-title">{name}</h3>

                <div className="project-description">
                    {description}
                </div>

                <div className="technologies">
                    {technologies.map(item => <span>{item}</span>)}
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard;