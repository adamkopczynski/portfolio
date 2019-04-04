import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import reactImage from 'assets/images/react.png';

const PortfolioCard = ({image, imgSize, mainTechnology, technologies, description, name, ...props}) => {

    const techLogo = {
        'react': reactImage,
        'node': 'https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png'
    }

    return(
        <div className="item card">

            {mainTechnology && 
                <div className="technology">
                    <img src={techLogo[mainTechnology]} alt='Main project technology.' />
                </div>
            }

            {image && <img src={image} alt='Project ui.' className='project-image' />}

            <div className="card-content">
                <h3 className="card-title">{name}</h3>

                <div className="project-description">
                    {description}
                </div>

                <div className="btn-group">
                    <Button to='#'>Demo</Button>
                    <Button to='#'>Code</Button>
                </div>

                <div className="technologies">
                    {technologies.map(item => <span>{item}</span>)}
                </div>
            </div>
        </div>
    )
}

PortfolioCard.propTypes = {
    image: PropTypes.string.isRequired,
    mainTechnology: PropTypes.string.isRequired,
    technologies: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

PortfolioCard.defaultProps = {
    image: '',
    name: 'project'
}

export default PortfolioCard;